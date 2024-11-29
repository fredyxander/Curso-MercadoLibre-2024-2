export const getData = async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        return data;
    } catch (error) {
        return "Hubo un error en la api"
    }
}