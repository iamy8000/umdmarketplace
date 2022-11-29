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
// API
import UserAPI from "services/UserAPI";

function Profile() {

    const [cookies] = useCookies([CookieId]);
    const [userInfo, setUserInfo] = ({})

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

    

    return (<></>)
}

export default Profile