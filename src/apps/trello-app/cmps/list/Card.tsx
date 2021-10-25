import { Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme: any) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
    }
}))

export const Card = () => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.card}>
                Build BS app
            </Paper>
        </div>
    )
}
