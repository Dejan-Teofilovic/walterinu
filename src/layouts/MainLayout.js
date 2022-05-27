import React from 'react';
import { Outlet } from 'react-router';
import { Box, Stack } from '@mui/material';
import TopNavbar from '../components/TopNavbar';
import Loading from '../components/Loading';
import AlertMessage from '../components/AlertMessage';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <Box className="bg-main" minHeight="100vh">
      <Stack sx={{ minHeight: 'inherit' }}>
        <TopNavbar />
        <Box flexGrow={1}>
          <Outlet />
        </Box>
        <Footer />
      </Stack>
      <Loading />
      <AlertMessage />
    </Box>
  );
}