import { Button, FormControl, FormGroup, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
