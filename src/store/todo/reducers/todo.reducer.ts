import { ActionTypes, ITodo, Store } from "../types"

//can be changed to whatever name.

const initialState = {
    todos: [],
}

export function todoReducer(state:Store = initialState , action:ActionTypes) {
    console.log(action,state);
    
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload }
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] }
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter((todo:ITodo) => todo._id !== action.payload) }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo:ITodo) =>
                    todo._id === action.payload._id ? action.payload : todo
                )
            }
        default:
            return state
    }
}