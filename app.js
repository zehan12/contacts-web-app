const express = require('express');

const app = express();
const path = require('path');
// const mongoose = require("mongoose");
const cors = require('cors');

const port = 8000;

if (process.env.NODE_ENV === 'development') {
  const devBundle = require('./devBundle');
  devBundle.compile(app);
}

// mongoose.connect(
//  "mongodb://localhost/writer",
//  { useNewUrlParser: true },
//  function(err, connection) {
//   if (err) throw err;
//   else console.log("connected to mongodb");
//  }
// )

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use('/api', require('./server/routes/api'));
app.use(require('./server/routes/index'));

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`); // eslint-disable-line no-console
});
