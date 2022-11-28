import { useState, useEffect } from "react"
import _ from "lodash"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
// components
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ProductCard from "components/share/ProductCard";
// API
import ProductAPI from "services/ProductAPI";

function Home() {
    const navigate = useNavigate()
    const theme = useTheme();
    const mdDownBreakpoint = useMediaQuery(theme.breakpoints.down('md'));

    const [products, setProducts] = useState([])
    const [hotProducts, setHotProducts] = useState([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        try {
            const productResult = await ProductAPI.GetProducts()
            setProducts(productResult)

            const hotResult = await ProductAPI.GetHotProducts()
            setHotProducts(hotResult.slice(0, 4))
        } catch (e) {
            console.log('home page error:', e)
        }
    }

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid container>
                <Grid item xs={12} md={10}>
                    <Grid
                        container
                        direction="row"
                        rowSpacing={2}
                        columnSpacing={2}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                New Arrivals
                            </Typography>
                        </Grid>
                        {_.map(products, (el, index) => {
                            const { product_name = "" } = el
                            return (
                                <Grid item xs={6} md={4} lg={3} key={`item_${product_name}_${index}`}>
                                    <ProductCard data={el} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={2}
                >
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={2}
                        paddingLeft="24px"
                    >
                        <Grid item xs={mdDownBreakpoint ? 12 : "auto"}>
                            <Typography variant="h6">
                                Hot Items
                            </Typography>
                        </Grid>
                        {_.map(hotProducts, (el, index) => {
                            const {
                                product_id,
                                product_name = "",
                                picture = "",
                                selling_price = "",
                                views = 0,
                            } = el
                            return (
                                <Grid item xs={6} md={12} key={`hotItem_${product_name}_${index}`}>
                                    <Card
                                        elevation={0}
                                        sx={{
                                            boxShadow: "0 4px 20px rgb(34 34 34 / 15%)",
                                            borderRadius: "8px"
                                        }}
                                    >
                                        <CardActionArea
                                            onClick={() => navigate(`/product/${product_id}`)}
                                        >

                                            <CardMedia
                                                component="img"
                                                height="90"
                                                image={picture}
                                                alt={product_name}
                                                sx={{
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <CardContent sx={{ padding: "4px 8px 8px 8px" }}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap",
                                                        textOverflow: "ellipsis",
                                                    }}
                                                >
                                                    {product_name}
                                                </Typography>
                                                <Typography variant="caption" component={'div'}>
                                                    ${selling_price}
                                                </Typography>
                                                <Chip
                                                    color="primary"
                                                    label={`${views} views`}
                                                    sx={{
                                                        marginTop: "8px",
                                                        width: "100%"
                                                    }}
                                                />
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Home