import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../service/customHooks";
import { loadTodos, removeTodo, saveTodo } from "../../store/todo/actions/todo.actions";
import { TodoList } from "./cmps/TodoList";
import { ITodo, Store } from "../../store/todo/types"

import { Container } from '@mui/material';
import { TodoStats } from "./cmps/TodoStats";
import { TodoDragAndDropActions } from "./cmps/TodoDragAndDropActions";
import { TodoEdit } from "./cmps/TodoEdit";

export const TodoApp: FC = () => {
    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    const [isOpenEditModal, setIsOpenEditModal] = useState<Boolean>(false)


    useEffect(() => {
        dispatch(loadTodos());
    }, [])

    useEffect(() => {
        console.log('todo app todos', todos);
    }, [todos])

    const addTodo = (todo: ITodo) => {
        dispatch(saveTodo(todo))
    }
    const deleteTodo = (todoId: string) => {
        dispatch(removeTodo(todoId))
    }

    const toggleIsOpenEditModal = (isOpenEditModal: boolean): void => {
        console.log(isOpenEditModal);
        setIsOpenEditModal(isOpenEditModal)
    }

    return (
        <section className="todo-app ">
            <Container maxWidth="md">
                <TodoStats />
                <TodoDragAndDropActions handleOpenEdit={toggleIsOpenEditModal} />
                <TodoList className="dodo" todos={todos} deleteTodo={deleteTodo} />
                <TodoEdit isOpenEditModal={isOpenEditModal}
                    toggleIsOpenEditModal={toggleIsOpenEditModal}
                    addTodo={addTodo}
                />
            </Container >
        </section>
    )
}