import { Button, ButtonGroup, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { ChangeEventHandler, FC } from 'react'

export const TxtInput: FC<{
    desc: String, handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    title: String
}> = ({ handleChange, desc, title }) => {
    return (
        <div>
            
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    // id="todo-title"
                    label="Title"
                    name="title"
                    onChange={handleChange}
                    value={title}
                    autoFocus={true}
                />
                <TextField
                    // id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    id="todo-title"
                    label="Description"
                    name="desc"
                    onChange={handleChange}
                    value={desc}
                />
            </Box>
        

        </div>
    )
}
