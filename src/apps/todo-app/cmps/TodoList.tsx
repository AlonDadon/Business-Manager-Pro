import React, { FC } from 'react'
import { ITodo } from '../../../store/todo/types'
import { TodoPreview } from './TodoPreview';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
}));

export const TodoList: FC<{ todos: ITodo[], deleteTodo: Function, className: string }> = ({ todos, deleteTodo, className }): JSX.Element => {
    console.log('im Listtttttttt', todos);

    return (
        <div>
            {/* columnSpacing={{ xs: 1, sm: 2, md: 3 }} */}
            {/* <div className={`todo-list ${className}`}>
                {todos.map((todo: ITodo) => <TodoPreview key={todo._id} todo={todo} deleteTodo={deleteTodo} />)}
            </div> */}
            {/* <Container maxWidth="md"> */}

            <Grid container spacing={1} rowSpacing={4} columns={{ xs: 4, md: 12 }} direction="row"
                justifyContent="center"
                alignItems="center">
                {todos.map((todo: ITodo) =>
                    <Grid key={todo.txt} item xs={12} sm={6} md={4} >
                        <Item>
                            {/* <div className={`todo-list ${className}`}> */}
                            <TodoPreview key={todo._id} todo={todo} deleteTodo={deleteTodo} />
                            {/* </div> */}
                        </Item>
                    </Grid>
                )}
            </Grid>
            {/* </Container> */}
        </div>
    )
}
