import { Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { ChangeEventHandler, FC } from 'react'

export const DateTimeInput: FC<{ title: String, handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> }>
    = ({ title, handleChange }) => {
        return (
            <Box>
                <h1>{title}</h1>
                <Stack component="form" noValidate spacing={3}>
                    <TextField
                        // id="datetime-local"
                        label="Remind me in:"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: 250 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    {/* <TextField
                    id="datetime-local"
                    label="Deadline"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    sx={{ width: '250px' }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /> */}
                </Stack>
            </Box>
        )
    }
