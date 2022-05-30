import * as React from 'react';
import "./login.css"
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';




function App() {

  const navStyle={borderBottom: "solid .1rem white", padding: "1.5rem", backgroundColor:' rgb(255, 255, 255, 0.8)'};
  const footerStyle={borderTop: "solid .1rem white", padding: ".1rem", backgroundColor:' rgb(255, 255, 255, 0.8)'};
  const textStyle={margin:'15rem 0', fontSize: '2rem',};


  return (
    <div>
      <nav style={navStyle}>
      <Grid align='center'>
        <Link className='link' to="/aboutus">About us</Link>     
        <Link className='link' to="/Login">Log in</Link>
        <Link className='link' to="/home">Home</Link>
      </Grid>
      </nav>
      <Grid  align='center'>
        <div className='text'  style={textStyle}>
      <h1>Phey shop</h1>
      <h3>Welcome to Phey shop :)</h3>
      </div>
      </Grid>
      <Grid align='center'>
      <footer style={footerStyle}>
        <p>Hand-crafted with love &#10084;</p>
      </footer>
      </Grid>
    </div>  );
}

export default App;
 