import { Box, Button, FormControl, FormGroup, Grid, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import React from 'react';

import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import dayjs from 'dayjs';

const AssetDetail = ({ asset, disableContactactForm = false}) => (
  <Box className='inline-flex justify-center w-full'>
    <Box className='flex flex-col justify-center gap-2 p-4 w-[375px] md:w-[600px]  transition-all duration-500'>
      <Typography variant='h1' className='text-2xl font-semibold tracking-wide'>
        {asset.title}
      </Typography>
      <Box className='inline-flex justify-center transition-all'>
        <img
          src={`${asset.imgUrl}`}
          alt='Asset picture'
          className='w-full max-w-[375px] md:max-w-[450px] lg:max-w-[500px] transition-all duration-500'
        />
      </Box>
      <Typography className='font-light indent-4 text-slate-600'>{asset.description}</Typography>
      <Box>
        <Typography variant='h2' className='text-xl font-semibold tracking-wide'>
          Detail
        </Typography>
        <Grid container spacing={2} className='px-4 py-2'>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' className='text-xs tracking-wide text-slate-400'>
              Price
            </Typography>
            <Typography variant='h3' className='text-lg font-semibold tracking-wide text-blue-500'>
              {`${new Intl.NumberFormat().format(asset.price)}`} ฿
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' className='text-xs tracking-wide text-slate-400'>
              Listed date
            </Typography>

            <Typography variant='h3' className='text-lg font-semibold tracking-wider text-blue-500'>
              {`${dayjs(asset.createdAt).format('DD/MM/YYYY')}`}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className='inline-flex flex-col gap-2'>
        <Typography variant='h2' className='text-xl font-semibold tracking-wide'>
          Location
        </Typography>
        <Map latitude={asset.latitude} longitude={asset.longitude} />
      </Box>
      {!disableContactactForm && <ContactForm />}
    </Box>
  </Box>
);

export default AssetDetail;
