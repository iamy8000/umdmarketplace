import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify"
// components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
// API
import ProductAPI from 'services/ProductAPI';
// constants
import { CookieId } from "constants/general"

function Auth() {

    const [cookies, setCookie, removeCookie] = useCookies([CookieId]);
    const [products, setProducts] = useState([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        try {
            const result = await ProductAPI.GetPendingProduct(cookies[CookieId])
            console.log('result: ', result)
            setProducts(result)
        } catch (e) {
            console.log('auth error: ', e)
            toast.error('Sorry you do not have permmision to access auth page!')
        }
    }

    const dataColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const dataRows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={dataRows}
                    columns={dataColumns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(item) => console.log("item: ", item)}
                />
            </div>
        </Container>
    );
}

export default Auth