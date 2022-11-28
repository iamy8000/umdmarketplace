import { useState, useEffect } from "react"
import _ from "lodash"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
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


function ProductCard(props) {
    const navigate = useNavigate()
    const theme = useTheme();

    const { data } = props
    const {
        product_id,
        product_name = "",
        picture = "",
        selling_price = "",
        category = "",
        description = "",
        status = 1,
        user_id = "",
        user_name = "",
        views = 0,
    } = data

    return (
        <Card
            elevation={0}
            sx={{
                boxShadow: "0 4px 20px rgb(34 34 34 / 15%)",
                borderRadius: "8px",
            }}
        >
            <CardActionArea
                onClick={() => navigate(`/product/${product_id}`)}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={picture}
                    alt={product_name}
                    sx={{
                        objectFit: "contain",
                        // objectPosition: "center",
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
                    <Typography variant="caption">
                        ${selling_price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard