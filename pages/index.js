import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import Button from '@mui/material/Button';
import { ASSET_TYPES } from '../utils/constant';

import AssetCard from '../components/AssetCard';
import SearchForm from '../components/SearchForm';

export default function HomePage() {
  return (
    <Box>
      {/* Navigation bar */}

      <SearchForm className='py-4 flex flex-col gap-4 px-4 rounded-b-md border-solid border-[1px] border-t-0 border-slate-200 drop-shadow-md md:hidden' />

      {/* Search Form */}
      <Box className='flex'>
        <SearchForm className='w-[375px] h-100 hidden md:flex md:flex-col md:gap-2 p-4' />

        <Box className='py-4 w-full'>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={6} className='flex justify-center items-center'>
              <AssetCard>xs=6 md=8</AssetCard>
            </Grid>
            <Grid item xs={12} xl={6} className='flex justify-center items-center'>
              <AssetCard>xs=6 md=4</AssetCard>
            </Grid>
            <Grid item xs={12} xl={6} className='flex justify-center items-center'>
              <AssetCard>xs=6 md=4</AssetCard>
            </Grid>
            <Grid item xs={12} xl={6} className='flex justify-center items-center'>
              <AssetCard>xs=6 md=8</AssetCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
