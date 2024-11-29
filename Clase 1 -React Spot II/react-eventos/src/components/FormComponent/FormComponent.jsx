import { useState } from "react"

const userInitialValues = {
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    address:''
}

export const FormComponent = ()=>{
    // const [name, setName] = useState('')
    // const [lastname, setLastname] = useState('')
    // const [email, setEmail] = useState('');
    const [user, setUser] = useState(userInitialValues);
    const [count, setCount]=useState(0);

    const handleChange = (e)=>{
        // console.log(e.target.name)
        // console.log(e.target.value)
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
        <>
            <form>
                <input name="firstname" value={user.name} onChange={handleChange}/>
                <input name="lastname" value={user.lastname} onChange={handleChange}/>
                <input name="email" value={user.email} onChange={handleChange}/>
                <input name="phone" value={user.phone} onChange={handleChange}/>
                <input name="address" value={user.address} onChange={handleChange}/>
            </form>
            <p>{count}</p>
            <button onClick={increment}>Incrementar</button>
        </>
    )
}