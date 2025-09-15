import {
  Paper,
  AppBar,
  Box,
  Button,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import CartProductItem from '@/components/cart/CartProductItem';
import { useTranslation } from 'react-i18next';
import { countTotal } from '../../services/cart';

function CartGoods({
  cart,
  setQuantity,
  removeItem,
  clearCart,
  toggleSelected,
  selectAll,
  removeSelected,
}) {
  const { t } = useTranslation();
  return (
    <Box>
      <Grid container>
        <AppBar
          size={12}
          sx={{ textAlign: 'left' }}
          position="relative"
          color="transparent"
        >
          <Toolbar>
            <Grid size={8}>
              <Button variant="outlined" onClick={selectAll}>
                {t('cart.buttons.selectAll')}
              </Button>
              {cart.some((item) => item.isSelected) && (
                <Button
                  variant="outlined"
                  sx={{ ml: 1 }}
                  onClick={removeSelected}
                >
                  {t('cart.buttons.removeSelected')}
                </Button>
              )}
            </Grid>
            <Grid size={4} sx={{ textAlign: 'right' }}>
              <Button onClick={clearCart} variant="contained">
                {t('cart.buttons.clearCart')}
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      {cart.map((item) => (
        <CartProductItem
          toggleSelected={toggleSelected}
          item={item}
          setQuantity={setQuantity}
          removeItem={removeItem}
          key={item.id}
        />
      ))}
      <Paper sx={{ mb: 4, mx: 2, p: 2 }}>
        <Grid container sx={{ textAlign: 'right' }}>
          <Grid size={12}>
            <Typography
              component={'span'}
              sx={{ fontWeight: 700 }}
              variant="h6"
            >
              Total:
            </Typography>
            <Typography variant="h6" component={'span'}>
              {` ${countTotal(cart)}₴`}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default CartGoods;
