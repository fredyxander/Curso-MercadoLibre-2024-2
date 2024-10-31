//key-value
let user = {
    name:"pepe",
    lastname:"perez",
    greetings: function(){
        console.log(`Hola soy ${this.name}`);
    }
}

//acceder prop de un objeto
// console.log(user.name)
// console.log(user["lastname"]);

const filtro = "lastname";
// console.log(user[filtro]);

//metodos:
user.greetings();