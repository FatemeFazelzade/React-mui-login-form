import * as React from 'react';
import "./login.css"
import Grid from '@mui/material/Grid';
import PositionedSnackbar from "./snakBar"
import Avatar from '@mui/material/Avatar';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link } from "react-router-dom";



function Signup() {
    const avatarStyle={backgroundColor:'#e1b830'}
    const butStyle={backgroundColor:'#e1b830', margin:'2rem 0 2rem 0'}
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
    <React.Fragment> 
    <Grid align='center'>
        <div className="neo-sign" >
            <Grid >
        <Avatar style={avatarStyle}  sx={{ width: 44, height: 44 }}>
            <LockOpenTwoToneIcon/>
        </Avatar>
        <h2>Sign Up</h2>
            </Grid>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90%', }, }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" required />
      <TextField id="outlined-basic" label="Family name" variant="outlined" required />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date of birth"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          required
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      <TextField id="outlined-basic" label="Age" type='number' variant="outlined" required />
      <TextField id="outlined-basic" label="Phone number" type='tel' variant="outlined" required />
      <TextField id="outlined-basic" label="Username" variant="outlined" required />
      <TextField id="outlined-basic" label="Password" type='password' variant="outlined" required/>
      <Button style={butStyle}  variant="contained" type='submit' >Sing Up</Button>
      <Link to="/Login"> Already have an account? Click here! </Link>

    </Box>
        </div>   
    </Grid>
    <PositionedSnackbar/>
    </React.Fragment>
    );
}


export default Signup;