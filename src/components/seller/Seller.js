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
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const FormColumns = [
    {
        label: "Title",
        value: "title",
        type: "text",
        placeholder: "ex: shoes",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Price",
        value: "price",
        type: "number",
        placeholder: "ex: $3.99",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Description",
        value: "description",
        type: "text",
        placeholder: "",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Contact",
        value: "contact",
        type: "text",
        placeholder: "+1(XXX)XXX-XXXX",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Tags",
        value: "tags",
        type: "text",
        placeholder: "",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Picture",
        value: "picture",
        type: "text",
        placeholder: "",
        InputLabelProps: {},
        sx: {},
    },
]

function Seller() {

    const [form, setForm] = useState({})


    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid
                container
                justifyContent="center"
                rowGap={2}
            >
                <Grid item>
                    <Typography variant="h5">
                        Upload Your Items
                    </Typography>
                </Grid>
                {_.map(FormColumns, (el) => {
                    const { label = "", value = "", type = "", placeholder = "", InputLabelProps = {}, sx = {} } = el
                    return (
                        <Grid
                            key={`form_${value}`}
                            item
                            xs={12}
                            container
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <Grid item xs={2}>
                                <Typography variant="body1">
                                    {label}
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    type={type}
                                    fullWidth
                                    placeholder={placeholder}
                                    InputLabelProps={InputLabelProps}
                                    sx={sx}
                                />
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Seller