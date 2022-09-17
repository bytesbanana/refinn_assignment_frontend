import {
  Button,
  FilledInput,
  FormControl,
  FormGroup,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import Map from '../../components/Map';

const AssetDetailsPage = () => {
  return (
    <Box className='inline-flex justify-center w-full'>
      <Box className='flex flex-col justify-center gap-2 p-4 w-[375px] md:w-[600px]  transition-all duration-500'>
        <Typography variant='h1' className='text-2xl font-semibold tracking-wide'>
          Title
        </Typography>
        <Box className='inline-flex justify-center transition-all'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmwroofline.co.uk%2Fwp-content%2Fuploads%2F2019%2F01%2FMock-Tudor-Beams-by-MW-Roofline.jpg&f=1&nofb=1'
            alt='Asset picture'
            className='w-full max-w-[375px] md:max-w-[450px] lg:max-w-[500px] transition-all duration-500'
          />
        </Box>
        <Typography className='font-light indent-4 text-slate-600'>
          Qui reprehenderit labore duis enim. Culpa qui qui duis enim do ut tempor. Fugiat dolor quis excepteur in
          proident dolore. Occaecat est enim sunt sit sint cupidatat sit tempor culpa. Dolore eu voluptate laboris
          commodo ut pariatur. Tempor do reprehenderit labore ad sint mollit labore officia culpa est incididunt tempor
          velit.
        </Typography>
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
                1,000,000 ฿
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' className='text-xs tracking-wide text-slate-400'>
                Listed date
              </Typography>

              <Typography variant='h3' className='text-lg font-semibold tracking-wide text-blue-500'>
                1 month ago.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className='inline-flex flex-col gap-2'>
          <Typography variant='h2' className='text-xl font-semibold tracking-wide'>
            Location
          </Typography>
          <Map fake />
        </Box>
        <Box>
          <Paper className='flex flex-col gap-2 p-4 rounded-md bg-sky-50'>
            <Typography variant='h3' className='text-xl font-semibold tracking-wide text-slate-600'>
              If you interesting in this asset, Let us contact you
            </Typography>
            <Box component='form' autoComplete='off' className='flex flex-col gap-4'>
              <FormControl>
                <InputLabel htmlFor='name' className='pr-1 bg-sky-50'>
                  Your name
                </InputLabel>
                <OutlinedInput id='name' type='text' />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor='telno' className='pr-1 bg-sky-50'>
                  Tel No.
                </InputLabel>
                <OutlinedInput id='telno' type='tel' />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor='lineid' className='pr-1 bg-sky-50'>
                  Line ID
                </InputLabel>
                <OutlinedInput id='lineid' type='text' />
              </FormControl>

              <FormGroup className='flex flex-row gap-4'>
                <FormControl className='flex-1'>
                  <InputLabel htmlFor='callbackDate' className='pr-1 bg-sky-50'>
                    Callback date
                  </InputLabel>
                  <OutlinedInput id='callbackDate' type='date' />
                </FormControl>
                <FormControl className='flex-1'>
                  <InputLabel htmlFor='callbackDate' className='pr-1 bg-sky-50'>
                    Callback time
                  </InputLabel>
                  <OutlinedInput id='callbackDate' type='time' />
                </FormControl>
              </FormGroup>
              <Button variant='contained'>Submit</Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AssetDetailsPage;
