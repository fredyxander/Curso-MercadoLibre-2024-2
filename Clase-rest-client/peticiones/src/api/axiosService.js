import axios from "axios";

const axiosFetch = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        'Authorization':'Bearer token',
        'Content-Type':'application/json'
    }
})

export default axiosFetch;