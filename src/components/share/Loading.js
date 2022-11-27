// Hooks
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
// Component
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Loading(props) {
    const { loading = false } = props

    const theme = useTheme()
    const smDownBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Fade in={loading}>
            <Paper
                elevation={0}
                sx={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100%',
                    maxHeight: '100vh',
                    left: 0,
                    top: 0,
                    background: "rgb(74, 74, 74, .5)",
                    zIndex: 9999,
                    paddingTop: "30%"
                }}
            >
                <Box
                    display="flex"
                    flexDirection='column'
                    alignItems='center'
                    width="100%"
                    height="100%"
                >
                    <Typography
                        variant="h6"
                    >
                        loading
                    </Typography>
                    <CircularProgress />
                </Box>
            </Paper>
        </Fade>
    )
}

export default Loading