import React, { FC } from 'react'
import { ITodo } from '../../../store/todo/types'
import { TodoPreview } from './TodoPreview';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteIcon from '@mui/icons-material/Delete';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
}));
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
]

export const TodoList: FC<{ todos: ITodo[], deleteTodo: Function, className: string }> = ({ todos, deleteTodo, className }): JSX.Element => {
    console.log('im Listtttttttt', todos);

    return (
        <Grid container spacing={1} rowSpacing={4} columns={{ xs: 1, md: 2 }} direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={1} sm={2} md={2} >
                <Item>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tasks for today</TableCell>
                                    <TableCell align="center" sx={{}}>Deadline</TableCell>
                                    <TableCell align="center" >Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.calories}</TableCell>
                                        <TableCell align="center">
                                            <Button><DeleteIcon /></Button>
                                            <Button><DoneOutlineIcon /></Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Item>
            </Grid>
            <Grid item xs={1} sm={2} md={2} >
                <Item>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tasks for today</TableCell>
                                    <TableCell align="center" sx={{}}>Deadline</TableCell>
                                    <TableCell align="center" >Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">{row.calories}</TableCell>
                                        <TableCell align="center">
                                            <Button><DeleteIcon /></Button>
                                            <Button><DoneOutlineIcon /></Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Item>
            </Grid>
        </Grid>
    );
}


// <div>
{/* columnSpacing={{ xs: 1, sm: 2, md: 3 }} */ }
{/* <div className={`todo-list ${className}`}>
                {todos.map((todo: ITodo) => <TodoPreview key={todo._id} todo={todo} deleteTodo={deleteTodo} />)}
            </div> */}
{/* <Container maxWidth="md"> */ }

{/* <Grid container spacing={1} rowSpacing={4} columns={{ xs: 4, md: 12 }} direction="row"
                justifyContent="center"
                alignItems="center">
                {todos.map((todo: ITodo) =>
                    <Grid key={todo.txt} item xs={12} sm={6} md={4} >
                        <Item> */}
{/* <div className={`todo-list ${className}`}> */ }
{/* <TodoPreview key={todo._id} todo={todo} deleteTodo={deleteTodo} /> */ }
{/* </div> */ }
// </Item>
// </Grid>
// )}
// </Grid>
{/* </Container> */ }
        // </div>