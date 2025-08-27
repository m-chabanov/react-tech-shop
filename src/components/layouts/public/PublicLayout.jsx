import { Outlet } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';

function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicLayout;
