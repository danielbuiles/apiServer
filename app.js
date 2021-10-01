const { append } = require("express/lib/response");
const  ServidorModelo  = require("./models/servidorModelo");

const servidor =new ServidorModelo();

servidor.encenderServidor();