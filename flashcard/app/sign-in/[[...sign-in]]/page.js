import { AppBar, Container, Typography, Button, Box, Toolbar, Link } from "@mui/material";
import { SignIn } from "@clerk/nextjs";



export default function SignInPage() {
    return <Container maxWidth="sm">
        <AppBar position='static' sx={{ backgroundColor: '#3f51b5'}}>
            <Toolbar>
            <Typography variant="h6"
            sx={{
                flexGrow: 1,
            }}
            >

            FlashCard SaaS
            </Typography>
            <Button color="inherit">
                <Link href ="/sign-in" passHref> Log In</Link>
            </Button>

            <Button color="inherit">
                <Link href ="/sign-up" passHref> Sign Up</Link>
            </Button>

           
            </Toolbar>
        </AppBar>
        <Box
            display = "flex"
            flexDirection = "column"
            alignItems={"center"}
            justifyContent={"center"}
            >
                 <Typography variant="h4"> Sign In</Typography>
                 <SignIn />
            </Box>
    </Container>
}