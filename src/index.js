import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from './store';
import { Spin } from 'antd';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={<Spin />}>
    <App />
    </Suspense>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
