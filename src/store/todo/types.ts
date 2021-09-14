export interface ITodo {
  _id?: string,
  txt: string,
  done: boolean,
  deadline: Date,
  importance: Number
}

export interface Store {
  todos: ITodo[],
}

const SET_TODOS = "SET_TODOS";
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
export type ActionTypes =
  | { type: typeof SET_TODOS; payload: ITodo[] }
  | { type: typeof ADD_TODO; payload: ITodo }
  | { type: typeof REMOVE_TODO; payload: string }
  | { type: typeof UPDATE_TODO; payload: ITodo; }
//   | { type: typeof TOGGLE_TODO; payload: number }
//   | { type: typeof SET_NEWTODO; payload: string };