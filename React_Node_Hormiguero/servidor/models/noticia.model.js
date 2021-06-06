module.exports = (sequelize, Sequelize) => {
    const Noticia = sequelize.define("noticia", {
        
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Noticia;
  };