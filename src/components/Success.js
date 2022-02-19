import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';

export class Success extends Component {


  render() {

     return (
      <div>
           <Container maxWidth='sm' sx={{ marginTop : '20px' }}>
              <Box>
              <AppBar position="static">
                  <Toolbar variant="dense">
                      <Typography variant="title1" component="h1" >Thank You</Typography>
                  </Toolbar>
              </AppBar>
              <Typography variant="subtitle" component='h2'>Thank You for Registering</Typography>
              </Box>
           </Container>
      </div>
    )
  }
}

export default Success