import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, TableContainer, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import ManIcon from '@mui/icons-material/Man';
const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:1,ml:1, "& h4" : {fontWeight:"bold", mb:2},}}>
        <Typography variant="h4">
          Contact Now
        </Typography>
        <p>
        A modern day gymnasium (as gym used to be called way back in Ancient Greece) is a place for indoor physical workout where various equipment and machines are typically used. For some people, a typical gym is a place where you focus on weight lifting and similar activities.
        </p>
       </Box>
       <Box sx={{m:3}}>
        <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:"bold", bgcolor:"black",color:"white",}} align="center">
                      Contact Details
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                      <SupportAgentIcon sx={{color:"orange", pt:1,}} />Phone:
                  </TableCell>
                </TableRow>
                <TableRow>
                 <TableCell>
                     <MailIcon sx={{color:"orange", pt:1,}} />Email:
                 </TableCell>
                 </TableRow>
                 <TableRow>
                 <TableCell>
                    <ManIcon sx={{color:"orange", pt:1,}} />Your Weight:
                 </TableCell>
                 </TableRow>
              </TableBody>
            </Table>
        </TableContainer>
       </Box>
    </Layout>
  );
};

export default Contact;