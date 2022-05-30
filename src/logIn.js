import * as React from 'react';
import "./login.css"
import Grid from '@mui/material/Grid';
import PositionedSnackbar from "./snakBar"
import Avatar from '@mui/material/Avatar';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



function Login() {
    const avatarStyle={backgroundColor:'#e1b830'}
    const butStyle={backgroundColor:'#e1b830',  margin:'2rem 0 2rem 0'}


    return (
    <React.Fragment> 
    <Grid align='center'>
        <div className="neo-log" >
            <Grid >
        <Avatar style={avatarStyle} >
            <LockOpenTwoToneIcon/>
        </Avatar>
        <h2>Log in</h2>
            </Grid>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%', }, }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Username" variant="outlined" required />
      <TextField label="Password" type='password' variant="outlined" required/>
      <FormControlLabel control={<Checkbox color='default' />} label="Remember me" />
      <Button style={butStyle} variant="contained" type='submit'>Log in</Button>
    </Box>
      <Link to="/Signup"> Haven't signed up yet? Click here! </Link>
        </div>   
    </Grid>
    <PositionedSnackbar/>
    </React.Fragment>
    );
}


export default Login;