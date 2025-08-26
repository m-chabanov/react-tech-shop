import '@/i18n/index';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation();

  return <div className="app"></div>;
}

export default App;
