// Express web server
const express = require("express");  // express is for building the Rest apis
const bodyParser = require("body-parser"); // body-parser helps to parse the request and create the req.body object.
const cors = require("cors"); // cors provids Express middleware to enable CORS with various options.

const app = express(); // create an Express app, then add body-parser and cors middlewares using app.use() method.
// set origin: define a GET route which is simple for test; listen on port 3000 for incoming requests.
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// call sync()
const db = require("./models/index");
// In development, you may need to drop existing tables and re-sync database. Just use force: true
// !!!!!!Only run this for the first time
db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Java House!" });
});

// inlude routes in server.js
require("./routes/drink.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});