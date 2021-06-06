module.exports = app => {
    const noticias = require("../controllers/noticia.controller.js");
  
    var ruta = require("express").Router();
  
    // Create a new Tutorial
    ruta.post("/", noticias.create);
  
    // Retrieve all Tutorials
    ruta.get("/", noticias.findAll);
  
    // Retrieve all published Tutorials
    ruta.get("/published", noticias.findAllPublished);
  
    // Retrieve a single Tutorial with id
    ruta.get("/:id", noticias.findOne);
  
    // Update a Tutorial with id
    ruta.put("/:id", noticias.update);
  
    // Delete a Tutorial with id
    ruta.delete("/:id", noticias.delete);
  
    // Delete all Tutorials
    ruta.delete("/", noticias.deleteAll);
  
    app.use('/api/noticias', ruta);
  };
  