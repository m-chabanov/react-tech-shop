import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

function Checkout() {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h1">{t('checkout.orderCheckout')}</Typography>
      <Button component={RouterLink} to="/" variant="contained">
        To Products
      </Button>
    </Box>
  );
}

export default Checkout;
