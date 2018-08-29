module.exports = {
  roots: ["<rootDir>/src/", "<rootDir>/test/"],
  setupFiles: ["./test/setup.ts"],
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/mock-file.ts",
    "\\.(css|less)$": "identity-obj-proxy", // "<rootDir>/test/mock-style.ts",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  coveragePathIgnorePatterns: [
    "./node_modules",
    "./out-electronapp",
    "./out-webapp",
    "./out-serverapp",
    "./out-tsc",
    "./build",
    "./dist",
    "./test",
    "./docs",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  collectCoverage: false,
  testURL: "http://localhost/",
}
