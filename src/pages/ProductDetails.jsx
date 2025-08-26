import { useTranslation } from 'react-i18next';

function ProductDetails() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('productDetails.productDetails')}</h1>
    </>
  );
}

export default ProductDetails;
