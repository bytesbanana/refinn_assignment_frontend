import {
  Alert,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ContactsAPI from '../libs/api/ContactsAPI';

const INIT_FORMDATA = {
  name: '',
  telNo: '',
  lineId: '',
  assetId: '',
  callBackDate: '',
  callBackTime: '',
};

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState(INIT_FORMDATA);
  const [submitted, setSubmiitted] = useState(false);
  const [alert, setAlert] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { callBackTime, ...rest } = formData;

    let newCallBackTime = undefined;
    if (formData?.callBackDate && formData?.callBackTime) {
      newCallBackTime = dayjs(`${formData?.callBackDate} ${formData?.callBackTime}`, 'YYYY-MM-DD HH:mm').toISOString();
    }

    const result = await ContactsAPI.addContact({
      ...rest,
      callBackTime: newCallBackTime,
    });
    if (result) {
      setSubmiitted(true);
    }
    setAlert(result ? 'success' : 'error');
  };

  useEffect(() => {
    if (!router) return;
    if (!router.query?.id) return;
    const { id } = router.query;
    setFormData((prevFormData) => ({
      ...prevFormData,
      assetId: id,
    }));
  }, [router]);

  return (
    <Box>
      {submitted && alert && (
        <Alert severity={alert} className='my-4'>
          {alert === 'success' ? 'Submit success!' : 'Submit failed please try agian'}
        </Alert>
      )}
      {!submitted && (
        <Paper className='flex flex-col gap-2 p-4 rounded-md bg-sky-50'>
          <Typography variant='h3' className='text-xl font-semibold tracking-wide text-slate-600'>
            If you interesting in this asset, Let us contact you
          </Typography>
          <Box component='form' autoComplete='off' className='flex flex-col gap-4' onSubmit={handleFormSubmit}>
            <FormControl>
              <InputLabel htmlFor='name' className='pr-1 bg-sky-50'>
                Your name
              </InputLabel>
              <OutlinedInput
                id='name'
                type='text'
                value={formData?.name}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, name: e.target.value }));
                }}
                required
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor='telno' className='pr-1 bg-sky-50'>
                Tel No.
              </InputLabel>
              <OutlinedInput
                id='telno'
                type='telno'
                value={formData?.telNo}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, telNo: e.target.value }));
                }}
                required
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='lineid' className='pr-1 bg-sky-50'>
                Line ID
              </InputLabel>
              <OutlinedInput
                id='lineid'
                type='text'
                value={formData?.lineId}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, lineId: e.target.value }));
                }}
              />
            </FormControl>

            <FormGroup className='flex flex-row gap-4'>
              <FormControl className='flex-1'>
                <InputLabel htmlFor='callbackDate' className='pr-1 bg-sky-50'>
                  Callback date
                </InputLabel>
                <OutlinedInput
                  id='callbackDate'
                  type='date'
                  value={formData?.callBackDate}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, callBackDate: e.target.value }));
                  }}
                />
              </FormControl>
              <FormControl className='flex-1'>
                <InputLabel htmlFor='callbackDate' className='pr-1 bg-sky-50'>
                  Callback time
                </InputLabel>
                <OutlinedInput
                  id='callbackDate'
                  type='time'
                  value={formData?.callBackTime}
                  onChange={(e) => {
                    setFormData((p) => ({ ...p, callBackTime: e.target.value }));
                  }}
                />
              </FormControl>
            </FormGroup>
            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ContactForm;
