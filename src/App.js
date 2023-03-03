import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Apple from './Pages/card';
import ShopAdetailsAll from './Pages/carddetails';
import Router from "./Routers/router";

function App() {
  return (
    <BrowserRouter>
    {/* <Router /> */}
    <Routes>
        <Route path="/" element={<Apple />} />
        <Route path="/card-details" element={<ShopAdetailsAll />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
