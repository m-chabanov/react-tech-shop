import '@/i18n/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PublicLayout from '@/components/layouts/public/PublicLayout';
import CleanLayout from '@/components/layouts/clean/CleanLayout';
import Products from '@/pages/Products';
import About from '@/pages/About';
import ProductDetails from '@/pages/ProductDetails';
import Cart from '@/pages/Cart';
import NotFound from '@/pages/NotFound';
import Checkout from '@/pages/Checkout';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            <Route element={<PublicLayout />} path="/">
              <Route element={<Products />} index />
              <Route element={<About />} path="about" />
              <Route element={<ProductDetails />} path="product/:id" />
              <Route element={<Cart />} path="cart" />
              <Route element={<NotFound />} path="*" />
            </Route>
            <Route element={<CleanLayout />} path="/checkout">
              <Route element={<Checkout />} index />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
