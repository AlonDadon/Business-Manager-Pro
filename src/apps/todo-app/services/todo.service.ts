
import { localService } from '../../../service/storageService.js'
import { storageService } from '../../../service/async-Storage.service'
import { ITodo } from '../../../store/todo/interfaceTodo'
import { utilService } from '../../../service/util.service.js'
// import { httpService } from './http.service'
export const todoService = {
    getTodos,
    getTodoById,
    remove,
    save,
    // addReview,
    // getEmptyGame
}
async function getTodos(): Promise<any> {
    // async function getTodos(): Promise<ITodo[]> {
    let todos = await storageService.query('todo')
    if (!todos || !todos.length) {
        let todos = _createTodoList()
        localService.saveToStorage('todo', todos)
    }
    return todos
}
// async function getTodos(): Promise<ITodo[]> {
//     let todos = await storageService.query('todo')
//     // if (!todos || !todos.length) {
//     if (!todos) {
//         todos = _createTodos()
//         localService.saveToStorage('todo', todos)
//     }
//     return todos
// }
async function getTodoById(todoId: string): Promise<ITodo> {
    let todo = await storageService.get('todo', todoId)
    return todo
}
async function save(todo: ITodo): Promise<ITodo> {
    if (todo._id) {
        console.log('im IDDDDD:', todo._id);

        return storageService.put('todo', todo)
    } else {
        let newTodo = { ...todo }
        newTodo.isDone = false
        return storageService.post(`todo`, newTodo)
    }
}
async function remove(todoId: string) {
    console.log({ todoId });
    return await storageService.remove('todo', todoId)
}

// async function getTodos() {
//     let todos = await storageService.query('todo')
//     if(!todos || !todos.length){
//         todos = createTodos()
//         localService.saveToStorage('todo', todos)
//     }
// if (filterBy.sortBy === 'title') {
//     games.sort((game1, game2) => {
//         return game1.title.localeCompare(game2.title)
//     })
// return todos
// }


// if (filterBy.sortBy === 'title') {
//     games.sort((game1, game2) => {
//         return game1.title.localeCompare(game2.title)
//     })

function _createTodoList() {
    return {
        lists: {
            'list-1': {
                id: utilService.makeId(),
                title: 'To Do',
                todos: _createTodos()
            },
            // 'list-2': {
            //     id: utilService.makeId(),
            //     title: 'Doing',
            //     todos: _createTodos()
            // },
            // 'list-3': {
            //     id: utilService.makeId(),
            //     title: 'Later',
            //     todos: _createTodos()
            // },
        },
        listIds: ['list-1']

    }

}


function _createTodos() {
    return [
        {
            _id: utilService.makeId(),
            title: 'first todo',
            desc: 'first todo text text text',
            deadline: new Date(Date.now()),
            createAt: new Date(Date.now()),
            doneAt: new Date(Date.now()),
            importance: 2, // 1-3 style ramzor
            isDone: false,
            startTime: new Date(Date.now()),
            reminder: new Date(Date.now())
        },
        {
            _id: utilService.makeId(),
            title: 'first todo',
            desc: 'first todo text text text',
            deadline: new Date(Date.now()),
            createAt: new Date(Date.now()),
            doneAt: new Date(Date.now()),
            importance: 2, // 1-3 style ramzor
            isDone: false,
            startTime: new Date(Date.now()),
            reminder: new Date(Date.now())
        },
        {
            _id: utilService.makeId(),
            title: 'first todo',
            desc: 'first todo text text text',
            deadline: new Date(Date.now()),
            createAt: new Date(Date.now()),
            doneAt: new Date(Date.now()),
            importance: 2, // 1-3 style ramzor
            isDone: false,
            startTime: new Date(Date.now()),
            reminder: new Date(Date.now())
        },

    ]
}


// function getGames(filterBy = { txt: '', tag: 'all', sortBy: 'title' },) {
//     return httpService.get('game', filterBy)

// }
// function getEmptyGame(){
//     return {title:'', price:0}
// }
// function getById(gameId) {
//     return httpService.get(`game/${gameId}`, gameId)
    // if (filterBy.sortBy === 'title') {
    //     games.sort((game1, game2) => {
    //         return game1.title.localeCompare(game2.title)
    //     })
    // }
    // if (filterBy.sortBy === 'topReviews') {
    //     games.sort((game1, game2) => {
    //         return game2.rating - game1.rating
    //     })
    // }

    // if (filterBy.txt) {
    //     const txtRegex = new RegExp(filterBy.txt, 'i')
    //     games = games.filter(game => txtRegex.test(game.title) || txtRegex.test(game.description))
    // }
    // if (filterBy.tag !== 'all') {
    //     games = games.filter(game => {
    //         const tag = game.tags.findIndex(tag => tag === filterBy.tag)
    //         if (tag > -1) return game
    //     })
    // }
// }

// function remove(gameId) {
//     return httpService.delete(`game/${gameId}`)
// }
// 
// function addReview(review, gameId, byUser){
//     return httpService.put('game/review', {review, gameId, byUser})
// }
// localService.saveToStorage('game', games)

// async function getGames(filterBy = { txt: '', tag: 'all' ,sortBy:'title'},) {
//     let games = await storageService.query('game')
//     if (filterBy.sortBy === 'title') {
//         games.sort((game1, game2) => {
//             return game1.title.localeCompare(game2.title)
//         })
//     }
//     if(filterBy.sortBy==='topReviews'){
//         games.sort((game1, game2) => {
//             return game2.rating - game1.rating
//         })
//     }

//     if (filterBy.txt) {
//         const txtRegex = new RegExp(filterBy.txt, 'i')
//         games = games.filter(game => txtRegex.test(game.title) || txtRegex.test(game.description))
//     }
//     if (filterBy.tag !== 'all') {
//         games = games.filter(game => {
//             const tag = game.tags.findIndex(tag => tag === filterBy.tag)
//             if (tag > -1) return game
//         })
//     }
//     return games
// }
// function getById(gameId) {
//     return storageService.get('game', gameId)
// }
// function remove(gameId) {
//     return storageService.remove('game', gameId)
// }
// localService.saveToStorage('game', games)

// async function save(todo):Promise<ITodo[]> {
//     if (todo._id) {
//         return httpService.put(`game/${game._id}`, game)
//     } else {
//         var newGame = createGame(game)
//         return httpService.post(`game`, newGame)
//     }
// }

//ajax call for api:
// const sendGetRequest = async () => {
//     try {
//         const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };

// sendGetRequest();