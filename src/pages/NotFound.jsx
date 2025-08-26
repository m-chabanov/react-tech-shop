import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('notFound.404NotFound')}</h1>
    </>
  );
}

export default NotFound;
