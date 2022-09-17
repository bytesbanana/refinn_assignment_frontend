import { Link, StyledEngineProvider } from '@mui/material';
import '../styles/globals.css';
import Router, { useRouter } from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  size: 100,
  color: '#c1c8c8',
  className: 'z-50',
  delay: 200,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <StyledEngineProvider injectFirst>
      <div className='flex items-center justify-between w-full h-12 shadow-md bg-sky-500 drop-shadow-md'>
        <Link href='/' className='no-underline'>
          <div className='p-2 text-2xl font-bold text-white cursor-pointer'>Logo</div>
        </Link>
        <ul className='p-4'>
          {router.pathname !== '/admin' && (
            <Link href='/admin' className='no-underline'>
              <li className='text-white list-none cursor-pointer'>For admin</li>
            </Link>
          )}
        </ul>
      </div>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
