import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/common/common.scss"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
