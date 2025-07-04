import ReactDOM from 'react-dom/client';
import Game from './Game.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game" element={<Game />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);