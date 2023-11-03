import React from 'react';
import Sidenav from '../Components/Sidenav';
import Accordian from '../Components/Accordian';
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
import StorefrontIcon from '@mui/icons-material/Storefront';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Barcharts from '../Charts/Barcharts';
import CountUp from 'react-countup';
export default function Home() {
  return (
    <>
    <div className='bgcolor'>
      <AppBar position="static" sx={{ backgroundColor: "#darkblue", color: "#ffffff"}}>
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
      <Box height={70}>
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
        <Grid item xs={8}> 
        <Stack spacing={2} direction={'row'}>
        <Card sx={{ minWidth: 49+ "%", height: 155 }} className='gradiant-1'>
     
      <CardContent>
        <div>
        <CardMembershipIcon style={{ color: "white"}}/>
        </div>
        <Typography gutterBottom variant="h5" component="div" className='T1' sx={{ color: "#ffffff"}}>
        <CountUp delay={0.2} end={32000} duration={1.5}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1"}}>
        Total Earnings
        </Typography>
      </CardContent>
      
    </Card>

    <Card sx={{ minWidth: 49+ "%", height: 155 }} className='gradiant-2' >
     
      <CardContent>
      <div>
        <ShoppingBagIcon style={{ color: "white"}}/>
        </div>
        <Typography gutterBottom variant="h5" component="div" className='T1' sx={{ color: "#ffffff"}}>
        <CountUp delay={0.2} end={42000} duration={1.5}/>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1"}}>
        Total Orders
        </Typography>
       </CardContent>
      
    </Card></Stack>
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2}>
          
    <Card sx={{ maxWidth: 330, height: 70 }} className='gradiant-2'>
     
     <CardContent>
      <Stack spacing={2} direction="row">
       <StorefrontIcon style={{marginTop: "5%", color: "white"}} />
      <div className='paddingall'>
      <span className='pricetitle'>$203K</span><br></br>
      <span className='pricesubtitle'>Total Income</span>
      </div>
      </Stack>  
     </CardContent>
     </Card>

     <Card sx={{ maxWidth: 345, height: 70 }}>
     <CardContent>
     <Stack spacing={2} direction="row">
       <StorefrontIcon style={{marginTop: "5%"}} />
      <div >
      <span className='pricetitle'>$203K</span><br></br>
      <span className='pricesubtitle'>Total Income</span>
      </div>
      </Stack>
     </CardContent>
     </Card>
          </Stack>
        </Grid>
        </Grid>
        <Box height={20}>

        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ height: 60 + "vh", marginTop: 2 }}>
     <CardContent>
      <Barcharts/>
     </CardContent>
     </Card>
        </Grid>
        <Grid item xs={4}>
        <div className='card-4'>
        <Card sx={{ height: 60 + "vh", marginTop: 2 }} className='card-4'>
     <CardContent>
     <div >
      <span className='pricetitle'> <h2>Popular Product</h2></span>
      </div>
      <Accordian/>
     </CardContent>
     </Card>
     </div>
        </Grid>
        
      </Grid>        
      </Box>
      </Box>
      </Box>
      <Box/>
      </Box>
      </div>
    </>
  );
}
