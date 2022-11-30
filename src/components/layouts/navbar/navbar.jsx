import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../../../redux/auth-slice'
// import { useGetDepartmentsQuery } from '../../../api/public/public-api'

export function NavBar() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const user = useSelector((state) => state.auth.user)
  // const { data: departments, isLoading: isDepLoading } = useGetDepartmentsQuery();
 
  function navigateLogout() {
    if (token === '') {
      enqueueSnackbar('You are already logged out!', { variant: 'warning' })
    }
    dispatch(logoutAction())
    navigate('/')
  }
  function navigateLogin() {
    navigate('/login')
  }
  function navigateUserPage() {
    navigate(`/${user.role}`)
  }

  return (
    <Box >
      <AppBar position="static" sx={{ bgcolor: "green" }} >
        <Toolbar sx={{ display: "flex" }}>
          <Typography variant="h6" component="div" sx={{ cursor: "pointer",flexGrow: 1}} onClick={() => navigate('/')}>
            Hospital UMC
          </Typography>
          <Box  sx={{display: "flex", flexDirection: "row"}}>
            {/* <Box sx={{ flexGrow: 1 }}>
            <SelectDepartment departments={departments} ></SelectDepartment>
          </Box> */}
            {user.username && <Button color="inherit" onClick={navigateUserPage}>{user.username}</Button>}
            {user.role !== null && (

              <Typography sx={{ flexGrow: 0 }}>
                <Button color="inherit" onClick={navigateLogout}>
                  Logout
                </Button>
              </Typography>
            )}
            {user.role === null && (
              <Button color="inherit" onClick={navigateLogin} sx={{ flexGrow: 0 }}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
