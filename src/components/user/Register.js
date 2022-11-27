import { useState, useEffect } from "react"
import _ from "lodash"
import { toast } from 'react-toastify';
// components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// API
import UserAPI from "services/UserAPI"
// constant
const FieldId = {
    Username: "user_name",
    Email: "email",
    Phone: "phone",
    Password: "password",
}
const Fields = [
    {
        label: "User name",
        fieldId: FieldId.Username,
        type: "text",
        placeholder: "userexample",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Email",
        fieldId: FieldId.Email,
        type: "email",
        placeholder: "hi@umd.edu",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Phone number",
        fieldId: FieldId.Phone,
        type: "tel",
        placeholder: "(XXX)XXX-XXXX",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Password",
        fieldId: FieldId.Password,
        type: "password",
        placeholder: "XXXXXXXX",
        InputLabelProps: {},
        sx: {},
    },
]

function Register() {
    const [values, setValues] = useState({})
    const [errorMsg, setErrorMsg] = useState("")
    const [errorField, setErrorField] = useState([])

    useEffect(() => {
        setErrorField([])
        setErrorMsg("")
    }, [values])

    const handleChange = (field, value) => {
        setValues((preState) => {
            return {
                ...preState,
                [field]: value,
            };
        });
    }

    const handleRegister = async () => {
        try {
            // Required fields need to be filled
            if (_.isEmpty(values)) {
                setErrorMsg("Please check if all required fields are filled.")
                setErrorField(() => {
                    const result = []
                    _.map(FieldId, (el) => result.push(el))
                    return result
                })
                return;
            }

            _.map(values, (value, key) => {
                if (_.isEmpty(value)) {
                    setErrorMsg("Please check if all required fields are filled.")
                    setErrorField(() => {
                        const result = []
                        _.map(FieldId, (el) => result.push(el))
                        return result
                    })
                    return;
                }
            })

            // validate email format
            const emailReq =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailReq.test(String(values[FieldId.Email]).toLowerCase()) || !values[FieldId.Email]?.indexOf('@umd.edu')) {
                setErrorMsg("Please use UMD email address.")
                setErrorField([FieldId.Email])
                return;
            }

            // Validate phone number format
            const phoneReq = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            if (!phoneReq.test(String(values[FieldId.Phone]))) {
                setErrorMsg("Please use US phone number.")
                setErrorField([FieldId.Phone])
                return;
            }

            const { data: result } = await UserAPI.Register(values)
            // console.log('data:', data)
        } catch (error) {
            console.log('handle register error:', error)
            const errormsg = error.response.data.status
            if (errormsg === 'Email is already exsit') {
                toast.error('Email is already exsit')
            } else {
                toast.error('We are not able to create your account now. Please try again later!')
            }
        }
    }

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", display: "flex", justifyContent: "center" }}>
            <Card
                elevation={4}
                sx={{ padding: "36px 48px", maxWidth: "400px" }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    rowSpacing={3}
                >
                    <Grid item xs={12}>
                        <Typography variant="h4" textAlign="center">
                            SIGN UP
                        </Typography>
                    </Grid>
                    {_.map(Fields, (el) => {
                        const { label = "", fieldId = "", type = "", placeholder = "", InputLabelProps = {}, sx = {} } = el
                        return (
                            <Grid key={`form_${fieldId}`} item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant="body2">
                                    {label}
                                </Typography>
                                <TextField
                                    value={values[fieldId]}
                                    type={type}
                                    fullWidth
                                    placeholder={placeholder}
                                    InputLabelProps={InputLabelProps}
                                    sx={sx}
                                    onChange={(e) => handleChange(fieldId, e.target.value)}
                                    error={_.includes(errorField, fieldId)}
                                />
                            </Grid>
                        )
                    })}
                    {errorMsg && (
                        <Grid item>
                            <Typography variant="caption" color="error">
                                {errorMsg}
                            </Typography>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            disableElevation
                            sx={{ borderRadius: "24px" }}
                            onClick={() => handleRegister()}
                        >
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default Register