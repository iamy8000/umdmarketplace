import { useState, useEffect } from "react"
import _ from "lodash"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
// components
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// constants
import { SellingItems } from "constants/general"


function Home() {
    const theme = useTheme();

    const lgDownBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));
    const mdDownBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={3}
                    container
                    rowSpacing={2}
                    columnSpacing={2}
                    alignItems="start"
                    direction={mdDownBreakpoint ? "row" : "column"}
                >
                    <Grid item xs={mdDownBreakpoint ? 12 : "auto"}>
                        <Typography variant="h6">
                            Hot Items
                        </Typography>
                    </Grid>
                    {_.map(SellingItems, (el) => {
                        const { name = "", picture = "", sold_price = "", created_date } = el
                        return (
                            <Grid item key={`hotItem_${name}`}>
                                <Avatar
                                    alt={name}
                                    src={picture}
                                    sx={{
                                        width: "120px",
                                        height: "120px"
                                    }}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={9}
                    container
                    rowSpacing={2}
                    columnSpacing={2}
                >
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            New Arrivals
                        </Typography>
                    </Grid>
                    {_.map([1, 2, 3], (el) => {
                        return (
                            _.map(SellingItems, (el) => {
                                const { name = "", picture = "", sold_price = "", created_date } = el
                                return (
                                    <Grid item xs={6} md={4} lg={3} key={`item_${name}_${el}`}>
                                        <Card
                                            elevation={0}
                                            sx={{
                                                boxShadow: "0 4px 20px rgb(34 34 34 / 15%)",
                                                borderRadius: "8px"
                                            }}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={picture}
                                                    alt={name}
                                                />
                                                <CardContent sx={{ padding: "4px 8px 8px 8px" }}>
                                                    <Typography variant="body1">
                                                        {name}
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        ${sold_price}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home