import { useState } from "react"

// const App = ()=>{
    // const getList = ()=>{
    //     return [1,2,3,4];
    // }
//     return(
//         <Button text="enviar" handleClick={()=>console.log("se hizo click")}/>
//     )
// }

export const Button = ({text, handleClick})=>{
    const [value, setValue]= useState('');

    const handleFetch = ()=>{
        setValue('valor actualizado');
        // const response = await fetch('url');
        // console.log(response);
    }

    return(
        <>
            <button onClick={handleClick} data-testid="boton-enviar">{text}</button>
            <p>{text}</p>
            <p data-testid="valor-meli">{value}</p>
            <button  data-testid="boton-datos" onClick={handleFetch} >Obtener datos</button>
        </>
    )
}