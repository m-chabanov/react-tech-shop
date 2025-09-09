import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CartGoods from '@/components/cart/CartGoods';
import { selectCart } from '@/store/selectors/cartSelectors';
import CartCustomerForm from '@/components/cart/CartCustomerForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  setQuantity,
  clearCart,
  toggleSelected,
  selectAll,
  removeSelected,
} from '@/store/slices/cartSlice';
import { useEffect } from 'react';
import { syncCartWithLocalStorage } from '@/services/cart';

function Cart() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cart = useSelector(selectCart);

  const handleSetQuantity = (value) => {
    if (value.newQuantity < 1) {
      value.newQuantity = 1;
    }
    dispatch(setQuantity(value));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleToggleSelected = (id) => {
    dispatch(toggleSelected(id));
  };

  const handleSelectAll = () => {
    dispatch(selectAll());
  };

  const handleRemoveSelected = () => {
    dispatch(removeSelected());
  };

  useEffect(() => {
    syncCartWithLocalStorage(cart);
  }, [cart]);

  return (
    <Box sx={{ p: 2 }}>
      {!cart.length ? (
        <Paper
          sx={{
            minHeight: { xs: '80vh' },
            alignContent: { xs: 'center', sm: 'start' },
            p: 1,
          }}
        >
          <Typography variant="h4">{t('cart.emptyCart')}</Typography>
          <Typography variant="h5" sx={{ py: 2 }} color="textSecondary">
            {t('cart.addSomething')}
          </Typography>
        </Paper>
      ) : (
        <Box>
          <CartGoods
            cart={cart}
            setQuantity={handleSetQuantity}
            removeItem={handleRemoveItem}
            clearCart={handleClearCart}
            toggleSelected={handleToggleSelected}
            selectAll={handleSelectAll}
            removeSelected={handleRemoveSelected}
          />
          <CartCustomerForm />
        </Box>
      )}
    </Box>
  );
}

export default Cart;
