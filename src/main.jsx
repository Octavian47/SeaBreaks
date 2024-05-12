// index.jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n'; // Import your i18n instance
import App from './App';
import './utils/i18n'; // Not sure why this is imported here, might be unnecessary

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename=''>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
