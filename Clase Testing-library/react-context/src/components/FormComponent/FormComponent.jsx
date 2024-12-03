import { useState, useContext } from "react"
import { UserContext } from "../../context/UserContext";
import { Section } from "./Section/Section";

const userInitialValues = {
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    address:''
}

export const FormComponent = ()=>{
    const [user, setUser] = useState(userInitialValues);
    const [count, setCount]=useState(0);
    //llamado del contexto
    const { roles, addCart, products, category, setCategory } = useContext(UserContext);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUser(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
        // user.name = value;//PROHIBIDO
    };

    const increment = ()=>{
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
    }

    return(
        <div style={{border:'1px solid red'}}>
            <form>
                <input name="firstname" value={user.name} onChange={handleChange}/>
                <input name="lastname" value={user.lastname} onChange={handleChange}/>
                <input name="email" value={user.email} onChange={handleChange}/>
                <input name="phone" value={user.phone} onChange={handleChange}/>
                <input name="address" value={user.address} onChange={handleChange}/>
            </form>
            <ul>
                {roles.map(rol=>(
                    <p key={rol.id}>{rol.role}</p>
                ))}
            </ul>
            <p>Categoria: {category}</p>
            <button onClick={()=>setCategory('Tecnología')}>Cambie categoria</button>
            <p>{count}</p>
            <button onClick={increment}>Incrementar</button>
            <Section/>
        </div>
    )
}