import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './main/App';
import './styles.css';
import { Analytics } from '@vercel/analytics/react'; // <-- Import Analytics

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <Analytics />  {/* <-- Add Analytics here */}
    </>
  </React.StrictMode>
);
