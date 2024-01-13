import React from 'react'
import Layout from './../components/Layout/Layout';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import {ServiceList} from '../data/data'

const  Services = () => {
return(
  <Layout>
   <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {
        ServiceList.map(services => (
            <Card sx={{maxWidth:'390px', display:'flex', m:2}}>
              <CardActionArea>
                <CardMedia sx={{minHeight:'400px'}} component={'img'} src={services.image} alt={services.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {services.name}
                  </Typography>
                  <Typography variant='h6'>
                    {services.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        ) )
      }
   </Box>
  </Layout>
);
};

export default Services;