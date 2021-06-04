
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
