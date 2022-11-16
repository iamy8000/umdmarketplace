import { useState, useEffect } from "react"
import _ from "lodash"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
/* Constants */
import { Categories } from "constants/general"
// components
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
// icons
import Numeric1CircleOutlineIcon from "mdi-react/Numeric1CircleOutlineIcon";
import Numeric2CircleOutlineIcon from "mdi-react/Numeric2CircleOutlineIcon";
import Numeric3CircleOutlineIcon from "mdi-react/Numeric3CircleOutlineIcon";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ItemInfoColumns = [
    {
        label: "Item title",
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
]

const SellerInfoColumns = [
    {
        label: "Contact",
        value: "contact",
        type: "text",
        placeholder: "+1(XXX)XXX-XXXX",
        InputLabelProps: {},
        sx: {},
    },
]

function Seller() {

    const [form, setForm] = useState({})
    const { title, category, } = form

    const AddPhotos = () => {
        return (
            <Grid container rowSpacing={1}>
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                    <Numeric1CircleOutlineIcon />
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        PHOTOS
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "200px",
                            background: "#F7F7F7",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <AddPhotoAlternateIcon sx={{ background: "#FFFFFF", borderRadius: "25px", padding: "4px" }} />
                        <Typography variant="body1">
                            Add photos
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const ItemInfo = () => {
        return (
            <Grid container rowSpacing={1}>
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                    <Numeric2CircleOutlineIcon />
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        ITEM INFORMATION
                    </Typography>
                </Grid>
                {_.map(ItemInfoColumns, (el) => {
                    const { label = "", value = "", type = "", placeholder = "", InputLabelProps = {}, sx = {} } = el
                    return (
                        <Grid
                            item
                            key={`form_${value}`}
                            container
                        >
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {label}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
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
                <Grid item container>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Category
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            select
                            fullWidth
                            value={category}
                            SelectProps={{
                                SelectDisplayProps: {
                                    style: {
                                        padding: "10px",
                                    },
                                },
                            }}
                            InputProps={{
                                style: {
                                    padding: "0px",
                                },
                            }}
                            onChange={(event) => {
                                setForm({ category: event.target.value });
                            }}
                        >
                            {_.map(Categories, (el, index) => {
                                const { label = "" } = el
                                return (
                                    <MenuItem
                                        key={`category_${label}`}
                                        value={label}
                                    >
                                        {label}
                                    </MenuItem>
                                )
                            })}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    const SellerInfo = () => {
        return (
            <Grid container rowSpacing={1}>
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                    <Numeric3CircleOutlineIcon />
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        SELLER INFORMATION
                    </Typography>
                </Grid>
                {_.map(SellerInfoColumns, (el) => {
                    const { label = "", value = "", type = "", placeholder = "", InputLabelProps = {}, sx = {} } = el
                    return (
                        <Grid
                            item
                            key={`form_${value}`}
                            container
                        >
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {label}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
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
        )
    }

    return (
        <Container maxWidth="md" sx={{ paddingTop: "48px", paddingBottom: "64px" }}>
            <Typography variant="h5" sx={{ marginBottom: "36px" }}>
                Complete your listing
            </Typography>

            <AddPhotos />
            <Divider sx={{ margin: "36px 0px" }} />

            <ItemInfo />
            <Divider sx={{ margin: "36px 0px" }} />

            <SellerInfo />
        </Container>
    )
}

export default Seller