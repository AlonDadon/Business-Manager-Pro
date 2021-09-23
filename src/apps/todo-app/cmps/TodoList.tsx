import React, { FC } from 'react'
import {ITodo} from '../../../store/todo/types'
import { TodoPreview } from './TodoPreview';

export const TodoList:FC<{todos:ITodo[], deleteTodo:Function, className:string}> = ({todos, deleteTodo,className}):JSX.Element => {
    console.log('im Listtttttttt',todos);
    
    return (
        <div className={`todo-list ${className}`}>
            {todos.map((todo:ITodo) => <TodoPreview key={todo._id} todo={todo} deleteTodo={deleteTodo}/>)}
        </div>
    )
}
