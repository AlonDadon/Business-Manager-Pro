import React, { FC } from 'react'
import {ITodo} from '../../../store/todo/types'
import { TodoPreview } from './TodoPreview';

export const TodoList:FC<{todos:ITodo[], deleteTodo:Function}> = ({todos, deleteTodo}):JSX.Element => {
    console.log('im Listtttttttt',todos);
    
    return (
        <div>
            {todos.map((todo:ITodo) => <TodoPreview key={todo._id} todo={todo} deleteTodo={deleteTodo}/>)}
        </div>
    )
}
