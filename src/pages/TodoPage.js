import React,{useState, useEffect} from 'react';
import { Card } from '../components/Card/card';
import { Form } from '../components/Form/form';

const TodoPage = ()=> {

    const [todo, setTodo] = useState([])
    const [addTodo,setAddTodo] = useState('')
    useEffect(()=>{
        fetch('/api').then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(data=>setTodo(data))
    },[])
    
    const handleFormChange = (inputvalue) =>{
        setAddTodo(inputvalue)
    }

    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content:addTodo
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response=>response.json())
          .then(message=> {
            console.log(message)
            setAddTodo('')
            getLatestTodos()
          })
    }

    const getLatestTodos = () =>{
        fetch ('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data=>setTodo(data))
    }

    return (
        <>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
            <Card listOfTodos={todo}/>
        </>
    )
}
export default TodoPage;