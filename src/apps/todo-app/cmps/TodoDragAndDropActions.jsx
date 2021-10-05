import { Card, CardContent, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    paddingTop: 5,
    background: 'none',
    'box-shadow': 'none'
}));

export const TodoDragAndDropActions = ({ handleOpenEdit }) => {
    // width: 35px;
    
    // height: 35px;
    const styleIcon = { width: { xs: 30, sm: 50 }, height: { xs: 30, sm: 50 } }
    return (
        <section>
            <Grid container spacing={1} rowSpacing={1} columns={{ xs: 4 }} direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 2, mt: 2 }}>
                <Grid item xs={1}>
                    <Item>
                        <Card onClick={() => handleOpenEdit(true)}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    <NoteAddOutlinedIcon sx={styleIcon} />
                                </Typography>
                                <Typography sx={{ fontSize: { xs: 14, sm: 14 } }} color="text.secondary" gutterBottom>
                                    Add Note
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={1} >
                    <Item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    <DoneOutlineIcon sx={styleIcon} />

                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Task Done!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>

                <Grid item xs={1} >
                    <Item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    <DeleteOutlinedIcon sx={styleIcon} />

                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Delete Task
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={1} >
                    <Item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    <EventOutlinedIcon sx={styleIcon} />
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Delay Task
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
            <hr />
        </section >
    )
}
