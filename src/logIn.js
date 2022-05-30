import * as React from 'react';
import "./login.css"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';




function Login() {

 //STYLES//
 const avatarStyle={backgroundColor:'#e1b830'}
 const butStyle={backgroundColor:'#e1b830',  margin:'2rem 0 2rem 0'} 

//SNAK BAR//
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

 //MODAL WINDOW// 
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);


//CHECK USERS//    
    let currentUsername;
    let currentPassword;

    const checkUser  = (e) => {
      e.preventDefault();

    const dataFromStorage = JSON.parse(window.localStorage.getItem('Information'))
      for (let i = 0; i < dataFromStorage.length - 1 ; i++) {
        if (dataFromStorage.username[i] === currentUsername && dataFromStorage.password[i] === currentPassword) {

          handleOpen();
         
        } else {
console.log ('hi!')
          handleClick({
            vertical: 'bottom',
            horizontal: 'center',
          });

         }
    }
      }


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
      <TextField label="Username" variant="outlined" required value={currentUsername}/>
      <TextField label="Password" type='password' variant="outlined" required value={currentPassword} />
      <FormControlLabel control={<Checkbox color='default' />} label="Remember me" />
      <Button style={butStyle} variant="contained" type='submit' onClick={checkUser}>Log in</Button>
      <Modal
            open={isOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
      <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
          />
    </Box>
      <Link to="/Signup"> Haven't signed up yet? Click here! </Link>
        </div>   
    </Grid>
    </React.Fragment>
    );
}


export default Login;