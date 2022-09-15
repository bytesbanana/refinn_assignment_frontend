import { Button, FormControl, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { ASSET_TYPES } from '../utils/constant';

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return new Intl.NumberFormat().format(value).toString();
}

const PRICE_RANGE_MIN = 100000;
const PRICE_RANGE_MAX = 10000000;
const PRICE_RANGE_STEP = 100000;

const SearchForm = ({ className }) => {
  const [formData, setFormData] = useState({
    assetType: null,
    priceRange: [1000000, 5000000],
  });
  // const [priceRange, setPriceRange] = useState([1000000, 5000000]);
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
          onChange={(value) =>
            setFormData({
              ...formData,
              assetType: value,
            })
          }
          value={formData.assetType}
        >
          {ASSET_TYPES.map(({ name, value }) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <InputLabel id='priceRangeLabel' className='bg-white pr-1 font-medium'>
        Price range
      </InputLabel>
      <Box className='flex gap-2'>
        <TextField id='minPrice' label='Minimum' type='number' autoComplete='off' />
        <TextField id='minPrice' label='Maximum' type='number' autoComplete='off' />
      </Box>

      <Button variant='contained' className=' bg-blue-500'>
        Search
      </Button>

      <Button variant='contained' className=' bg-red-300 hover:bg-red-700'>
        Clear filter
      </Button>
    </Box>
  );
};

export default SearchForm;
