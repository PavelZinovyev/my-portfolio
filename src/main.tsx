import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './styles/global.scss';

import { ToastProvider } from './feature/Toast/Provider';
import { LangProvider } from './feature/LanguageToggle/Provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </LangProvider>
  </StrictMode>
);
