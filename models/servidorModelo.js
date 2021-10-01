const express = require("express");
require('dotenv').config();

class ServidorModelo{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
    }

    encenderServidor(){
        this.app.listen(this.port,()=>{
            console.log(`conectado al servidor: ${this.port}`)
        });
    }

    enrutarPeticiones(){
        app.get('/',(req,res)=>{
            res.send('Hola puedes hacer peticiones ;D');
        })
        
        app.get('/avanzada/v1/jugadores',(req,res)=>{
            res.send("Datos: ");
        })
    }

    conectarBaseDatos(){
        
    }
}

module.exports=ServidorModelo;