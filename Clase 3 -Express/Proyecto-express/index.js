const express = require("express");
const { router: coursesRouter } = require("./routes/courses");
const { router: studentsRouter } = require("./routes/students");

const PORT=3000;
const app = express();

//middlewares
app.use((req,res,next)=>{
    console.log("middleware de aplicacion para todas las rutas");
    next();
});

app.get("/",(req,res)=>{
    res.send("Respuesta del servidor");
})

//impletacion del router en app
//rutas Cursos
app.use("/courses", coursesRouter);
// localhost:3000/courses/

//rutas Estudiantes
app.use("/students",studentsRouter);

app.use((req,res,next)=>{
    res.status(404).send("La ruta no existe");
});

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto: ${PORT}`);
})