module.exports = (sequelize, Sequelize)=>{

    const User= sequelize.define("users",{
        
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
   
        },

        username:{
            type: Sequelize.STRING
        },
        email:   {
            type: Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        }
    });

    User.associate = function(models){
        User.hasmany(models.Role,{foreignKey:'id', sourceKey:'roleId'});
    }

    return User;
};