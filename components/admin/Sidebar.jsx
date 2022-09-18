import { ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar = () => {
  const router = useRouter();

  return (
    <Box className='w-full h-[calc(100vh-48px)] max-w-[250px] shadow-lg'>
      <Link href='/admin/assets'>
        <ListItemButton component='a' selected={router.pathname.includes('/admin/assets')}>
          <ListItemText primary='Manage assets' />
        </ListItemButton>
      </Link>
      <Link href='/admin/contacts'>
        <ListItemButton component='a' selected={router.pathname.includes('/admin/contacts')}>
          <ListItemText primary='Manage contacts' />
        </ListItemButton>
      </Link>
    </Box>
  );
};

export default Sidebar;
