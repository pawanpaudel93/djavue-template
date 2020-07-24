const BundleTracker = require("webpack-bundle-tracker");

// Change this to match the path to your files in production (could be S3, CloudFront, etc.)
const DEPLOYMENT_PATH = "/static/dist"

// for config you can visit https://cli.vuejs.org/config/
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? DEPLOYMENT_PATH : "http://localhost:8080/",
  outputDir: "staticfiles/dist",

  devServer: {
    // public: "localhost:8080",
    devServer: {
      proxy: 'http://localhost:8000' // This will tell the dev server to proxy any unknown requests (requests that did not match a static file) to http://localhost:8000
    },
  },

  configureWebpack: {
    plugins: [
      new BundleTracker({ path: __dirname, filename: "webpack-stats.json" })
    ]
  },
  // uncomment to remove eslint
//   chainWebpack: config => {
//     config.module.rules.delete('eslint');
// }
};
