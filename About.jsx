import React from 'react';
import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Add this import for the Notifications icon
import SettingsIcon from '@mui/icons-material/Settings'; // Add this import for the Settings icon
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../Dash.css';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Bar from '../Charts/Bar';
import { Geochart } from '../Charts/Geochart';
import Piechart from '../Charts/Piechart';
import CountUp from 'react-countup';

export default function About() {
  return (
    <>
    <div className='bgcolor-2'>
      <AppBar position="static" >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 3}}>
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
        <Grid container spacing={2}>
        <Grid item xs={8}> 
        <Stack spacing={2} direction={'row'}>
        <Card sx={{ minWidth: 49+ "%", height: 335 }} className='gradiant-2'>
     
      <CardContent>
        <div>
        <CardMembershipIcon style={{ color: "white"}}/>
        </div>
        <Typography gutterBottom variant="h5" component="div" className='T1' sx={{ color: "#ffffff"}}>
        <CountUp delay={0.2} end={20000} duration={1.5}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1"}}>
        Since Last Week
        </Typography>
        <Typography>
        <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' height={"170px"} width={"170px"} className='img'></img>
        </Typography>
      </CardContent>
      
    </Card>

    <Card sx={{ minWidth: 49+ "%", height: 335 }} className='gradiant-1' >
     
      <CardContent>
      <div>
        <ShoppingBagIcon style={{ color: "white"}}/>
        </div>
        <Typography gutterBottom variant="h5" component="div" className='T1' sx={{ color: "#ffffff"}}>
        <CountUp delay={0.2} end={30000} duration={1.5}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1"}}>
        Since Last Week
        </Typography>
        <Typography>
        <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' height={"170px"} width={"170px"} className='img'></img>
        </Typography>
       </CardContent>
      
    </Card>
    
    <Card sx={{ minWidth: 49+ "%", height: 355 }} className='gradiant-3' >
     <CardContent>
      <Bar sx={{minWidth: 49+ "%", height: 355,}}/>
       </CardContent>
      
    </Card>
    </Stack><br></br>

    <Stack spacing={2} direction={'row'}>

    <Card sx={{ minWidth: 101+ "%", height: 355, }} className='gradiant-4' >
     <CardContent>
      <Geochart/>
       </CardContent>
       </Card>

        
       <Card sx={{ minWidth: 49+ "%", height: 355, marginTop: 10+ "%" }} >
        <CardContent>
        <Piechart/>
      </CardContent>
      
    </Card></Stack>
    </Grid>
    </Grid>
    </Box>
    </Box>
        </div> 
    </>
  );
}
