import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/auth-slice';
import { useAuth } from '../../hooks/use-auth';

export function NavBar() {
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.auth.token)
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {user, isLoggedIn} = useAuth();

  function navigating() {
    if (token==='') {
      enqueueSnackbar("You are already logged out!", { variant: 'warning' });
    }
    dispatch(logoutAction());
    navigate('/login');
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hospital UMC
          </Typography>
          {
           user && <p>{user.username}</p>
          }
          {isLoggedIn && <Button color="inherit" onClick={navigating
           }>Logout</Button>} 
        </Toolbar>
      </AppBar>
    </Box>
  );
}