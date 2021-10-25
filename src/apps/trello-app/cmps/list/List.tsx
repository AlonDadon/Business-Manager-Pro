import { CssBaseline, Paper, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Title } from './Title'
import { Card } from './Card'
import { AddInputContainer } from '../input/AddInputContainer';

const useStyles = makeStyles((theme: any) => ({
    root: {
        width: '300px',
        backgroundColor: '#ebecf0',
        marginLeft:theme.spacing(1),
        textAlign: 'start'
    }
}))

export const List = () => {
    const classes = useStyles()
    
    return (
        <div>
            <Paper className={classes.root} >
                {/* <Paper  > */}
                <CssBaseline />
                <Title />
                <Card />
                <Card />
                <Card />
                <Card />
                <AddInputContainer />
            </Paper>
        </div>
    )
}
