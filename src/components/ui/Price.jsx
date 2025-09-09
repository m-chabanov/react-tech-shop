import { Box, Typography } from '@mui/material';
import { calculateDiscount } from '@/services/products';

function Price({ price }) {
  return (
    <Box sx={{ '& .MuiTypography-body1': { fontWeight: '700' } }}>
      {price.hasDiscount ? (
        <Box>
          <Typography
            variant="body2"
            color="error"
            sx={{ textDecoration: 'line-through', color: 'red' }}
          >
            {price.currentPrice}₴
          </Typography>
          <Typography
            variant="body1"
            color="error"
            sx={{ textDecoration: 'none' }}
          >
            {calculateDiscount(price)}₴
          </Typography>
        </Box>
      ) : (
        <Typography
          variant="body1"
          color="error"
          sx={{ textDecoration: 'none' }}
        >
          {price.currentPrice}₴
        </Typography>
      )}
    </Box>
  );
}

export default Price;
