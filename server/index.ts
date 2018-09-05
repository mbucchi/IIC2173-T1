import * as hapi from "hapi"
import * as inert from "inert"
import * as crumb from "crumb"
import * as path from "path"
import * as cookie from "cookie"
import * as dotenv from "dotenv"
import { initDB, getPosts, addPost } from "./db"

dotenv.config()

const PORT = Number.parseInt(process.env.PORT)
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY
const AUTH_DOMAIN = process.env.AUTH_DOMAIN
const DB_URL = process.env.DB_URL
const PROJECT_ID = process.env.PROJECT_ID

initDB(FIREBASE_API_KEY, AUTH_DOMAIN, DB_URL, PROJECT_ID)

const server = new hapi.Server({
  port: PORT,
  routes: {
    files: {
      relativeTo: path.join(__dirname, "../public"),
    },
  },
})

const init = async () => {
  await server.register(inert)
  await server.register({
    plugin: crumb,
    options: {
      cookieOptions: {
        isSecure: false,
      },
      skip: (request: hapi.Request) => {
        if (!request.headers.cookie) return false
        const { crumb } = cookie.parse(request.headers.cookie)
        if (crumb && !!request.payload && typeof request.payload == "object") {
          ;(<any>request.payload).crumb = crumb
        }
        return false
      },
    },
  })

  server.route({
    method: "GET",
    path: "/posts",
    handler: async (request, h) => {
      const last_timestamp: number =
        (request.query &&
          Number.parseInt((<any>request.query)["last_timestamp"])) ||
        Number.MAX_SAFE_INTEGER
      return await getPosts(last_timestamp)
    },
  })

  server.route({
    method: "POST",
    path: "/posts",
    handler: async (request, h) => {
      if (!(<any>request.payload).content) {
        return h.response().code(422)
      }
      const { content } = <any>request.payload
      const requestIP: string = request.info.remoteAddress
      const newPost = await addPost(content, requestIP)
      if (!newPost) return h.response().code(500)
      return h.response(newPost).code(201)
    },
  })

  server.route({
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: ".",
        index: "index.html",
      },
    },
  })

  await server.start()
}

process.on("unhandledRejection", err => {
  console.log(err)
  process.exit(1)
})

init()
