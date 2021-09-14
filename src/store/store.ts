import { createStore, applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { todoReducer } from './todo/reducers/todo.reducer'

// const composeEnhancers = {window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose}

const store = createStore(
  todoReducer,
applyMiddleware(thunk)
)
export default store















