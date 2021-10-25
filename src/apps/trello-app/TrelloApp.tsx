import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodos } from '../../store/todo/actions/todo.actions'
import { Store } from '../../store/todo/interfaceTodo'
import { List } from './cmps/list/List'


export const TrelloApp = () => {
    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTodos())

    }, [])
    useEffect(() => {
        if(todos){

            console.log({ todos });
        }
    }, [todos])
    return (
        <div>
            <List />
        </div>
    )
}
