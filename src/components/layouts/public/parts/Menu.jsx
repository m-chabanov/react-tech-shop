import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Menu() {
  const { t } = useTranslation();
  return (
    <div>
      <NavLink to="/" className="top-nav-link">
        {t('navigation.home')}
      </NavLink>
      <NavLink to="/about" className="top-nav-link">
        {t('navigation.about')}
      </NavLink>
      <NavLink to="/cart" className="top-nav-link">
        {t('navigation.cart')}
      </NavLink>
    </div>
  );
}

export default Menu;
