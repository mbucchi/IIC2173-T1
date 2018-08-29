import * as hapi from "hapi"
import * as inert from "inert"
import * as path from "path"

const server = new hapi.Server({
  port: 3000,
  host: "localhost",
  routes: {
    files: {
      relativeTo: path.join(__dirname, "public"),
    },
  },
})

const init = async () => {
  await server.register(inert)

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
