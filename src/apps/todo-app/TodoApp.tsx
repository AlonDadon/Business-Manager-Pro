import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodos } from '../../store/todo/actions/todo.actions'
import { Store } from '../../store/todo/interfaceTodo'
import { List } from './cmps/list/List'
import _ from 'lodash';

export const TodoApp = () => {
    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTodos())

    }, [])
    // useEffect(() => {

    // }, [todos])

    if (_.isEmpty(todos)) return <div>Loading...</div>
    return (
        <div>
            {todos.todoListIds.map((todoListId: string) => {
                const list = todos.todoList[todoListId]
                return (
                    <List list={list} key={todoListId} />
                )
            })}
        </div>
    )
}
