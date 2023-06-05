import React from 'react'
import { Typography,Paper,Container,Box } from '@mui/material'

const Footer = () => {
  return (
    <Paper sx={{marginTop: 0,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >

        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="h6" color="initial">
            Copyright ©2023.
          </Typography>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer