import { Outlet } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';
import { Box, Container } from '@mui/material';

function PublicLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container component="main" maxWidth={false} sx={{ flexGrow: 1 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default PublicLayout;
