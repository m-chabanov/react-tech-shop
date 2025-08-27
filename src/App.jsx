import '@/i18n/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicLayout from '@/components/layouts/public/PublicLayout';
import CleanLayout from '@/components/layouts/clean/CleanLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import ProductDetails from '@/pages/ProductDetails';
import Cart from '@/pages/Cart';
import NotFound from '@/pages/NotFound';
import Checkout from '@/pages/Checkout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<PublicLayout />} path="/">
            <Route element={<Home />} index />
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
    </BrowserRouter>
  );
}

export default App;
