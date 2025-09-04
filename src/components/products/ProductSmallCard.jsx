import {
  Card,
  Tooltip,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Skeleton,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ProductSmallCard({ product }) {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const type = t(`products.types.${product.additionalInfo.type.name}`);
  const manufacturer = t(
    `products.manufacturers.${product.additionalInfo.manufacturer.name}`
  );
  return (
    <Card
      component={RouterLink}
      to={`product/${product.id}`}
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
      <CardContent sx={{ flexGrow: 1 }}>
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
    </Card>
  );
}

export default ProductSmallCard;
