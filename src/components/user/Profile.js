import { useState, useEffect } from "react"
import _ from "lodash"
import { useCookies } from 'react-cookie';
import { toast } from "react-toastify"
import { Route, Routes, useNavigate } from "react-router-dom";
/* Constants */
import { Paths, CookieId } from "constants/general"
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
import Card from '@mui/material/Card';
// API
import UserAPI from "services/UserAPI";

function Profile() {

    const [cookies] = useCookies([CookieId]);
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        try {
            const userResult = await UserAPI.GetUserInfo(cookies[CookieId])
            setUserInfo(userResult)
        } catch (e) {
            console.log('profile error: ', e)
        }
    }

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "48px", display: "flex", justifyContent: "center" }}>
            <Card
                elevation={4}
                sx={{ padding: "36px 48px", maxWidth: "500px" }}
            >
                <Typography variant="h3" textAlign="center">
                    Profile
                </Typography>
                <Grid container marginTop="12px" rowSpacing={2}>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2">
                            User Name
                        </Typography>
                        <TextField
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2">
                            Email Address
                        </Typography>
                        <TextField
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2">
                            Phone
                        </Typography>
                        <TextField
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2">
                            Password
                        </Typography>
                        <TextField
                            fullWidth
                            type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" fullWidth>
                            Submit Changes
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default Profile