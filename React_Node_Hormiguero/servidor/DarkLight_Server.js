const http = require("http");

const host = 'localhost';
const port = 8000;

const requeridoEscuchando = function(req, res){
    res.writeHead(200);
    res.end("Mi Primer Servidor");
};

/** creacion de servidor */
const server=http.createServer(requeridoEscuchando);
server.listen(port, host, () =>{
    console.log(`servidor DarkLidght corriendo en http:// ${host}:${port}`);
});