const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

require('dotenv').config()

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose Connected')
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});