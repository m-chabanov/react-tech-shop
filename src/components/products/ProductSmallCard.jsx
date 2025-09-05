import {
  Card,
  Tooltip,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Skeleton,
  Grid,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateDiscount } from '../../services/products';

function ProductSmallCard({ product }) {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const type = t(`products.types.${product.additionalInfo.type.name}`);
  const manufacturer = t(
    `products.manufacturers.${product.additionalInfo.manufacturer.name}`
  );
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        ':hover': {
          transition: 'transform 0.2s ease-in-out',
          transform: 'scale(1.1)',
        },
      }}
    >
      <Box
        component={RouterLink}
        to={`/product/${product.id}`}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          pb: 0,
        }}
      >
        <Box sx={{ height: { xs: 200, sm: 300 } }}>
          {!isImageLoaded && (
            <Skeleton variant="rectangular" width="100%" height="100%" />
          )}
          <CardMedia
            component="img"
            image={`/assets/images/${product.additionalInfo.type.name}.png`}
            alt={`${type} ${manufacturer}`}
            sx={{ height: { xs: 200, sm: 300 }, objectFit: 'contain' }}
            onLoad={() => setIsImageLoaded(true)}
          />
        </Box>
        <CardContent
          sx={{
            flexGrow: 1,
            '&:last-child': {
              pb: 0,
            },
          }}
        >
          <Tooltip title={`${type} ${manufacturer} ${product.title}`}>
            <Typography
              sx={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                minHeight: '48px',
              }}
            >
              {`${type} ${manufacturer} ${product.title}`}
            </Typography>
          </Tooltip>
        </CardContent>
      </Box>
      {/* <CardActions disableSpacing> */}
      <Grid container sx={{ mb: 2, mt: 0 }}>
        <Grid size={5}>
          {product.price.hasDiscount ? (
            <Box>
              <Typography
                variant="body2"
                color="error"
                sx={{ textDecoration: 'line-through', color: 'red' }}
              >
                {product.price.currentPrice}
              </Typography>
              <Typography
                variant="body1"
                color="error"
                sx={{ textDecoration: 'none' }}
              >
                {calculateDiscount(product.price)}
              </Typography>
            </Box>
          ) : (
            <Typography
              variant="body1"
              color="error"
              sx={{ textDecoration: 'none' }}
            >
              {product.price.currentPrice}
            </Typography>
          )}
        </Grid>
        <Grid size={7}>
          <Button color="success" variant="outlined">
            Add To Cart
          </Button>
        </Grid>
      </Grid>
      {/* </CardActions> */}
    </Card>
  );
}

export default ProductSmallCard;
