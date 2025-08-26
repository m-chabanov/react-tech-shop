import { useTranslation } from 'react-i18next';

function Checkout() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('checkout.orderCheckout')}</h1>
    </>
  );
}

export default Checkout;
