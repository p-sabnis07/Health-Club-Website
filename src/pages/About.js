import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:"center",
          p:2,
          " & h4" : {
            fontWeight:"bold",
            my:2,
            fontSize:"2rem",
          },
          "& p" : {
            textAlign:"justify",
          },
          "@media (max-width:600px)" : {
            mt:0,
            "& h4" : {
              fontSize:"1.5rem",
            },
          }
        }}>
            <Typography variant="h4">
              Tulja Bhavani Fitness Club
            </Typography>
            <p>
            A modern day gymnasium (as gym used to be called way back in Ancient Greece) is a place for indoor physical workout where various equipment and machines are typically used. For some people, a typical gym is a place where you focus on weight lifting and similar activities.
            </p>
            <br />
            <p>
            A modern day gymnasium (as gym used to be called way back in Ancient Greece) is a place for indoor physical workout where various equipment and machines are typically used. For some people, a typical gym is a place where you focus on weight lifting and similar activities.
            </p>
        </Box>
   </Layout>
  );
};

export default About;