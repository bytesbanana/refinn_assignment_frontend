import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import { ASSET_TYPES, INPUT_ASSET_MODE } from '../utils/constant';

const INIT_FORM_DATA = {
  id: null,
  title: '',
  description: '',
  price: null,
  imgUrl: '',
  latitude: null,
  longitude: null,
  assetType: Object.keys(ASSET_TYPES)[0],
};

const DEFAULT_LOC = {
  longitude: 100.492,
  latitude: 13.75,
};

const InputAssetForm = ({
  title = 'Add new asset',
  onFormSubmit,
  mode = INPUT_ASSET_MODE.ADD,
  initFormData = INIT_FORM_DATA,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [formData, setFormData] = useState(initFormData);

  useEffect(() => {
    if (mode === INPUT_ASSET_MODE.EDIT && initFormData) {
      setFormData(initFormData);
      setSelectedLocation({
        latitude: initFormData.latitude,
        longitude: initFormData.longitude,
      });
    }
  }, [mode, initFormData]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    onFormSubmit({
      ...formData,
      ...selectedLocation,
      price: +formData.price,
    });
  };
  return (
    <Box component='form' className='inline-flex justify-center w-full p-4' onSubmit={handleSubmitForm}>
      <FormGroup className='w-[450px] flex gap-4'>
        <Typography variant='h1' className='text-2xl font-semibold'>
          {title}
        </Typography>
        <TextField
          required
          label='Title'
          value={formData.title}
          onChange={(e) =>
            setFormData((p) => ({
              ...p,
              title: e.target.value,
            }))
          }
        />
        <TextField
          label='Description'
          value={formData.description}
          onChange={(e) =>
            setFormData((p) => ({
              ...p,
              description: e.target.value,
            }))
          }
        />
        <FormControl fullWidth>
          <InputLabel id='assetType-select-label'>Type</InputLabel>
          <Select
            labelId='assetType-select-label'
            id='assetType-select'
            value={formData.assetType}
            label='Age'
            onChange={(e) => setFormData((p) => ({ ...p, assetType: e.target.value }))}
          >
            {Object.keys(ASSET_TYPES).map((key) => (
              <MenuItem key={key} value={key}>
                {ASSET_TYPES[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          label='Price'
          type='number'
          value={formData.price}
          onChange={(e) =>
            setFormData((p) => ({
              ...p,
              price: e.target.value,
            }))
          }
        />
        <TextField
          label='Image url'
          type='text'
          value={formData.imgUrl}
          onChange={(e) => setFormData((p) => ({ ...p, imgUrl: e.target.value }))}
        />
        {formData?.imgUrl && (
          <Box className=' w-[450px]'>
            <img src={formData.imgUrl} alt='asset' className='w-full' />
          </Box>
        )}
        <Box className='h-[315px] w-[450px]'>
          <Typography variant='h1' className='py-4 text-lg font-medium text-slate-500'>
            Asset location
          </Typography>
          <Map
            initialViewState={{
              latitude: selectedLocation?.latitude || DEFAULT_LOC.latitude,
              longitude: selectedLocation?.longitude || DEFAULT_LOC.longitude,
              zoom: 14,
            }}
            className='w-full h-full'
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_KEY}
            onClick={(e) => {
              setSelectedLocation({
                latitude: e.lngLat.lat,
                longitude: e.lngLat.lng,
              });
            }}
          >
            {selectedLocation && (
              <Marker {...selectedLocation} offsetLeft={-20} offsetTop={-10}>
                <p role='img' className='text-3xl cursor-pointer animate-bounce'>
                  📍
                </p>
              </Marker>
            )}
          </Map>

          <Button className='w-full mt-4' variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      </FormGroup>
    </Box>
  );
};

export default InputAssetForm;
