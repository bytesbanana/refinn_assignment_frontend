import { StyledEngineProvider } from '@mui/material';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <div className=' bg-sky-500 w-full h-12 drop-shadow-md shadow-md flex justify-between items-center'>
        <div className='p-2 text-white text-2xl font-bold'>Logo</div>
      </div>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
