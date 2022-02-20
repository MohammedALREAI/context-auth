import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/UserAuth"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { userEmail } from "../userEmail";

function Login()
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = (e) =>
  {
    e.preventDefault();

  
    if (
      email ||(email.trim() === userEmail.email) && password ||
      password.trim() === userEmail.password
    ) {
      console.log("2")

      localStorage.setItem("user", email);
      setUser({
        email,
        authenticated: true,
      });
      history("/");
    }
    return
  };

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 400,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#f42323",
    marginTop: "40px"
  };
  const textStyle = {
    marginTop: "30px"
  };
  const buttonStyle = {
    marginTop: "50px"
  };


  return (
    <form  onSubmit={handleLogin}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Log In </h2>
        </Grid>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="User Name"
          placeholder="Enter User Name"
          fullWidth required
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          style={textStyle}
          label="Password"
          placeholder="Enter Password"
          type="password" marginBottom="20px"
          fullWidth required
        />

        <Button
          style={buttonStyle}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth>
          Log In
        </Button>
      </Paper>
    </form>
  );
};

export default Login;
