import { FC } from 'react'
import { ITodo } from '../../../store/todo/types'
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// export const TodoPreview: FC<{ todo: ITodo, deleteTodo: Function }> = ({ todo, deleteTodo }): JSX.Element => {
//     return (
//         <div>
//             <h3>{todo.txt}<span>{todo.deadline}</span><span>{todo.importance}</span></h3>
//             <DeleteIcon onClick={() => deleteTodo(todo._id)} className="bb" color="secondary" />
//         </div>
//     )
// }



// export default function MediaCard() {
export const TodoPreview: FC<{ todo: ITodo, deleteTodo: Function }> = ({ todo, deleteTodo }): JSX.Element => {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {todo.txt}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );
}