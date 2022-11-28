import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"
import Divider from "@mui/material/Divider"
// API
import ProductAPI from "services/ProductAPI";
import UserAPI from "services/UserAPI";

function Product() {
    const { productId } = useParams()

    const [product, setProduct] = useState({})
    const {
        product_id,
        product_name = "",
        picture = "",
        selling_price = "",
        category = "",
        description = "",
        views = 0,
        // userInfo
        user_name = "",
        phone = "",
        email = "",
    } = product

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        try {
            const result = await ProductAPI.GetProduct(productId)
            setProduct(result)

            const { user_id } = result
            if (user_id) {
                const userInfo = await UserAPI.GetUserInfo(user_id)
                setProduct((preState) => {
                    return {
                        ...preState,
                        ...userInfo,
                    }
                })
            }
        } catch (e) {
            console.log('product error: ', e)
        }
    }

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid container columnSpacing={2}>
                <Grid item xs={12} md={7}>
                    <CardMedia
                        component="img"
                        image={picture}
                        sx={{
                            borderRadius: "4px",
                            // maxHeight: "400px"
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={5} container direction="column">
                    <Grid item>
                        <Typography variant="h3">
                            {product_name}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: "24px" }}>
                        <Typography variant="h6">
                            ${selling_price}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Divider sx={{ margin: "24px 0px" }} />
                        <Typography variant="caption">
                            Description
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Divider sx={{ margin: "24px 0px" }} />
                        <Typography variant="caption">
                            Category
                        </Typography>
                        <Typography variant="body2">
                            {category}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Divider sx={{ margin: "24px 0px" }} />
                        <Typography variant="caption">
                            Seller Information
                        </Typography>
                        <Typography variant="body2">
                            Name: {user_name}
                        </Typography>
                        <Typography variant="body2">
                            Phone Number: {phone}
                        </Typography>
                        <Typography variant="body2">
                            Email Address: {email}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Product