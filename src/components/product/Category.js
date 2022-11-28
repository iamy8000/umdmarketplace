import React, { useEffect, useState } from "react";
import _ from "lodash"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// components
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"
import ProductCard from "components/share/ProductCard";
// API
import CategoryAPI from "services/CategoryAPI";

function Category() {
    const { categoryId } = useParams()

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState("")

    useEffect(() => {
        init()
    }, [categoryId])

    const init = async () => {
        try {
            const intCategoryId = parseInt(categoryId)
            const result = await CategoryAPI.GetCategoryDetail(intCategoryId)
            setProducts(result)

            const categories = await CategoryAPI.GetCategories()
            setCategory(() => {
                let result = ""
                _.forEach(categories, (el) => {
                    const { category_id, category_name } = el
                    console.log()
                    if (category_id === intCategoryId) {
                        result = category_name
                    }
                })
                return result
            })
        } catch (e) {
            console.log('category error: ', e)
        }
    }

    return (
        <Container maxWidth="md" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
            >
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                        {category}
                    </Typography>
                    <Typography variant="body2" textAlign="center">
                        {products.length} Items Found
                    </Typography>
                </Grid>
                {_.map(products, (el, index) => (
                    <Grid item xs={6} md={4} lg={3} key={`categories_products_${index}`}>
                        <ProductCard data={el} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default Category