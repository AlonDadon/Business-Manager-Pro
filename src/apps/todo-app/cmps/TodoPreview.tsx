import React, { FC } from 'react'
import { ITodo } from '../../../store/todo/types'
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoPreview:FC<{todo: ITodo, deleteTodo:Function}> = ({todo, deleteTodo}):JSX.Element => {
    return (
        <div>
            <h3>{todo.txt}<span>{todo.deadline}</span><span>{todo.importance}</span></h3>
           <DeleteIcon onClick={() =>deleteTodo(todo._id)} className="bb" color="secondary"/>
        </div>
    )
}