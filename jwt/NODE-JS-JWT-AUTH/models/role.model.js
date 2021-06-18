module.exports = (sequelize, Sequelize)=>{
    
    const Role = sequelize.define("roles",
    {

        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        
        },

        name:{
            type: Sequelize.STRING
        }
    });
    
    Role.associate = function (models) {
        Role.belongsTo(models.User)
      }
      
    return Role;
};