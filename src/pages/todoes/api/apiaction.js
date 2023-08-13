const getTodoAction = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json();
    return data
}
export default getTodoAction ;