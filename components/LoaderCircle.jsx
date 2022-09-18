import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const LoaderCircle = () => (
  <Box className='w-full h-[calc(100vh-48px)] flex justify-center items-center'>
    <CircularProgress className='' size={100} />
  </Box>
);

export default LoaderCircle;
