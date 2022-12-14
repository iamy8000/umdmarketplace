import React, { useState, useEffect } from 'react';
import _ from "lodash"
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify"
// API
import ProductAPI from 'services/ProductAPI';
// constants
import { CookieId } from "constants/general"
// components
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { DataGrid } from '@mui/x-data-grid';
// Icon
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

const dataColumns = [
    {
        field: 'product_name',
        headerName: 'Product Name',
        width: 200
    },
    {
        field: 'selling_price',
        headerName: 'Price',
        width: 100,
        renderCell: (params) => {
            return (
                <Typography variant='body2'>
                    ${params.row.selling_price}
                </Typography>
            )
        }
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 500,
        renderCell: (params) => {
            return (
                <Typography variant='body2' sx={{ maxWidth: 450 }}>
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
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: (params) => {
            let label = ""
            let color = ""
            switch (params.row.status) {
                case 0:
                    label = "Pending"
                    color = "#FFCB73"
                    break
                case 1:
                    label = "Posted"
                    color = "#6EE7B7"
                    break;
                case 2:
                    label = "Closed"
                    color = "#77756F"
                    break;
                case 3:
                    label = "Rejected"
                    color = "#DC5C70"
                    break;
                default:
                    label = ""
                    break;
            }

            return (
                <Chip
                    label={label}
                    sx={{
                        background: color,
                        color: "#000000",
                        fontWeight: 500,
                    }}
                />
            )
        }
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
            const pendingResult = await ProductAPI.GetPendingProduct(cookies[CookieId])
            const sellingResult = await ProductAPI.GetProducts()
            const result = pendingResult.concat(sellingResult)

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

    const handleSubmit = async (statusId) => {
        try {
            if (selectItems.length === 0) {
                return
            }
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
                        status: statusId,
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
        <Container maxWidth="lg" sx={{ paddingTop: "48px", paddingBottom: "36px" }}>
            <Grid container rowSpacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                        Pending Products
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                    <Button
                        variant='contained'
                        color='success'
                        startIcon={<CheckIcon />}
                        sx={{
                            marginRight: "12px"
                        }}
                        onClick={() => handleSubmit(1)}
                    >
                        Approve
                    </Button>
                    <Button
                        variant='contained'
                        startIcon={<DeleteIcon />}
                        onClick={() => handleSubmit(3)}
                    >
                        Remove
                    </Button>
                </Grid>
                <Grid item sx={{ height: 700, width: '100%' }}>
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