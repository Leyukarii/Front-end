import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM corretamente
import './index.css';
import App from './App';
import { router } from '../src/pages/routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
