import { useState, useEffect } from "react"
import _ from "lodash"
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify"
/* Components */
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Loading from "components/share/Loading"
import CardMedia from '@mui/material/CardMedia';
/* Icons */
import Numeric1CircleOutlineIcon from "mdi-react/Numeric1CircleOutlineIcon";
import Numeric2CircleOutlineIcon from "mdi-react/Numeric2CircleOutlineIcon";
import Numeric3CircleOutlineIcon from "mdi-react/Numeric3CircleOutlineIcon";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
/* API */
import ProductAPI from "services/ProductAPI"
import CategoryAPI from "services/CategoryAPI"
/* Constants */
import { CookieId } from "constants/general";

const FieldId = {
    Name: "name",
    Picture: "picture",
    SoldPrice: "sold_price",
    Description: "description",
    Category: "category_id",
}
const ItemInfoColumns = [
    {
        label: "Item title",
        fieldId: FieldId.Name,
        type: "text",
        placeholder: "shoes",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Price",
        fieldId: FieldId.SoldPrice,
        type: "number",
        placeholder: "3.99",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Description",
        fieldId: FieldId.Description,
        type: "text",
        placeholder: "",
        InputLabelProps: {},
        sx: {},
        multiline: true,
        rows: 4,
    },
]

const SellerInfoColumns = [
    {
        label: "Contact",
        fieldId: "contact",
        type: "text",
        placeholder: "+1(XXX)XXX-XXXX",
        InputLabelProps: {},
        sx: {},
    },
]

function Seller() {
    const [cookies] = useCookies([CookieId]);
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [categories, setCategories] = useState([])
    const [values, setValues] = useState({})
    const { name = "", picture = "", sold_price = "", description = "", category_id = "" } = values

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        try {
            const result = await CategoryAPI.GetCategories()
            setCategories(() => {
                const res = {}
                _.forEach(result, (el) => {
                    const { category_name, category_id } = el
                    res[category_name] = category_id
                })
                return res
            })
        } catch (e) {
            console.log('seller init error: ', e)
        }
    }

    const handleChange = (field, value) => {
        setValues((preState) => {
            return {
                ...preState,
                [field]: value,
            }
        })
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)

            // Validate Form
            _.map(values, (el) => {
                if (_.isEmpty(el)) {
                    setErrorMsg("Please check if all required fields are filled.")
                    return;
                }
            })

            console.log({
                ...values,
                picture: " ",
                category_id: categories[category_id],
                sold_price: parseInt(values.sold_price),
                user_id: cookies.user_id,
            })

            const result = await ProductAPI.AddProduct({
                ...values,
                picture: " ",
                category_id: categories[category_id],
                sold_price: parseInt(values.sold_price),
                user_id: cookies.user_id,
            })
            console.log('result: ', result)
        } catch (e) {
            toast.error('Please try again later!')
        } finally {
            setLoading(false)
        }
    }

    const AddPhotos = () => {
        const onChange = (e) => {
            const files = e.target.files;
            const file = files[0];
            getBase64(file);
        };

        const getBase64 = (file) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (readerEvt) => {
                try {
                    setLoading(true)

                    const result = reader.result
                    // console.log('result: ', result)
                    // handleChange(FieldId.Picture, result)

                    let binaryString = readerEvt.target.result
                    console.log("binaryString: ", binaryString)
                    reader.readAsBinaryString(file)
                    // handleChange(FieldId.Picture, btoa(binaryString))
                } catch (e) {
                    console.log('upload picture error: ', e)
                } finally {
                    setLoading(false)
                }
            };
        };

        return (
            <Grid container rowSpacing={1}>
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                    <Numeric1CircleOutlineIcon />
                    <Typography variant="h6" sx={{ marginLeft: "8px" }}>
                        PHOTOS
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {_.isEmpty(picture) ?
                        (
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
                                <IconButton component="label">
                                    <input hidden accept="image/*" type="file" onChange={onChange} />
                                    <AddPhotoAlternateIcon sx={{ background: "#FFFFFF", borderRadius: "25px", padding: "4px" }} />
                                </IconButton>
                                <Typography variant="body1">
                                    Add photos
                                </Typography>
                            </Box>
                        )
                        : (
                            <CardMedia
                                component="img"
                                height="300"
                                image={picture}
                                alt="Media"
                                sx={{
                                    objectFit: "contain",
                                    objectPosition: "left",
                                }}
                            />
                        )
                    }
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ margin: "36px 0px" }} />
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
                    const { label = "", fieldId = "", type = "", placeholder = "", InputLabelProps = {}, sx = {}, multiline = false, rows = 1 } = el
                    return (
                        <Grid
                            item
                            key={`form_${fieldId}`}
                            container
                        >
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {label}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={values[fieldId]}
                                    type={type}
                                    fullWidth
                                    multiline={multiline}
                                    rows={rows}
                                    placeholder={placeholder}
                                    InputLabelProps={InputLabelProps}
                                    sx={sx}
                                    onChange={(e) => handleChange(fieldId, e.target.value)}
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
                            value={category_id}
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
                            onChange={(e) => handleChange(FieldId.Category, e.target.value)}
                        >
                            {_.map(categories, (value, key) => {
                                return (
                                    <MenuItem
                                        key={`category_${value}`}
                                        value={key}
                                    >
                                        {key}
                                    </MenuItem>
                                )
                            })}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ margin: "36px 0px" }} />
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
            <Loading loading={loading} />

            <Typography variant="h4" textAlign="center" sx={{ marginBottom: "36px" }}>
                Complete Your Listing
            </Typography>

            {AddPhotos()}

            {ItemInfo()}

            {errorMsg && (
                <Typography variant="caption" color="error">
                    {errorMsg}
                </Typography>
            )}
            <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
            >
                Submit
            </Button>

            {/* <SellerInfo /> */}
        </Container>
    )
}

export default Seller