import  Toolbar  from "@mui/material/Toolbar"
import  AppBar  from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import  Typography  from "@mui/material/Typography"

const Navbar = () => {
    return(
        <AppBar position="static" sx={{ backgroundColor: "#005F73"}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ display: {xs: "none", md:"flex"}}}
                    >
                        DomainName
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
        )
}

export default Navbar