const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const devMiddleware = require("webpack-dev-middleware")
const path = require("path");
const port = 8000;

// mongoose.connect(
//  "mongodb://localhost/writer",
//  { useNewUrlParser: true },
//  function(err, connection) {
//   if (err) throw err;
//   else console.log("connected to mongodb");
//  }
// )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    devMiddleware(compiler, {
      // noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(cors());

app.use("/api", require("./server/routes/api"));
app.use(require("./server/routes/index"));

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
