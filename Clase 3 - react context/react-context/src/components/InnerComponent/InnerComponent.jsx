import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const InnerComponent = ()=>{
    const {setCategory} = useContext(UserContext);

    return(
        <div style={{border:'1px solid green', margin:'20px'}}>
            <h2>Componente interno</h2>
            <button onClick={()=>setCategory('Muebles')}>Cambiar categoria</button>
        </div>
    )
}