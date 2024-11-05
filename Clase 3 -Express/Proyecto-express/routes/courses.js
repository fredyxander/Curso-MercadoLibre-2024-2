const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{//get: obtener informacion
    res.send("Listado de curso");
});
router.get("/:id",(req,res)=>{
    res.send("Informacion del curso");
});
router.post("/",(req,res)=>{//post: crear informacion
    res.send("Crear curso");
});
router.put("/:id",(req,res)=>{//post: crear informacion
    res.send("Editar curso");
});

module.exports = {router};