import React, { useEffect, useState } from "react";
import _ from "lodash"
import { Route, Routes, useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";
import { useCookies } from 'react-cookie';
/* Constants */
import { Paths, CookieId } from "constants/general"
/* Components */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
/* Icons */
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SellIcon from '@mui/icons-material/Sell';
import HelpIcon from '@mui/icons-material/Help';
import LoginIcon from '@mui/icons-material/Login';
import ErrorIcon from '@mui/icons-material/Error';
import LogoutIcon from '@mui/icons-material/Logout';
/* Pages */
import Home from "components/home/Home"
import Login from "components/user/Login"
import Register from "components/user/Register";
import Auth from "components/user/Auth";
import Seller from "components/seller/Seller";
import FAQ from "components/product/FAQ";
import Category from "components/product/Category";
import Product from "components/product/Product";
import Success from "components/seller/Success";
import Profile from "components/user/Profile";
/* APIs */
import CategoryAPI from "services/CategoryAPI";
import UserAPI from "services/UserAPI";

const MenuId = {
    account: "account",
}

const UserView = {
    Account: {
        label: "My Profile",
        icon: <AssignmentIndIcon />,
        value: "profile",
        path: Paths.Account
    },
    Seller: {
        label: "Sell on UMD Marketplace",
        icon: <SellIcon />,
        value: "seller",
        path: Paths.Seller
    },
    Auth: {
        label: "Pending Product",
        icon: <ErrorIcon />,
        value: "auth",
        path: Paths.Auth
    },
    FAQ: {
        label: "Help/FAQ",
        icon: <HelpIcon />,
        value: "faq",
        path: Paths.FAQ,
        components: (
            <Divider />
        )
    },
    Logout: {
        label: "Logout",
        icon: <LogoutIcon />,
        value: "logout",
        path: Paths.Root
    },
}

const GuestView = {
    Login: {
        label: "Log In/Sign Up",
        icon: <LoginIcon />,
        value: "login",
        path: Paths.Login,
    },
    FAQ: {
        label: "Help/FAQ",
        icon: <HelpIcon />,
        value: "faq",
        path: Paths.FAQ,
        components: (
            <Divider />
        )
    },
}

function Navigation(props) {
    const navigate = useNavigate()
    const theme = useTheme();

    const lgDownBreakpoint = useMediaQuery(theme.breakpoints.down('lg'));

    const [cookies, setCookie, removeCookie] = useCookies([CookieId]);
    const [menu, setMenu] = useState({})
    const { anchorEl = null, menuId = "" } = menu;
    const [categories, setCategories] = useState([])
    const [menuItems, setMenuItems] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const { role: userRole = 0 } = userInfo

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        init()
        if (_.isEmpty(cookies)) {
            setMenuItems(GuestView)
        } else {
            setMenuItems(UserView)
        }
    }, [cookies])

    const init = async () => {
        try {
            const result = await CategoryAPI.GetCategories()
            setCategories(result)

            if (_.isEmpty(cookies)) {
                setMenuItems(GuestView)
            } else {
                setMenuItems(UserView)
                const userResult = await UserAPI.GetUserInfo(cookies[CookieId])
                setUserInfo(userResult)
            }
        } catch (e) {
            console.log('navigation init error: ', e)
        }
    }

    const handleMenu = (event, menuId) => {
        if (event.currentTarget) {
            setMenu({
                anchorEl: event.currentTarget,
                menuId,
            })
        }
    }

    const handleMenuClose = () => {
        setMenu({})
    }

    const MenuBar = () => {
        return (
            <AppBar elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="flex-end"
                            padding={lgDownBreakpoint ? "12px 0px" : "0px"}
                        >
                            <Grid item>
                                <Avatar
                                    alt=""
                                    src="https://brand.umd.edu/uploads/images/logos-formal-seal.jpg"
                                />
                            </Grid>
                            <Grid item sx={{ flexGrow: 1 }}>
                                <Button
                                    variant="text"
                                    size="large"
                                    onClick={() => navigate(Paths.Root)}
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    UMD Market Place
                                </Button>
                            </Grid>
                            {_.map(categories, (el) => {
                                const { category_name = "", category_id } = el
                                return (
                                    <Grid item key={`menu_${category_name}`}>
                                        <Button
                                            color="inherit"
                                            onClick={() => {
                                                navigate(`/category/${category_id}`)
                                            }}
                                            sx={{
                                                textTransform: "none",
                                            }}
                                        >
                                            {category_name}
                                        </Button>
                                    </Grid>
                                )
                            })}
                            <Divider orientation="vertical" variant="middle" flexItem sx={{ background: "white", margin: "8px 8px" }} />
                            {_.isEmpty(cookies) &&
                                (
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            disableElevation
                                            onClick={() => {
                                                navigate(Paths.Login)
                                            }}
                                            sx={{
                                                color: 'white',
                                                borderColor: 'white',
                                                "&:hover": {
                                                    borderColor: 'lightgray',
                                                }
                                            }}
                                        >
                                            Log In/Sign Up
                                        </Button>
                                    </Grid>
                                )
                            }
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    onClick={(e) => {
                                        handleMenu(e, MenuId.account)
                                    }}
                                >
                                    <AccountCircleIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={menuId === MenuId.account}
                                    onClose={handleMenuClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            minWidth: 230,
                                            '& .MuiPaper-root': {

                                            },
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    {_.map(menuItems, (el) => {
                                        const { label = "", value = "", path = "", icon = <></>, components = <></> } = el
                                        return (
                                            <Box key={`menu_${value}`}>
                                                {components}
                                                <MenuItem
                                                    sx={{
                                                        display: (value === 'auth' && userRole === 0) && 'none'
                                                    }}
                                                    onClick={() => {
                                                        if (value === 'logout') {
                                                            removeCookie(CookieId)
                                                        }
                                                        navigate(path)
                                                        setMenu({})
                                                    }}
                                                >
                                                    <ListItemIcon>{icon}</ListItemIcon>
                                                    <ListItemText> {label}</ListItemText>
                                                </MenuItem>
                                            </Box>
                                        )
                                    })}
                                </Menu>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }

    return (
        <div>
            {MenuBar()}

            {/* Body */}
            <Container maxWidth="lg" sx={{ paddingTop: "64px" }}>
                <Routes>
                    <Route path={Paths.Root} element={<Home />} />

                    {/* user */}
                    <Route path={Paths.Login} element={<Login />} />
                    <Route path={Paths.Register} element={<Register />} />
                    <Route path={Paths.Seller} element={<Seller />} />
                    <Route path={Paths.Success} element={<Success />} />
                    <Route path={Paths.Auth} element={<Auth />} />
                    <Route path={Paths.Profile} element={<Profile />} />

                    {/* product */}
                    <Route path="/category/:categoryId" element={<Category />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path={Paths.FAQ} element={<FAQ />} />

                    {/* 404 */}
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Oooooops 404! please go to home page</p>
                            </main>
                        }
                    />
                </Routes>
            </Container>
        </div>
    )
}

export default Navigation