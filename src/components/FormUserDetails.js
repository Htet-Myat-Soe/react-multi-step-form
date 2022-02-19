import { AppBar, TextField, Toolbar, Typography, Container, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export class FormUserDetails extends Component {


    // continue

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


  render() {

    const { values, handleChange } = this.props;

     return (
      <div>
           <Container maxWidth='sm' sx={{ marginTop : '20px' }}>
              <Box>
              <AppBar position="static">
                  <Toolbar variant="dense">
                      <Typography variant="title1" component="h1" >Fill User Details</Typography>
                  </Toolbar>
              </AppBar>
              <br/>
              <TextField 
                label="Enter your firstName" 
                variant='outlined' 
                type="text"  
                fullWidth
                defaultValue={values.firstName}
                margin='dense'
                onChange={handleChange('firstName')}  />
              <br/>
              <TextField 
                label="Enter your lastName" 
                variant='outlined' 
                type="text"  
                fullWidth
                defaultValue={values.lastName}
                margin='dense'
                onChange={handleChange('lastName')}  />
              <br/>
              <TextField 
                label="Email" 
                variant='outlined' 
                type="email"  
                fullWidth
                defaultValue={values.email}
                margin='dense'
                onChange={handleChange('email')}  />
                

                <Button 
                  variant="contained"
                  onClick={this.continue}
                  primary={true}
                  endIcon={<NavigateNextIcon/>}
                >
                  Continue</Button>
              </Box>
           </Container>
      </div>
    )
  }
}

export default FormUserDetails