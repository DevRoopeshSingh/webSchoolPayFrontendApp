import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import LoadingSpinner from './Global/LoadingSpinner';
import { LoadingProvider } from './Global/LoadingContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <BrowserRouter>
          <LoadingSpinner /> 
            <App />
          </BrowserRouter>
        </LoadingProvider>
      </ThemeProvider>
    </React.StrictMode>
);
