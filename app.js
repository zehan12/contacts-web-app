require("dotenv").config()
// console.log(process.env)
const express = require('express');

const app = express();
const path = require('path');
const mongoose = require("mongoose");
const cors = require('cors');

const port = 8000;

if (process.env.NODE_ENV === 'development') {
  const devBundle = require('./devBundle');
  devBundle.compile(app);
}

mongoose.connect( process.env.MONGO_URI,
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => { console.log('Connected to database: ', err ? `false due to ${err}` : true)});


const getActualRequestDurationInMilliseconds = start => {
  const NS_PER_SEC = 1e9; //  convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};


let demoLogger = (req, res, next) => { //middleware function
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
  let log = `[${formatted_date}] ${method}:${url} ${status} ${durationInMilliseconds.toLocaleString()} ms`;
  console.log(log);
  next();
};


app.use(demoLogger);
console.log(process.env.NODE_ENV)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use('/api', require('./server/routes/api'));
app.use( '/api/contact/', require('./server/routes/contact'));
app.use( '/api/message', require("./server/routes/message"));
app.use(require('./server/routes/index'));

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`); // eslint-disable-line no-console
});
