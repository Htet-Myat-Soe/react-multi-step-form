import { AppBar, TextField, Toolbar, Typography, Container, Button, Grid, ListItem, ListItemText, List } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { ArrowBackIosNewRounded } from '@mui/icons-material';

export class Confirm extends Component {


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

    const { values : {firstName, lastName, email, occupation, city, bio} } = this.props;

     return (
      <div>
            <Container maxWidth='sm' sx={{ marginTop : '20px' }}>
              <Box >
              <AppBar position="static">
                  <Toolbar variant="dense">
                      <Typography variant="title1" component="h1" >Confirm</Typography>
                  </Toolbar>
              </AppBar>
              <br/>
                <List>
                    <ListItem>
                        <ListItemText primary='First Name' secondary={firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Last Name' secondary={lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Email' secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Occupation' secondary={occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='City' secondary={city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Bio' secondary={bio} />
                    </ListItem>
                </List>

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
                        Confirm & Continue</Button>
                    </Grid>
                </Grid>
              </Box>
           </Container>
      </div>
    )
  }
}

export default Confirm