import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Home from './Views/Home'
import Identify from "./Views/Identify"
import Dashboard from './Components/Dashboard';

import reportWebVitals from './reportWebVitals';
import './CSS/index.css';
import './CSS/main.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/identify' element={<Identify />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
