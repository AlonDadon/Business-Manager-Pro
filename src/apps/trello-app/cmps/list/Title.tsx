import { Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react'


const useStyles = makeStyles((theme: any) => ({
    input: {
        fontSize: '1.2rem',
        fontWeight: 600,
        margin: theme.spacing(1),
        height: '28px',
        padding: theme.spacing(0.5, 1),
        borderRadius: '5px',
        transition: '0.5s',
        '&:focus': {
            backgroundColor: '#fff',
            boxShadow: 'inset 0 0 0 2px #0079bf',
        }
    }
}))


export const Title = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(true)
    const toggleIsOpen = () => setIsOpen(true)
    // const toggleIsOpen = () => setIsOpen(!isOpen)
    const classes = useStyles()
    return (
        <>
            <InputBase
                value={'Todo'}
                inputProps={{ className: classes.input }}
                fullWidth
                // autoFocus={true}
                onBlur={() => toggleIsOpen()}
            />
        </>
    )

}
