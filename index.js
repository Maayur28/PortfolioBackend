const express = require("express");
const cors = require("cors");
const routing = require("./routes/routing");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use("/", routing);

app.listen(process.env.PORT || 9003, (err) => {
  if (!err) {
    console.log(`Server started at port ${[process.env.PORT || 9003]}`);
  } else {
    console.log(`Error in setting up user server`);
  }
});

module.exports = app;
