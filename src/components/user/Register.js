import { useState, useEffect } from "react"
import _ from "lodash"
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
// constant
const FormColumns = [
    {
        label: "Email",
        value: "email",
        type: "email",
        placeholder: "hi@umd.edu",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Phone number",
        value: "phone",
        type: "tel",
        placeholder: "+1(XXX)XXX-XXXX",
        InputLabelProps: {},
        sx: {},
    },
    {
        label: "Password",
        value: "password",
        type: "password",
        placeholder: "",
        InputLabelProps: {},
        sx: {},
    },
]

function Register() {
    const [form, setForm] = useState({})

    const handleForm = () => {

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
                    {_.map(FormColumns, (el) => {
                        const { label = "", value = "", type = "", placeholder = "", InputLabelProps = {}, sx = {} } = el
                        return (
                            <Grid key={`form_${value}`} item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant="body2">
                                    {label}
                                </Typography>
                                <TextField
                                    type={type}
                                    fullWidth
                                    placeholder={placeholder}
                                    InputLabelProps={InputLabelProps}
                                    sx={sx}
                                />
                            </Grid>
                        )
                    })}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            disableElevation
                            sx={{ borderRadius: "24px" }}
                            onClick={() => {
                                const data = UserAPI.Register
                            }}
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