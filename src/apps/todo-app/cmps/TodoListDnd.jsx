import React, { FC, useState } from 'react'
import { todoListProps } from '../../../store/todo/interfaceTodo'
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
import { Dehaze } from "@mui/icons-material";

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// npm i --save-dev @types/react-beautiful-dnd

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
}));



export const TodoListDnd = ({ todos }) => {

    //   if(todos)return <div>loading...</div>
    return (
        <>
            <DragDropContext>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                            {todos.map((todo, todoIdx) => {
                       
                                return (
                                    <Draggable key={todo._id} draggableId={todo._id} index={todoIdx}>
                                        {(provided) => (
                                            <li key={todo._id} ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >{todo.title}</li>
                                        )}
                                    </Draggable>
                                )

                            })}


                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>

        </>
    )
}

