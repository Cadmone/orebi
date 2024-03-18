import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import { ContextApi } from './components/ContextApi';
import store from '../src/Store'
import { Provider } from 'react-redux'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
      <ContextApi>
      <App />
      </ContextApi>
      </Provider>
    
  
      
      
);
reportWebVitals();
