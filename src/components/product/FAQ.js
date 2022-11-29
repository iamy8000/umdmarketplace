import _ from "lodash"
// components
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"

const FAQInfo = [
    {
        title: "Is this application only for University of Maryland students and staff?",
        content: "UMD Marketplace is a website for the students, faculty and staff of University of Maryland who have a valid and working university email ID. ",
    },
    {
        title: "How do I create an account?",
        content: "To get started, a user should first create an account using their valid university email id, password and contact number. Users without a valid UMD mail id will not be allowed to create an account."
    },
    {
        title: "What can I sell on UMD Marketplace?",
        content: "You can sell clothes, electronics, toys, books, or any furniture that is used or brand new. We restrict items that violate any laws or infringe on intellectual property."
    },
    {
        title: "How can I contact the seller?",
        content: "Seller’s contact details are available at the bottom of every listed item. Seller should be contacted directly via phone."
    }
]

function FAQ() {
    return (
        <Container maxWidth="md" sx={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <Grid container rowSpacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center">
                        FAQ
                    </Typography>
                </Grid>
                {_.map(FAQInfo, (el, index) => {
                    const { title = "", content = "" } = el
                    return (
                        <Grid item xs={12} key={`FAQ${index}`}>
                            <Typography variant="h6">
                                {title}
                            </Typography>
                            <Typography variant="body1">
                                {content}
                            </Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
export default FAQ