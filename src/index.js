import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import { ContextApi } from './components/ContextApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ContextApi>
      <App />
      </ContextApi>
      
);
reportWebVitals();
