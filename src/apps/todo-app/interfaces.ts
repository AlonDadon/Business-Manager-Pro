export interface ITodo {
    _id?: string,
    title: string,
    txt: string,
    isDone: boolean,
    desc: string,
    startTime: Date,
    deadline: Date,
    reminder: Date,
    importance: Number
}
export interface ITitleProps {
    title: string
}
export interface ITodoCardProps {
    todo: ITodo
}
export interface IAddInputCardProps {
    toggleIsOpen: Function
}



export interface IListProps {
    list: {
        _id: string,
        title: string,
        todos: []
    }
}

