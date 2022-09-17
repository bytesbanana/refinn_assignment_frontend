import { useRef, useState } from 'react';
import { Box, CircularProgress, Grid, Pagination } from '@mui/material';

import AssetCard from '../components/AssetCard';
import SearchForm from '../components/SearchForm';

export default function HomePage() {
  const t = useRef();
  const [loading, setLoading] = useState(false);

  console.log(t.current?.offsetHeight);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };

  return (
    <Box>
      <SearchForm className='py-4 flex flex-col gap-4 px-4 rounded-b-md border-solid border-[1px] border-t-0 border-slate-200 drop-shadow-md md:hidden' />

      <Box className='flex'>
        <SearchForm className='w-[375px] h-100 hidden md:flex md:flex-col md:gap-2 p-4' />

        <Box className='inline-flex flex-col items-center gap-2 pb-8 w-full min-h-[100px]' ref={t}>
          {loading && (
            <Box className='w-full h-[calc(100vh-48px)] flex justify-center items-center'>
              <CircularProgress className='' size={100} />
            </Box>
          )}
          {!loading && (
            <Box className='py-4 w-full'>
              <Grid container spacing={2}>
                {new Array(25).fill(1).map((v, index) => (
                  <Grid key={`gridItem${index}`} item xs={12} xl={6} className='flex justify-center items-center'>
                    <AssetCard>xs=6 md=8</AssetCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          <Pagination
            count={10}
            color='primary'
            onChange={(event, value) => {
              scrollToTop();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, [1000]);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
