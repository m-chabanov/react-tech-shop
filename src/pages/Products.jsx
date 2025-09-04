import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/slices/productsSlice';
import { useEffect } from 'react';
import {
  selectProducts,
  selectIsLoading,
} from '@/store/selectors/productsSelectors';
import { Box, Grid } from '@mui/material';
import ProductsGrid from '@/components/products/ProductsGrid';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchProducts());
    }
  }, []);
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
          <ProductsGrid products={products} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
