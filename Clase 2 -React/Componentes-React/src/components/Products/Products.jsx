import { CardProduct } from "./CardProduct/CardProduct";

const Componente1 = ()=><button>Ver mas</button>
const Componente2 = ()=><a href="">Ver mas</a>

export const Products = ()=>{
    
    const products = [
        {title: "Precio 1", price: 200, description:"", image:"https://picsum.photos/200/300"},
        {title: "Precio 2", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 3", price: 200, description:"", image:"https://picsum.photos/200/300"},
        {title: "Precio 4", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 5", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 6", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 7", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 8", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 9", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 10", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 11", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
        {title: "Precio 1", price: 200, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae.", image:"https://picsum.photos/200/300"},
    ];

    const addToCart = (cadena, numero)=>{
        console.log("funcion ejecutada", cadena, numero);
    }

//PRINCIPIO DRY: EVITAR DUPLICAR CODIGO

    return(
        <>
            <h1>Listado de productos</h1>
            {/* <CardProduct title={products[0].title} price={products[0].price} description={products[0].description} addToCart={addToCart} />
            <CardProduct title={products[1].title} price={products[1].price} description={products[1].description} addToCart={addToCart} />
            <CardProduct title={products[2].title} price={products[2].price} description={products[2].description} addToCart={addToCart} /> */}

            {/* <CardProduct {...products[0]} />
            <CardProduct {...products[1]} />
            <CardProduct {...products[2]} /> */}
            {/* [2,4,6,8]  = [1,2,3,4].map(elm=>elm*2) */}
            {
                products.map((product)=>(
                    // <CardProduct key={product.title}  {...product} />
                    <CardProduct key={product.title} title={product.title} price={product.price} description={product.description} addToCart={addToCart} />
                    // <CardProduct key={product.title} product={product}/>
                ))
            }
                {/* [
                    <CardProduct {...products[0]} />,
                    <CardProduct {...products[1]} />,
                    <CardProduct {...products[2]} />,
                ] */}
            {/* <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/> */}
        </>
    )
}