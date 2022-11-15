import { createTheme } from "@mui/material/styles";

const fontFamily = [
    '"Outfit"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans"',
    'Meiryo',
    '"LiHei Pro"',
    '"STHeiti"',
    '"Yu Gothic"',
    '"SimHei"',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
]

const theme = createTheme({
    typography: {
        fontFamily: fontFamily.join(','),
        useNextVariants: true, // Immediate switch to typography v2
        h1: {
            fontSize: '5.625rem',
            fontWeight: 900,
            letterSpacing: -1.5,
            lineHeight: 1.4222,
            color: 'inherit',
        },
        h2: {
            fontSize: '3.625rem',
            fontWeight: 700,
            letterSpacing: -0.5,
            lineHeight: 1.379,
            color: 'inherit',
        },
        h3: {
            fontSize: '2.875rem',
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 1.391,
            color: 'inherit',
        },
        h4: {
            fontSize: '2.0rem',
            fontWeight: 700,
            letterSpacing: 0.25,
            lineHeight: 1.5,
            color: 'inherit',
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 600,
            letterSpacing: 0,
            lineHeight: 1.3334,
            color: 'inherit',
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 600,
            letterSpacing: 0.25,
            lineHeight: 1.6,
            color: 'inherit',
        },
        subtitle1: {
            fontSize: '1.0rem',
            fontWeight: 700,
            letterSpacing: 0.15,
            lineHeight: 1.875,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: 0.1,
            lineHeight: 1.714,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        body1: {
            fontSize: '1.0rem',
            fontWeight: 400,
            letterSpacing: 0.5,
            lineHeight: 1.875,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: 0.25,
            lineHeight: 1.714,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: 1.25,
            lineHeight: 1.142,
            color: 'inherit',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: 0.4,
            lineHeight: 1.333,
            color: 'inherit',
            fontFamily: fontFamily.join(','),
        },
    }
});

export default theme;