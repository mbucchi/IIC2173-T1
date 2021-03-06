"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var hapi = require("hapi");
var inert = require("inert");
var crumb = require("crumb");
var path = require("path");
var cookie = require("cookie");
var dotenv = require("dotenv");
var db_1 = require("./db");
dotenv.config();
var PORT = Number.parseInt(process.env.PORT);
var DB_HOST = process.env.DB_HOST;
var DB_USER = process.env.DB_USER;
var DB_PW = process.env.DB_PW;
var DB_DB = process.env.DB_DB;
var db = new db_1.Database(DB_HOST, DB_USER, DB_PW, DB_DB);
var server = new hapi.Server({
    port: PORT,
    routes: {
        files: {
            relativeTo: path.join(__dirname, "../public")
        }
    }
});
var init = function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server.register(inert)];
            case 1:
                _a.sent();
                return [4 /*yield*/, server.register({
                        plugin: crumb,
                        options: {
                            cookieOptions: {
                                isSecure: false
                            },
                            skip: function (request) {
                                if (!request.headers.cookie)
                                    return false;
                                var crumb = cookie.parse(request.headers.cookie).crumb;
                                if (crumb && !!request.payload && typeof request.payload == "object") {
                                    ;
                                    request.payload.crumb = crumb;
                                }
                                return false;
                            }
                        }
                    })];
            case 2:
                _a.sent();
                server.route({
                    method: "GET",
                    path: "/posts",
                    handler: function (request, h) { return __awaiter(_this, void 0, void 0, function () {
                        var last_timestamp;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    last_timestamp = (request.query && Number.parseInt(request.query["last_id"])) ||
                                        Number.MAX_SAFE_INTEGER;
                                    return [4 /*yield*/, db.getPosts(last_timestamp)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); }
                });
                server.route({
                    method: "POST",
                    path: "/posts",
                    handler: function (request, h) { return __awaiter(_this, void 0, void 0, function () {
                        var content, requestIP, newPost;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!request.payload.content) {
                                        return [2 /*return*/, h.response().code(422)];
                                    }
                                    content = request.payload.content;
                                    requestIP = request.headers["x-real-ip"] || request.info.remoteAddress;
                                    return [4 /*yield*/, db.addPost(content, requestIP)];
                                case 1:
                                    newPost = _a.sent();
                                    if (!newPost)
                                        return [2 /*return*/, h.response().code(500)];
                                    return [2 /*return*/, h.response(newPost).code(201)];
                            }
                        });
                    }); }
                });
                server.route({
                    method: "GET",
                    path: "/{param*}",
                    handler: {
                        directory: {
                            path: ".",
                            index: "index.html"
                        }
                    }
                });
                return [4 /*yield*/, server.start()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
process.on("unhandledRejection", function (err) {
    console.log(err);
    process.exit(1);
});
init();
