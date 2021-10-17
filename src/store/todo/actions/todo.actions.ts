import { todoService } from '../../../apps/todo-app/services/todo.service'
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { ITodo, Store, ActionTypes, } from "../interfaceTodo";

// export function loadTodos() {
//     return async dispatch => {
//         try {
//             const todos = await todoService.getTodos()
//             dispatch({ type: 'SET_TODOS', todos })
//         } catch (err) {
//             console.log('TodoActions: err in loadTodos', err)
//         }
//     }
// }
const setTodos = (todos: ITodo[]): ActionTypes => ({
  type: 'SET_TODOS',
  payload: todos,
});

const addTodo = (todo: ITodo): ActionTypes => ({
  type: 'ADD_TODO',
  payload: todo
})

const updateTodo = (todo: ITodo): ActionTypes => ({
  type: 'UPDATE_TODO',
  payload: todo
})

const deleteTodo = (todoId: string): ActionTypes => ({
  type: 'REMOVE_TODO',
  payload: todoId
})

export const loadTodos =
  (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
    // const resp = await fetch(url);
    try {
      const todos: ITodo[] = await todoService.getTodos();
      dispatch(setTodos(todos));
    } catch (err) {
      console.log('GamesActions: err in saveGame', err)
    }
  };

export const saveTodo = (todo: ITodo): ThunkAction<void, Store, ITodo, Action<string>> => async (dispatch) => {
  {
    try {
      // const toyToSave = (!toy._id) ? await toyService.add(toy) : await toyService.update(toy)
      const todoToSave: ITodo = await todoService.save(todo)
      console.log('actions-save', todoToSave);

      //after back is runing change to add
      const action = (!todo._id) ? addTodo : updateTodo
      console.log('action from action is it still update????', action);
      dispatch(action(todoToSave))
    } catch (err) {
      console.log('GamesActions: err in saveGame', err)
    }
  }
}
export const removeTodo = (todoId: string): ThunkAction<void, Store, ITodo, Action<string>> => async (dispatch) => {
  try {
    await todoService.remove(todoId)
    dispatch(deleteTodo(todoId))
  } catch (err) {
    console.log('GameActions: err in removeGame', err)
  }
}

// export function addReview(review, gameId, loggedInUser) {
//     return async dispatch => {
//         try {
//             const game = await gameService.addReview(review, gameId, loggedInUser)
//             dispatch({ type: 'UPDATE_GAME', game })
//         } catch (err) {
//             console.log('GamesActions: err in addReview', err)
//         }
//     }
// }
// export function removeGame(gameId) {
//     return async dispatch => {
//         try {
//             await gameService.remove(gameId)
//             dispatch({ type: 'REMOVE_GAME', gameId })
//         } catch (err) {
//             console.log('GameActions: err in removeGame', err)
//         }
//     }
// }