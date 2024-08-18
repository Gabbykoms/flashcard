

import Image from "next/image"
import getStripe from '@stripe/stripe-js'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Toolbar, Typography, Container, AppBar, Button, Box, Grid } from "@mui/material"
import Head from 'next/head';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>flashcard</title>
        <meta name="description" content='Create flashcard from your text' />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href= "/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{
        textAlign: 'center',
        my: 4
      }}>
        <Typography variant='h2'>
          Welcome to FlashCard SaaS
        </Typography>
        <Typography variant='h5'>
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant='contained' color='primary' sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Simple text input!
            </Typography>
            <Typography>
              Input your text and let's do the rest. Creating flashcards has never been easier, lol
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Smart Flashcards
            </Typography>
            <Typography>
              Our AI breaks down your text into concise flashcards for smart studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">
              Accessible Anywhere
            </Typography>
            <Typography>
              Access your flashcards from any device anywhere and study on the go!
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ my: 6 }} textAlign={'center'}>
        <Typography variant='h4' gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h6">
                Basic Plan
              </Typography>
              <Typography>
                Perfect for beginners
              </Typography>
              <Typography variant="h4" sx={{ my: 2 }}>
                $9.99/mo
              </Typography>
              <Button variant="contained">Choose Plan</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h6">
                Pro Plan
              </Typography>
              <Typography>
                Unlimited flashcards & storage with support
              </Typography>
              <Typography variant="h4" sx={{ my: 2 }}>
                $19.99/mo
              </Typography>
              <Button variant="contained" color="primary">Choose Plan</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h6">
                Enterprise Plan
              </Typography>
              <Typography>
                For large teams
              </Typography>
              <Typography variant="h4" sx={{ my: 2 }}>
                Contact Us
              </Typography>
              <Button variant="contained">Get in Touch</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
