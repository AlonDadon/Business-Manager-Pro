import { CssBaseline, Paper, Typography } from '@mui/material'
import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core';
import { Title } from './Title'
import { Card } from './Card'
import { AddInputContainer } from '../input/AddInputContainer';
import { IListProps, ITodo } from '../../interfaces';

const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '300px',
        backgroundColor: '#ebecf0',
        marginLeft: theme.spacing(1),
        textAlign: 'start'
    }
}))

export const List: FC<IListProps> = ({ list }) => {
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.root} >
                {/* <Paper  > */}
                <CssBaseline />
                <Title title={list.title} />
                {list.todos.map((todo: ITodo) =>
                    <Card key={todo._id} todo={todo} />

                )}
                <AddInputContainer />
            </Paper>
        </div>
    )
}
