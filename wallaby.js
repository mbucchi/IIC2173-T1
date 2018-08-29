module.exports = function(wallaby) {
  return {
    files: [
      "tsconfig.json",
      "package.json",
      "src/**/*.ts?(x)",
      "src/**/*.snap",
      "test/**/*.*",
      "!src/**/*.test.ts?(x)",
    ],
    tests: ["src/**/*.test.ts?(x)"],

    env: {
      type: "node",
      runner: "node",
    },

    testFramework: "jest",

    debug: true,

    maxConsoleMessagesPerTest: 500,
  }
}
