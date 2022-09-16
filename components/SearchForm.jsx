import { Button, FormControl, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { ASSET_TYPES } from '../utils/constant';

const PRICE_RANGE_MIN = 100000;
const PRICE_RANGE_MAX = 10000000;
const PRICE_RANGE_STEP = 100000;

const INITIAL_FORM = {
  assetType: 'condo',
  min: '',
  max: '',
};

const SearchForm = ({ className }) => {
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
        <InputLabel id='assetTypeLabel' htmlFor='assetType' className='bg-white pr-1 font-medium'>
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
          value={formData.assetType}
        >
          {ASSET_TYPES.map(({ name, value }) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <InputLabel id='priceRangeLabel' className='bg-white pr-1 font-medium'>
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
          />
          <TextField
            id='minPrice'
            label='Maximum'
            type='number'
            autoComplete='off'
            value={formData.max}
            onChange={(e) => handleNumberInput(e, 'max')}
          />
        </Box>
      </Box>

      <Button variant='contained' className=' bg-blue-500'>
        Search
      </Button>

      <Button variant='contained' className=' bg-red-300 hover:bg-red-700' onClick={() => setFormData(INITIAL_FORM)}>
        Clear filter
      </Button>
    </Box>
  );
};

export default SearchForm;
