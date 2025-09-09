import { Box, Grid, Skeleton } from '@mui/material';
import ProductSmallCard from '@/components/products/ProductSmallCard';

const skeletonGridsCount = 12;

function ProductsGrid({ products, isLoading, addToCart, isAlreadyInCart }) {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {isLoading
          ? Array.from(new Array(skeletonGridsCount)).map((item, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width="100%"
                  sx={{ height: { xs: 200, sm: 300 } }}
                />
                <Skeleton
                  variant="body1"
                  animation="wave"
                  width="90%"
                  sx={{ my: 1 }}
                />
                <Skeleton
                  variant="body1"
                  animation="wave"
                  width="70%"
                  sx={{ my: 1 }}
                />
              </Grid>
            ))
          : products.map((product) => (
              <Grid size={{ xs: 12, sm: 4 }} key={product.id}>
                <ProductSmallCard
                  product={product}
                  addToCart={addToCart}
                  isAlreadyInCart={isAlreadyInCart}
                />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}

export default ProductsGrid;
