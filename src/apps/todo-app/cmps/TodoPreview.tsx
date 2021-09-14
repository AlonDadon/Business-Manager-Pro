import React, { FC } from 'react'
import { ITodo } from '../../../store/todo/types'

export const TodoPreview:FC<{todo: ITodo, deleteTodo:Function}> = ({todo, deleteTodo}):JSX.Element => {
    return (
        <div>
            <h3>{todo.txt}<span>{todo.deadline}</span><span>{todo.importance}</span></h3>
            <button className="btn" onClick={() =>deleteTodo(todo._id)}>DELETE</button>
        </div>
    )
}
