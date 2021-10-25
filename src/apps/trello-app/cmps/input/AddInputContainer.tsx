import { Collapse, Paper, Typography } from '@mui/material'
import { alpha } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { AddInputCard } from './AddInputCard';

const useStyles = makeStyles((theme: any) => ({
    addTodoContainer: { marginTop: theme.spacing(2) },
    addTodoCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        backgroundColor: '#EBECF0',
        '&:hover': {
            backgroundColor: '#091e4214',
            color: '#172b4d',
        }
    }
}))

export const AddInputContainer = () => {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)
    return (
        <div className={classes.addTodoContainer}>
            <Collapse in={isOpen}>
                <AddInputCard toggleIsOpen={toggleIsOpen} />
            </Collapse>

            <Collapse in={!isOpen} >
                <Paper
                    elevation={0}
                    className={classes.addTodoCard}
                    onClick={() => toggleIsOpen()}
                >
                    <Typography>+ Add a task</Typography>
                </Paper>
            </Collapse>

        </div>
    )
}
