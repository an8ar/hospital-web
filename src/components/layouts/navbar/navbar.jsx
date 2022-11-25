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
import { useGetDepartmentsQuery } from '../../../api/public/public-api'
import { SelectDepartment } from './select-department'

export function NavBar() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const user = useSelector((state) => state.auth.user)
  const { data: departments, isLoading: isDepLoading } = useGetDepartmentsQuery();
  if (isDepLoading) {
    return <h1>Is loading</h1>
  }
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
  function navigateUserPage(){
    navigate(`/${user.role}`)
  }

  return (
    <Box >
      <AppBar position="static" >
        <Toolbar sx={{ display: "flex", }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hospital UMC
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <SelectDepartment departments={departments} ></SelectDepartment>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex", justifyContent: "end" }}>
            {user.username && <Button color="inherit" onClick={navigateUserPage}>{user.username}</Button>}
            {user.role !== null && (
              <Button color="inherit"  onClick={navigateLogout}>
                <Typography >
                  Logout
                </Typography>
              </Button>
            )}
          </Box>



          {user.role === null && (
            <Button color="inherit" onClick={navigateLogin} sx={{ flexGrow: 1 }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
