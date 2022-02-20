import { AppBar, Typography, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/UserAuth";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    
    fontSize: "20px",
    textDecoration: 'none',


  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
    fontSize: "20px",

  },
  toolbar:{
    fontSize: "20px",

    display: 'flex',
    justifyContent:"space-between",
    textDecoration: 'none',

  
  },
  linkItems: {
    fontSize: "20px",
    textDecoration: 'none',
    color:'white'


  },

 
});

function Navbar()
{

  const classes = useStyles();
  const { user, setUser } = useContext(AuthContext);
  const history = useNavigate()
  console.log(user.email, "vwnklds")
  return (
    <>
      <AppBar  position="static" color="secondary" >

        <Toolbar className={classes.toolbar}>
          <Typography variant="h3">
            <Typography className={classes.linkStyle} >
              TrueIdea
            </Typography>
          </Typography>


          <Link className={classes.linkItems} to={'/login'} onClick={() =>
          {
            localStorage.clear('user');
            setUser({
              email: '',
              authenticated: false
            })
            history('/login')
          }} >
            <Typography variant="subtitle2" className={classes.root}>
              {user.email ? "Logout" : "Login"}
            </Typography>
          </Link>

          <Link className={classes.linkItems} to={'/about'}>
            <Typography>
              About Us
            </Typography>
          </Link>

        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
