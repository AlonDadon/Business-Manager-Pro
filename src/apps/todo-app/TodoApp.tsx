import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../service/customHooks";
import { loadTodos, removeTodo, saveTodo } from "../../store/todo/actions/todo.actions";
import { TodoList } from "./cmps/TodoList";
import { ITodo, Store } from "../../store/todo/interfaceTodo"

import { Container } from '@mui/material';
import { TodoStats } from "./cmps/TodoStats";
import { TodoDragAndDropActions } from "./cmps/TodoDragAndDropActions";
import { TodoEdit } from "./cmps/TodoEdit";

export const TodoApp: FC = () => {
    const [todo, handleChange] = useForm({
        txt: '',
        deadline: '',
        importance: 0
    }, () => console.log('cb'))
    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    const [openEditModal, setOpenEditModal] = useState<Boolean>(false)


    useEffect(() => {
        dispatch(loadTodos());
    }, [])

    useEffect(() => {
        console.log('todos has ben changeddddddddd', todos);
    }, [todos])

    const addTodo = () => {
        dispatch(saveTodo(todo))
    }
    const deleteTodo = (todoId: string) => {
        dispatch(removeTodo(todoId))
    }

    const handleOpenEdit = () => {

    }
    const { txt, deadline, importance } = todo
    return (
        <section className="todo-app ">
            <Container maxWidth="md">
                <div className="main-todo flex column justify-center align-center">
                    {/* <h1>todo app</h1> */}
                    {/* <form className="form-todo input-container " >
                        <input type="text"
                            placeholder="txt" name="txt"
                            onChange={handleChange} value={txt} />
                        <input type="number" placeholder="importance"
                            name="importance" onChange={handleChange}
                            value={importance} />
                        <input type="date" placeholder="Deadline(in days)..."
                            name="deadline" onChange={handleChange}
                            value={deadline} />

                    </form> */}
                    {/* <button className="btn" onClick={() => addTodo()}>Add</button> */}
                </div>
                <TodoStats />
                <TodoDragAndDropActions handleOpenEdit={handleOpenEdit} />
                <TodoList className="dodo" todos={todos} deleteTodo={deleteTodo} />
                <TodoEdit/>
            </Container >
        </section>
    )
}