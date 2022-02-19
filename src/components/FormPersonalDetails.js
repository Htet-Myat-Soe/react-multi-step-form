import { AppBar, TextField, Toolbar, Typography, Container, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ArrowBackIosNewRounded } from '@mui/icons-material';

export class FormPersonalDetails extends Component {


    // continue

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


  render() {

    const { values, handleChange } = this.props;

     return (
      <div>
          <Container maxWidth='sm' sx={{ marginTop : '20px' }}>
              <Box>
              <AppBar position="static">
                  <Toolbar variant="dense">
                      <Typography variant="title1" component="h1" >Fill Personal Details</Typography>
                  </Toolbar>
              </AppBar>
              <br/>
              <TextField 
                label="Enter your occupation" 
                variant='outlined' 
                type="text"  
                fullWidth
                defaultValue={values.occupation}
                margin='dense'
                onChange={handleChange('occupation')}  />
              <br/>
              <TextField 
                label="Enter your city" 
                variant='outlined' 
                type="text"  
                fullWidth
                defaultValue={values.city}
                margin='dense'
                onChange={handleChange('city')}  />
              <br/>
              <TextField 
                label="Biography" 
                variant='outlined' 
                type="text"  
                fullWidth
                defaultValue={values.bio}
                margin='dense'
                onChange={handleChange('bio')}  />

                  <Grid container spacing={4} fullWidth>
                        <Grid item>

                        <Button 
                            variant="contained"
                            onClick={this.back}
                            primary={false}
                            startIcon={<ArrowBackIosNewRounded/>}
                            color='secondary'
                        >
                        Prev
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button 
                            variant="contained"
                            onClick={this.continue}
                            primary={false}
                            endIcon={<NavigateNextIcon/>}
                            >
                            Continue</Button>
                        </Grid>
                  </Grid>
              </Box>
           </Container>
      </div>
    )
  }
}

export default FormPersonalDetails