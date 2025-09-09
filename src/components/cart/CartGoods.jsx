import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import CartProductItem from '@/components/cart/CartProductItem';
import { useTranslation } from 'react-i18next';

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
              <Button
                variant="outlined"
                sx={{ ml: 1 }}
                onClick={removeSelected}
              >
                {t('cart.buttons.removeSelected')}
              </Button>
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
    </Box>
  );
}

export default CartGoods;
