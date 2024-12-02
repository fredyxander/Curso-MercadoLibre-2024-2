import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/UserContext"

export const Section = ()=>{
    const {category, setProducts} = useContext(UserContext);

    useEffect(()=>{
        const getData = async()=>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await response.json();
                console.log("data", data);
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    },[])

    return(
        <div style={{border:'1px solid black', margin:'10px'}}>
            <h2>Section</h2>
            <p>{category}</p>
        </div>
    )
}