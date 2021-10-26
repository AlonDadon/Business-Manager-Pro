import { Paper } from '@mui/material'
import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core';
import { ITodo, ITodoCardProps } from '../../interfaces';
const useStyles = makeStyles((theme: any) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    }
}))

export const Card: FC<ITodoCardProps>= ({todo}) => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.card}>
               {todo.title}
            </Paper>
        </div>
    )
}
