var path = require('path');

module.exports = {
  entry: {
    dist: "./lib/index.ts",
    example: "./example/index.tsx"
  },

  output: {
    filename: "[name]/bundle.js",
    path: __dirname,
    libraryTarget: "umd"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [
          path.resolve(__dirname, "lib"),
          path.resolve(__dirname, "example")
        ]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
