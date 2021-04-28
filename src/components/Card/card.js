import React from 'react';

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