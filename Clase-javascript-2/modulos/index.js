import { getUser } from "./usersModule.js";

console.log(getUser(2));


//package.json "type":"commonjs"
// module.exports = { ... }
// const { ...} = require("ruta del archivo del modulo");

//package.json "type":"module"
// export { ... }
// import { ...}  from "ruta del archivo del modulo";