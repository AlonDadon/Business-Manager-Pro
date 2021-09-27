import { Card, CardContent, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
}));

export const TodoStats = () => {
    return (
        <section>
            <Grid container spacing={1} rowSpacing={1}  columns={{ xs: 8, md: 16 }} direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 2 ,mt:2}}>
                <Grid item xs={4} sm={2} md={4} >
                    <Item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Task count
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={4} sm={2} md={4} >
                    <Item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Task count
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>

                <Grid item xs={4} sm={2} md={4} >
                    <Item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Task count
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={4} sm={2} md={4} >
                    <Item>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Task count
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
            </Grid>

        </section>
    )
}
