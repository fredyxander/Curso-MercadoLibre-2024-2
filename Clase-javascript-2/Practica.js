let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

// Utilizando el array anterior crear una función para cada uno de los siguientes requerimientos:
// 1.  Agregarle un id único a cada producto empezando en 1.
products.forEach((product, index)=>product.id=index+1);
// console.log(products);
// 2. Imprimir en consola el nombre de cada uno de los productos.
products.forEach((product, index)=>console.log(product.name));
// 3. Imprimir en consola el producto con el id 3.
const product3 = products.find(p=>p.id === 3);
// console.log(product3);
// 4. Imprimir en consola los productos con color “black”.
const productsBlack = products.filter(product=>product.colors.includes("black"));
// console.log(productsBlack);
// 5. Imprimir en consola los productos que no tienen color.
const productsNoColor = products.filter(product=>!product.colors.length);
// console.log(productsNoColor);
// 6. Agregar un producto nuevo al array con las mismas propiedades de los productos ya existentes.
products.push({ name: 'Mouse inalambrico', price: 400, quantity: 30, colors: ["black", "blue"], id:products.length+1 });
// 7. Eliminar del array los productos fuera de stock.
const productsStock = products.filter(product=>product.quantity >0);
// console.log(productsStock);
// 8. Imprimir en consola la sumatoria del stock de todos los productos.
const totalProducts = products.reduce((acc,i)=>acc+i.quantity,0);
// console.log(totalProducts)
// 9. Imprimir los productos con un precio mayor a un importe determinado.
const expensiveProducts = products.filter(product=>product.price>1000);
// console.log(expensiveProducts)

