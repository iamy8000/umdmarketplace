
import _ from "lodash"
import { useNavigate } from "react-router-dom";
/* Constants */
import { Paths } from "constants/general"
/* Components */
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Success() {
    const navigate = useNavigate()

    return (
        <Container>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                columnSpacing={3}
                sx={{ minHeight: '80vh' }}
            >
                <Grid item>
                    <Typography variant="h6">
                        You are all set.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Admin will start reviewing your product soon.
                    </Typography>
                </Grid>
                <Grid item marginTop="40px">
                    <Button variant="contained" onClick={() => navigate(Paths.Root)}>
                        Go To Home Page
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Success