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
import { todoService } from "./services/todo.service";
import { TodoListDnd } from "./cmps/TodoListDnd";

export const TodoApp: FC = () => {
    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    const [isOpenEditModal, setIsOpenEditModal] = useState<Boolean>(false)
    const [isDrag, setIsDrag] = useState(false)
    const [TodoDragIdx, setTodoDragIdx] = useState(0)

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    // useEffect(() => {
    //     console.log('todo app todos', todos);
    // }, [todos])

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
    const onDragOver = (ev: any) => {
        ev.preventDefault();
    }

    const onDropDelete = (ev: any) => {
        const todoId = ev.dataTransfer.getData('id')
        // todoService.remove(todoId)
        deleteTodo(todoId)
    }

    const onDropToggleIsDone = async (ev: any) => {
        const todoId = ev.dataTransfer.getData('id')
        const todo = await todoService.getTodoById(todoId)
        todo.isDone = !todo.isDone
        todoService.save(todo)
    }

    if (!todos) return <div>Loading....</div>
    return (
        <section className="todo-app ">
            <Container maxWidth="md">
                <TodoStats />
                <TodoDragAndDropActions
                    handleOpenEdit={toggleIsOpenEditModal}
                    onDropToggleIsDone={onDropToggleIsDone}
                    onDropDelete={onDropDelete}
                    onDragOver={onDragOver}
                />
                <TodoList className="dodo"
                    todos={todos} deleteTodo={deleteTodo}
                    setTodoDragIdx={setTodoDragIdx}
                    TodoDragIdx={TodoDragIdx}
                    setIsDrag={setIsDrag}
                    isDrag={isDrag}
                />

                <TodoEdit isOpenEditModal={isOpenEditModal}
                    toggleIsOpenEditModal={toggleIsOpenEditModal}
                    addTodo={addTodo}
                />
            </Container >
        </section>
    )
}