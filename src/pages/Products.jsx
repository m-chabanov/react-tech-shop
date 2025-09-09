import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/slices/productsSlice';
import { addToCart } from '@/store/slices/cartSlice';
import { useEffect } from 'react';
import {
  selectProducts,
  selectIsLoading,
} from '@/store/selectors/productsSelectors';
import { findBy } from '@/utils/array';
import { selectCart } from '@/store/selectors/cartSelectors';
import { Box, Grid } from '@mui/material';
import ProductsGrid from '@/components/products/ProductsGrid';
import { syncCartWithLocalStorage } from '@/services/cart';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const cart = useSelector(selectCart);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1, isSelected: false }));
  };

  const isAlreadyInCart = (id) => {
    return findBy(cart, 'id', id);
  };

  useEffect(() => {
    syncCartWithLocalStorage(cart);
  }, [cart]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid
          size={3}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {/* TO REMOVE */}
          Filter will be here
          {/* TODO: Filter component */}
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <ProductsGrid
            products={products}
            isLoading={isLoading}
            addToCart={handleAddToCart}
            isAlreadyInCart={isAlreadyInCart}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
