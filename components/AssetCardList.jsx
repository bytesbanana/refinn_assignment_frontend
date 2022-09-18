import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AssetCard from './AssetCard';

const NoListBanner = () => (
  <Box className="inline-flex justify-center w-full p-4">
    <Typography variant='h1' className='text-4xl text-slate-400'>
      Have no asset for this filter. please try another search
    </Typography>
  </Box>
);

const AssetCardList = ({ assets }) => {
  return (
    <Box className='w-full py-4'>
      <Grid container spacing={2}>
        {assets.length === 0 && <NoListBanner />}
        {assets.length > 0 &&
          assets.map((asset, index) => (
            <Grid key={asset?.id} item xs={12} md={6} xl={4} className='flex items-center justify-center'>
              <AssetCard asset={asset} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default AssetCardList;
