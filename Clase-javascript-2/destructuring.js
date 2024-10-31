const nombres = ["Mariana", "Lucas", "Pepe"];
// const user1 = nombres[0];
// const user2 = nombres[1];
// const user3 = nombres[2];
// console.log(user1,user2,user3);


//      0     1     2
const [,user2,user3] = nombres;
// console.log(user2,user3);

//objetos
let user = {
    name:"pepe",
    age:20,
    lastname:"perez",
}
// const apellido = user.lastname;
const {lastname:apellido, name, age} = user;
// console.log(apellido);

//deep destructuring
let person = {
    name:"pepe",
    age:20,
    lastname:"perez",
    address:{
        city:"Miami",
        street:"avenida 25"
    }
}
// const ciudad = person.address.city;
const {address:{city:ciudad}} = person;
// console.log(ciudad);

//destructuracion en funciones
const getInfo = ({ name , age })=>{
    console.log(age);
}

getInfo(person);