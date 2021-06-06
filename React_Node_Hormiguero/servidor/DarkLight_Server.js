/*
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions={
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));
// parse requests of content-type - application/json

app.unsubscribe(bodyParser.json());


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Al Servidor Del Hormiguero" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}.`);
});
*/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



const db = require("./models");
require("./app/routes/noticia.routes")(app);


db.sequelize.sync({ force: true }).then(() => {
  console.log("Eliminando y Re-Sync db.");
});




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la aplicacion Hormiguero::: Server" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor Corriendo en el puerto: ${PORT}.`);
});
