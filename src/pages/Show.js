import React, { useEffect, useState } from 'react';
import {Delete} from '../components/Delete/delete'
import{
    useParams,
    Link
} from "react-router-dom";

const Show = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => setTodo(data))
    }, [id])

    return(
        <div>
            {todo.map(data => <div>{data.content}</div>)}
            <Delete id={id}/>
            <hr></hr>
            <Link to='/tracker'>Back to todos</Link>
        </div>
    )

}
export default Show;
