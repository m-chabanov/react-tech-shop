import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Skeleton,
  Grid,
  Button,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Price from '@/components/ui/Price';

function ProductSmallCard({ product, addToCart, isAlreadyInCart }) {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    navigate('/cart');
  };

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
              pb: 2,
            },
          }}
        >
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
        </CardContent>
      </Box>
      <Grid container sx={{ mb: 2, mt: 0, alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 4 }} sx={{ p: 1 }}>
          <Price price={product.price} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} sx={{ p: 1 }}>
          {isAlreadyInCart(product.id) ? (
            <Button color="success" variant="outlined" onClick={handleGoToCart}>
              <AddShoppingCartIcon /> {t('products.buttons.watchInCart')}
            </Button>
          ) : (
            <Button
              color="success"
              variant="contained"
              onClick={() => addToCart(product)}
            >
              {t('products.buttons.addToCart')}
            </Button>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProductSmallCard;
