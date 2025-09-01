import { Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        py: 2,
      })}
    >
      <Typography
        variant="body2"
        sx={(theme) => ({ color: theme.palette.primary.contrastText })}
      >
        {t('footer.footerText')}
      </Typography>
    </Paper>
  );
}

export default Footer;
