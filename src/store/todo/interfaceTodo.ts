
// export interface Store {
//   todos: {
//     id: string,
//     title: string,
//     todos: ITodo[]
//   }
// }

export interface Store {
  // todos: ITodo[],
  todos: any,
}

export interface todoListProps {
  // todos: ITodo[],
  todos: any,
  deleteTodo: Function,
  className: string,
  setTodoDragIdx: Function,
  TodoDragIdx: number,
  setIsDrag: Function,
  isDrag: Boolean,
}

export interface TodoDragAndDropProps {
  handleOpenEdit: Function,
  onDragOver: Function,
  onDropToggleIsDone: Function,
  onDropDelete: Function
}


const SET_TODOS = "SET_TODOS";
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
export type ActionTypes =
  // | { type: typeof SET_TODOS; payload: ITodo[] }
  | { type: typeof SET_TODOS; payload: any }
  | { type: typeof ADD_TODO; payload: any }
  // | { type: typeof ADD_TODO; payload: ITodo }
  | { type: typeof REMOVE_TODO; payload: string }
  | { type: typeof UPDATE_TODO; payload: any }
//   | { type: typeof TOGGLE_TODO; payload: number }
//   | { type: typeof SET_NEWTODO; payload: string };