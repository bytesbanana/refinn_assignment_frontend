import { Link, StyledEngineProvider } from '@mui/material';
import '../styles/globals.css';
import Router, { useRouter } from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const progress = new ProgressBar({
  size: 10,
  color: '#00ffff',
  className: 'z-100',
  delay: 200,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <StyledEngineProvider injectFirst>
      <div className='flex items-center justify-between w-full h-12 shadow-md bg-sky-500 drop-shadow-md'>
        <Link href='/' className='no-underline'>
          <div className='p-2 text-2xl font-bold text-white cursor-pointer'>Logo</div>
        </Link>
        <ul className='flex gap-4 p-4'>
          {!router.pathname.includes('/admin') && (
            <Link href='/admin' className='no-underline'>
              <li className='text-white list-none cursor-pointer'>Admin</li>
            </Link>
          )}
          {(router.pathname.includes('/admin/assets/') || router.pathname.includes('/admin/contacts/')) && (
            <Link href='/admin/assets' className='no-underline'>
              <li className='text-white list-none cursor-pointer'>Back</li>
            </Link>
          )}
          {router.pathname.startsWith('/assets/') && (
            <Link href='/' className='no-underline'>
              <li className='text-white list-none cursor-pointer'>Back</li>
            </Link>
          )}
        </ul>
      </div>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
