import PropTypes from "prop-types";

const cardStyles = {
    color: "black",
    background: "#e7e7e7",
    border: "1px solid black",
    borderRadius: "4px",
    padding: "5px",
    margin: "4px"
}

export const CardProduct = ({title, price, description, discount, addToCart})=>{
    // console.log(props);
    // const {title, price, description, discount, addToCart} = props.product;
    const numeroComponenteHijo = 100;
    return(
        <div style={cardStyles}>
            <h4> {title} </h4>
            <p>Precio: {price} </p>
            { (description !== "") && (<p>Description: {description}</p>)}
            <p>{discount}</p>
            <button onClick={()=>addToCart("valor", numeroComponenteHijo)}>Agregar al carrito</button>
        </div>
    )
}

CardProduct.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
}

CardProduct.defaultProps = {
    discount:"Este producto tiene un descuento del 10%"
}

// const User = (name="nombre pro defecto")=>{
//     console.log("///")
// }

// <User />
// <User name="Pepito"/>