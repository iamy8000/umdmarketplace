import React, { useState, useEffect } from 'react';
import _ from "lodash"
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify"
// components
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
// API
import ProductAPI from 'services/ProductAPI';
// constants
import { CookieId } from "constants/general"

const dataColumns = [
    {
        field: 'product_name',
        headerName: 'Product Name',
        width: 150
    },
    {
        field: 'selling_price',
        headerName: 'Price',
        width: 130
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 400,
        renderCell: (params) => {
            return (
                <Typography variant='body2' sx={{ maxWidth: 350 }}>
                    {params.row.description}
                </Typography>
            )
        }
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 130
    },
];

function Auth() {
    const [cookies] = useCookies([CookieId]);
    const [products, setProducts] = useState([])
    const [selectItems, setSelectItems] = useState([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        try {
            const result = await ProductAPI.GetPendingProduct(cookies[CookieId])
            setProducts(() => {
                const newResult = _.map(result, (el) => {
                    const { product_id } = el
                    return {
                        ...el,
                        id: product_id
                    }
                })
                return newResult
            })
        } catch (e) {
            console.log('auth error: ', e)
            toast.error('Sorry you do not have permmision to access auth page!')
        }
    }

    const handleSubmit = async () => {
        try {
            // check if selecting more than one product
            if (selectItems.length > 1) {
                toast.error('Please select only one product')
                return
            }

            let body = {}
            _.forEach(products, (el) => {
                if (el.product_id === selectItems[0]) {
                    const { product_id, status } = el
                    body = {
                        product_id,
                        role: 1,
                        status: 1,
                    }
                }
            })

            const result = await ProductAPI.AuthProduct(body)
            toast.success("Successfully update product's status")
            setSelectItems([])
            init()
        } catch (e) {
            console.log('auth error: ', e)
            toast.error('Please try again later!')
        }
    }

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid container rowSpacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                        Pending Products
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Button
                        variant='contained'
                        sx={{
                            visibility: _.isEmpty(selectItems) && 'hidden'
                        }}
                        onClick={handleSubmit}
                    >
                        Approve
                    </Button>
                </Grid>
                <Grid item sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={products}
                        columns={dataColumns}
                        // pageSize={10}
                        // rowsPerPageOptions={[5, 10]}
                        checkboxSelection
                        onSelectionModelChange={(el) => setSelectItems(el)}
                        getRowHeight={() => 'auto'}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Auth