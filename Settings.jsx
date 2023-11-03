import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Add this import for the Notifications icon
import SettingsIcon from '@mui/icons-material/Settings'; // Add this import for the Settings icon
import Linechart from '../settings/linechart';
import DataTable from '../settings/DataTable';
export default function Settings() {
  return (
    <>
    <div className='bgcolor-3'>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1,marginLeft: 3}}>
            Dashboard
          </Typography>
          <IconButton size="large" color="inherit" aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
          <IconButton size="large" color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton size="large" color="inherit" aria-label="account of current user">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Card sx={{ minWidth: 90+ "%", height: 385, }} className='gradiant-4' >
     <CardContent>
      <Linechart/>
       </CardContent>
       </Card><br></br>

        
       <Card sx={{ minWidth: 90+ "%", height: 355, backgroundColor:"gray" }}  >
     <CardContent>
      
      <DataTable />
    
       </CardContent>
       </Card>
        </Box>
      </Box>
      </div>
    </>
  );
}
