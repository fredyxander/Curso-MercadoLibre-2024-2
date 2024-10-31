const nombres = ["Mariana", "Lucas", "Pepe"];
nombres.push("Laura");
// console.log(nombres);

//metodo pop
nombres.pop();
// console.log(nombres);

//metodo join
const nombresString = nombres.join(" ");
// console.log(nombresString)

//alt+shift+tecla arriba o abajo
//metodo filter devuelve un arreglo.
const users = [
    {name:"Mariana", course:"javascript"},
    {name:"Lucas", course:"css"},
    {name:"Felipe", course:"css"},
    {name:"Juan", course:"nodejs"},
];

const usersCss = users.filter((user)=>user.course === "css");
// console.log(usersCss);

//metodo find devuelve el primer elemento que cumple la condicion
const userCss = users.find((user)=>user.course === "css");
// console.log(userCss);

//metodo map
const usersNames = users.map((user)=>user.name);
console.log(usersNames);

//metodo forEach
const nuevoArreglo=[];
users.forEach((user)=>{
    nuevoArreglo.push(user);
});

const multiplicar2 = (num)=>num*2;
const numeros = [1,2,3,4];
const numerosPor2 = numeros.map(multiplicar2);
console.log(numerosPor2);