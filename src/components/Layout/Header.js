import React, {useState} from 'react'
import { AppBar, Box, Typography, Toolbar, IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink} from 'react-router-dom';
import "../../styles/HeaderStyles.css";

const  Header = () =>    {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle service click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //service drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
        <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow: 1, my:2}}>
        <FitnessCenterIcon />
           Tulja Bhavani Fitness Club
       </Typography>
       <Divider />
          <ul className='mobile-navigation'>
             <li>
               <NavLink activeClassName="active" to={'/'}>Home</NavLink>
             </li>
             <li>
               <NavLink  to={'/services'}>Services</NavLink>
             </li>
            <li>
               <NavLink to={'/about'}>About</NavLink>
           </li>
           <li>
              <NavLink to={'/contact'}>Contact</NavLink>
          </li>
        </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component = {'nav'} sx={{bgcolor: "black"}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2,display: {sm: "none"},}}
          onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow: 1,display:{sm: "flex"}}}>
            <FitnessCenterIcon />
            Tulja Bhavani Fitness Club
          </Typography>
          <Box sx = {{display:{xs: 'none', sm: 'block'}}}>
            <ul className='navigation-menu'>
              <li>
                <NavLink activeClassName="active" to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/services'}>Services</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
              </li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display: {xs: 'block', sm: 'none' }, "& .MuiDrawer-paper":{boxSizing:"border-box",width: "240px",}}}>
              {drawer}
            </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;