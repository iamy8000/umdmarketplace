import { useState, useEffect } from "react"
import _ from "lodash"
import { Route, Routes, useNavigate } from "react-router-dom";
// components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
/* Constants */
import { Paths } from "constants/general"

function Login() {
    const navigate = useNavigate()

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
                            LOG IN
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2">
                            Email
                        </Typography>
                        <TextField
                            type="email"
                            fullWidth
                            placeholder="hi@umd.edu"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2">
                            Password
                        </Typography>
                        <TextField
                            type="password"
                            fullWidth
                            placeholder="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            disableElevation
                            sx={{ borderRadius: "24px" }}
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