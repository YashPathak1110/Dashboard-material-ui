import * as React from 'react';
import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  MenuIcon,
  SearchIcon,
  AccountCircle,
  MailIcon,
  NotificationsIcon,
  MoreIcon,
  HomeIcon,
  WorkIcon,
  InfoIcon,
  Brightness4 as DarkModeIcon, // Import the Dark Mode icon
  Brightness7 as LightModeIcon, // Import the Light Mode icon
} from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  // ... (Your existing Search styling)
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // ... (Your existing SearchIconWrapper styling)
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // ... (Your existing StyledInputBase styling)
}));

export default function PrimarySearchAppBar() {
  const [darkMode, setDarkMode] = React.useState(false); // State for dark/light mode

  // Function to toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Other state and event handler functions...

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      // ... (Your existing Menu component for Profile and My account)
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      // ... (Your existing Mobile Menu component for Messages, Notifications, and Profile)
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="home" color="inherit">
              {darkMode ? <LightModeIcon onClick={toggleDarkMode} /> : <DarkModeIcon onClick={toggleDarkMode} />}
            </IconButton>
            <IconButton size="large" aria-label="work" color="inherit">
              <WorkIcon />
            </IconButton>
            <IconButton size="large" aria-label="info" color="inherit">
              <InfoIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
