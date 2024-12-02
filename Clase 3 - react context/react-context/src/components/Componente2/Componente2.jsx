import { InnerComponent } from "../InnerComponent/InnerComponent"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export const Componente2 = ()=>{
    const {products} = useContext(UserContext);

    return(
        <div style={{border:'1px solid blue', margin:'10px'}}>
            <h2>Componente 2</h2>
            <InnerComponent/>
            {products.map(product=>(<p key={product.id}>{product.title}</p>))}
        </div>
    )
}