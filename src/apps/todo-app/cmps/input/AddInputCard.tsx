import { Button, IconButton, InputBase, Paper } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import { alpha, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { IAddInputCardProps } from '../../interfaces';


const useStyles = makeStyles((theme: any) => ({
    card: {
        paddingBottom: theme.spacing(4),
        margin: theme.spacing(0, 1, 1, 1),
        padding: theme.spacing(1, 1, 1, 0),
    }, input: {
        margin: theme.spacing(1)
    }, confirm: {
        margin: theme.spacing(0, 1, 1, 1)
    },
    btnConfirm: {
        backgroundColor: '#0079bf',
        color: '#fff',
        '&:hover': {
            backgroundColor: alpha('#0079bf', 0.75)
        }
    }
}))



export const AddInputCard: FC<IAddInputCardProps> = ({ toggleIsOpen }) => {
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.card}>
                <InputBase
                    fullWidth
                    multiline
                    onBlur={() => toggleIsOpen()}
                    inputProps={{ className: classes.input }}
                    placeholder="Enter a title of this task"
                />
            </Paper>

            <div className={classes.confirm} >
                <Button
                    className={classes.btnConfirm}
                    onClick={() => toggleIsOpen()}
                >Add a task</Button>
                <IconButton onClick={() => toggleIsOpen()}>
                    <ClearIcon />
                </IconButton>
            </div>

        </div>
    )
}
