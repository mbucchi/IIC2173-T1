const path = require("path")
const SRC_DIR = path.join(__dirname, "src/")
const ASSET_PATH = "assets/"
const DIST_DIR = path.join(__dirname, "dist/")

module.exports = {
  entry: {
    bundle: `${SRC_DIR}index.tsx`,
  },
  output: {
    filename: "public/[name].js",
    path: DIST_DIR,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000&minetype=image/png" },
      {
        test: /\.(jpg|pdf)$/,
        loader: "file-loader",
        options: { name: `${ASSET_PATH}[hash].[ext]` },
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
}
