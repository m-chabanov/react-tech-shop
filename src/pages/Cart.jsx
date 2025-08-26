import { useTranslation } from 'react-i18next';

function Cart() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('cart.cart')}</h1>
    </>
  );
}

export default Cart;
