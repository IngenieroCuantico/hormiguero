const express = require("express");
const bodyParser = require("body-parser");
const cors= require("cors");

const app= express();

var corsOptions={
    origin:"http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res)=>{

    res.json({message: "Bienvenido"});
    res.json({mmessage:"Al Servidor Central"});
    res.json({message: "DarkLight"});
});


const PORT = process.env.PORT || 8080;
const Puerto8001 = process.env.Puerto || 8001;
const Socket8082 = process.env.Socket8082 || 8082;


app.listen(Socket8082, ()=>{
    console.log(`Universal Corriendo por el Puerto: ${Socket8082}.`);
});
/*
app.listen(Puerto8001,()=>{
    console.log(`Universal Corriendo por el Puerto ${Puerto8001}`);
});

*/

const db= require("./models/index");
const Role = db.role;

db.sequelize.sync({force:true }).then(()=>{
    console.log('Eliminando Y Re-Sincronizando DB');
    initial();
});



function initial(){
    
    Role.create({
        id:1,
        name:"user"
    });

    Role.create({
        id:2,
        name:"moderator"
    });

    Role.create({
        id:3,
        name:"admin"
    })

}

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);