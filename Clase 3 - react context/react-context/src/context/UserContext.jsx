import { createContext, useState } from "react";

//crear el contexto
export const UserContext = createContext();

//Crear el provedor / envuelve los componentes que usaran el contexto
export const UserProvider = ({children})=>{
    //datos, variables, variables de estado, funciones, funciones que modifiquen el estado
    const roles = [
        {id:1, role:"Admin"},
        {id:2, role:"Cliente"},
        {id:3, role:"Vendedor"},
    ];
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Todas');

    const addCart = ()=>{};

    return(
        <UserContext.Provider value={{roles,products,setProducts,addCart, category, setCategory}}>
            {children}
        </UserContext.Provider>
    )
}