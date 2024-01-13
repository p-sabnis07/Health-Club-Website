import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center", bgcolor:"#1A1A19", color:"white", p:3}}>
    <Box sx={{my:3, "& svg":{
        fontSize:"60px",
        cursor:"pointer",
        mr:2,
    },
    "& svg:hover": {
        color:'goldenrod',
        transform:'translateX(5px)',
        transition:'all 400ms',
    },
    }}>
        <IconButton aria-label="instagram.com" onClick={() => window.open('https://www.instagram.com/pranav.sabnis/?next=%2F')} sx={{color:"white"}}>
           <InstagramIcon />
        </IconButton>
        <IconButton aria-label="facebook.com" onClick={() => window.open('https://www.facebook.com/pranav.sabnis.7')} sx={{color:"white"}}>
           <FacebookIcon />
        </IconButton>
        <IconButton aria-label="github.com" onClick={() => window.open('https://github.com/p-sabnis07')} sx={{color:"white"}}>
           <GitHubIcon />
        </IconButton>
    </Box>
        <Typography variant="h5" sx={{"@media (max-width:600px)": {
            fontSize: "1rem",
        },}}>
            All Right Reserved &copy; 
        </Typography>
    </Box>
    </>
  );
};

export default Footer;