import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LangSwitcher() {
  const { t, i18n } = useTranslation();

  const handleLangSwitcher = (event, newValue) => {
    if (newValue && newValue !== i18n.language) {
      i18n.changeLanguage(newValue);
      localStorage.setItem('language', newValue);
    }
  };
  return (
    <ToggleButtonGroup
      size="small"
      sx={{
        color: 'inherit',
        '& .MuiToggleButton-root': {
          color: 'inherit',
        },
        '& .MuiToggleButton-root.Mui-selected': {
          color: 'inherit',
        },
      }}
      onChange={handleLangSwitcher}
      value={i18n.language}
      exclusive
    >
      <Tooltip title={t('header.tooltips.english')}>
        <ToggleButton value="en" aria-label={t('header.tooltips.english')}>
          {t('header.langSwitcher.english')}
        </ToggleButton>
      </Tooltip>
      <Tooltip title={t('header.tooltips.ukrainian')}>
        <ToggleButton value="ua" aria-label={t('header.tooltips.ukrainian')}>
          {t('header.langSwitcher.ukrainian')}
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
}

export default LangSwitcher;
