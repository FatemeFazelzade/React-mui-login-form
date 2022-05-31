import React from 'react';
import { useState } from 'react';
import "./login.css"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



function Signup() {

 let [name, setName] = useState('');
 let [familyName, setFamilyname] = useState('');
 let [birth, setBirth] = useState(new Date('2014-08-18T21:11:54'));
 let [age, setAge] = useState('');
 let [phoneNumber, setPhonenumber] = useState('');
 let [userName, setUsername] = useState('');
 let [password, setPassword] = useState('');

 //TOAST//
const submitUser = () =>  toast.success("Now you can lig in! have fun!!", {
  position: toast.POSITION.BOTTOM_CENTER
});
const incompleteForm = () =>  toast.error("Please fill in all the information!", {
  position: toast.POSITION.BOTTOM_CENTER
});
 
  const submitForm = (e) => {
    e.preventDefault(); 
    if(name && familyName && birth && age && phoneNumber && userName && password ){
    if (!JSON.parse(window.localStorage.getItem('Information'))) {
    const allInfo= []
    allInfo.push({
      name:{name} ,
      familyName: {familyName} ,
      birth:{birth},
      age:{age},
      phoneNumber:{phoneNumber},
      username:{userName},
      password:{password}
    });
  window.localStorage.setItem('Information',JSON.stringify(allInfo));
  } else {

  const newAllInfo = JSON.parse(window.localStorage.getItem('Information'));
    newAllInfo.push({
      name:{name} ,
      familyName: {familyName} ,
      birth:{birth},
      age:{age},
      phoneNumber:{phoneNumber},
      username:{userName},
      password:{password}
    });
  window.localStorage.setItem('Information',JSON.stringify(newAllInfo));
  };
  submitUser();
    window.location.reload(false);
  } else {
    incompleteForm();
  }
 };


    const avatarStyle={backgroundColor:'#e1b830'}
    const butStyle={backgroundColor:'#e1b830', margin:'1rem 1rem 1rem 3rem',} 
    const handleChange = (newValue) => {
      setBirth(newValue);
    };

    return (
    <React.Fragment> 
    <Grid align='center'>
        <div className="neo-sign">
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
      <TextField label="Name" variant="outlined" required value={name} onChange={(e) => setName(e.target.value)}/>
      <TextField label="Family name" variant="outlined" required value={familyName} onChange={(e) => setFamilyname(e.target.value)} />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date of birth"
          inputFormat="MM/dd/yyyy"
          value={birth}
          onChange={handleChange}
          required
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      <TextField label="Age" type='number' variant="outlined" required value={age} onChange={(e) => setAge(e.target.value)} />
      <TextField label="Phone number" type='tel' variant="outlined" required value={phoneNumber} onChange={(e) => setPhonenumber(e.target.value)} />
      <TextField label="Username" variant="outlined" required value={userName} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Password" type='password' variant="outlined" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <Stack spacing={2} direction="row">
      <Button style={butStyle}  variant="contained" type='submit' onClick={submitForm}>Sing Up</Button>
      <Link  style={{ textDecoration: 'none'}}  to="/Login"> 
      <Button style={butStyle}  variant="contained" type='Button'> Ignore </Button>
      </Link>
      </Stack>
      <Link to="/Login"> Already have an account? Click here! </Link>
    </Box>
        </div>   
        <ToastContainer transition={Zoom}  role="alert"/>
    </Grid>
    </React.Fragment>
    );
}


export default Signup;