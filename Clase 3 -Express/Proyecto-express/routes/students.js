const express = require("express");
const {checkRole} = require("../middlewares/checkRole");

const router = express.Router();

router.get("/", checkRole ,(req,res)=>{//get: obtener informacion
    //logica
    //conectarse a base de datos
    //transformar a json
    //eliminar repetidos
    res.send("Listado de estudiantes");
});

router.get("/:id", (req,res)=>{
    res.send("Informacion del estudiantes");
});

router.post("/", checkRole , (req,res)=>{//post: crear informacion
    res.send("Crear estudiante");
});

router.delete("/:id", checkRole ,(req,res)=>{
    console.log("ejecucion de la ruta");
    res.send("Eliminar estudiante");
});

module.exports = {router};

// export es6
// export default router;
//export { router } o export const router = ''

//SOLID - single responsability -> 