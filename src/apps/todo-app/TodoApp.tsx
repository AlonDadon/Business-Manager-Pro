import { FC, useEffect } from "react";
import { useForm } from "../../service/customHooks";

import { ITodo } from "./todoInterface"

export const TodoApp: FC = () => {
    const [todo, handleChange] = useForm({
        task: '',
        deadline: '',
        importance: 0
    }, () => console.log('cb'))

    const addTodo = (todo: ITodo) => {
        todo._id = 't' + Date.now() % 1000
    }
    useEffect(() => {
        console.log(todo);
    }, [todo])

    const { task, deadline, importance } = todo
    return (
        <section className="todo-app ">
            <div className="flex column justify-center align-center">
                <h1>todo app</h1>
                <form className="input-container ">
                    <input type="text"
                        placeholder="task" name="task"
                        onChange={handleChange} value={task} />
                    <input type="number" placeholder="importance"
                        name="importance" onChange={handleChange}
                        value={importance} />
                    <input type="date" placeholder="Deadline(in days)..."
                        name="deadline" onChange={handleChange}
                        value={deadline} />

                </form>
                <button className="btn">Add Task</button>
            </div>
            <div className="todo-list"></div>
        </section>
    )
}