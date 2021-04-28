import { SpaRounded } from '@material-ui/icons';
import React from 'react';
import {Link} from "react-router-dom"

export const Card = ({listOfTodos})=> {
    return(
        <>
            {listOfTodos.map(todo=>{
                return(
                    <span>{todo.content}</span>
                )
            })}
        </>
    )
}