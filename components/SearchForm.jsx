import { Button, FormControl, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { ASSET_TYPES } from '../utils/constant';

const INITIAL_FORM = {
  assetType: null,
  min: '',
  max: '',
  displayPerPage: 10,
};

const SearchForm = ({ className, onSearchClick }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleNumberInput = (e, fieldName) => {
    const { value } = e.target;
    if (parseInt(value, 10) <= 0) {
      return '';
    }

    setFormData({
      ...formData,
      [fieldName]: +value,
    });
  };

  return (
    <Box className={`${className}`}>
      <FormControl fullWidth>
        <InputLabel id='assetTypeLabel' htmlFor='assetType' className='pr-1 font-medium bg-white'>
          Asset type
        </InputLabel>
        <Select
          labelId='assetType'
          id='demo-simple-select'
          label='Age'
          onChange={(e) => {
            const { value } = e.target;
            setFormData({
              ...formData,
              assetType: value,
            });
          }}
          value={formData?.assetType || ' '}
        >
          {Object.keys(ASSET_TYPES).map((key) => (
            <MenuItem key={key} value={key}>
              {ASSET_TYPES[key]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className='flex flex-col gap-2'>
        <InputLabel id='priceRangeLabel' className='pr-1 font-medium bg-white'>
          Price range
        </InputLabel>
        <Box className='flex gap-2'>
          <TextField
            id='minPrice'
            label='Minimum'
            type='number'
            autoComplete='off'
            value={formData.min <= 0 ? '' : formData.min}
            onChange={(e) => handleNumberInput(e, 'min')}
            className='flex-1'
          />
          <TextField
            id='minPrice'
            label='Maximum'
            type='number'
            autoComplete='off'
            value={formData.max}
            onChange={(e) => handleNumberInput(e, 'max')}
            className='flex-1'
          />
        </Box>
      </Box>

      <FormControl fullWidth className='mt-2'>
        <InputLabel id='assetTypeLabel' htmlFor='assetType' className='pr-1 font-medium bg-white'>
          Display asset per page
        </InputLabel>
        <Select
          labelId='assetType'
          id='demo-simple-select'
          label='Display assets per page'
          value={formData.displayPerPage}
          onChange={(e) => {
            const { value } = e.target;
            setFormData({
              ...formData,
              displayPerPage: value,
            });
          }}
        >
          {[10, 20, 50].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant='contained' className='bg-blue-500' onClick={() => onSearchClick(formData)}>
        Search
      </Button>

      <Button variant='contained' className='bg-red-300 hover:bg-red-700' onClick={() => setFormData(INITIAL_FORM)}>
        Clear filter
      </Button>
    </Box>
  );
};

export default SearchForm;
