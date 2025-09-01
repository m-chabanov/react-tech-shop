import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu as MaterialMenu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LangSwitcher from '@/components/ui/LangSwitcher';

const pages = [
  {
    name: 'products',
    path: '/',
    translationKey: 'header.navigation.products',
  },
  {
    name: 'about',
    path: '/about',
    translationKey: 'header.navigation.about',
  },
];

function Menu() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { t } = useTranslation();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('header.navigation.logoText')}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label={t('header.tooltips.openMenu')}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <MaterialMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography sx={{ textAlign: 'center' }}>
                    {t(page.translationKey)}
                  </Typography>
                </MenuItem>
              ))}
            </MaterialMenu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              justifyContent: 'center',
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('header.navigation.logoText')}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'end',
            }}
          >
            {pages.map((page) => (
              <Button
                component={RouterLink}
                to={page.path}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={(theme) => ({
                  my: 2,
                  mx: 1,
                  color: theme.palette.primary.contrastText,
                  display: 'block',
                })}
              >
                {t(page.translationKey)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, ml: 4 }}>
            <Tooltip title={t('header.navigation.cart')}>
              <IconButton
                aria-label={t('header.tooltips.cart')}
                component={RouterLink}
                to="/cart"
                sx={(theme) => ({ color: theme.palette.primary.contrastText })}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, ml: 4 }}>
            <LangSwitcher />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Menu;
