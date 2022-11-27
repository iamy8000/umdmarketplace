import { useState } from "react"
import _ from "lodash"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
// components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
// API
import UserAPI from "services/UserAPI"
/* Constants */
import { Paths, CookieId } from "constants/general"

const FieldId = {
    Email: "email",
    Password: "password",
}

const Fields = [
    {
        label: "Email",
        fieldId: FieldId.Email,
        type: "email",
        placeholder: "email",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Password",
        fieldId: FieldId.Password,
        type: "password",
        placeholder: "password",
        InputLabelProps: {},
        sx: {},
    },
]

function Login() {
    const navigate = useNavigate()

    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    const [values, setValues] = useState({})
    const [errorMsg, setErrorMsg] = useState("")
    const [errorField, setErrorField] = useState([])

    const handleChange = (field, value) => {
        setValues((preState) => {
            return {
                ...preState,
                [field]: value,
            };
        });
    }

    const handleLogin = async () => {
        try {
            // Validate form
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
                    return;
                }
            })

            const { Msg, status, data } = await UserAPI.Login(values)
            
            if (status === 0) {
                if (Msg === 'password is wrong') {
                    toast.error('Your password was incorrect')
                } else {
                    toast.error('User not found.')
                }
                return
            } else {
                const { user_id } = data

                toast.success('Login successfully.')
                await setCookie(CookieId, user_id, { path: '/' })
                navigate(Paths.Root)
            }
        } catch (error) {
            console.log('handle login error:', error)
            toast.error('Please try again later!')
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
                            LOG IN
                        </Typography>
                    </Grid>
                    {_.map(Fields, (el) => {
                        const { label = "", fieldId = "", type = "", placeholder = "", InputLabelProps = {}, sx = {} } = el
                        return (
                            <Grid key={`loginForm_${fieldId}`} item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
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
                            onClick={() => handleLogin()}
                        >
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ margin: "16px 0px" }}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <Typography variant="body2">
                            New to UMD Market Place?
                        </Typography>
                        <Button
                            size="small"
                            sx={{ textDecoration: "underline", }}
                            onClick={() => {
                                navigate(Paths.Register)
                            }}
                        >
                            Create an Account
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default Login