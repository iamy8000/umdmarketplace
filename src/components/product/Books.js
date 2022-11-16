// components
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"

function Books() {
    return (
        <Container maxWidth="md" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                        This is Books page. It's still a work in progress.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <CardMedia
                        component="img"
                        height="400px"
                        image="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
export default Books