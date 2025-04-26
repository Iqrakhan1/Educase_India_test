// App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/components/Home';
import Login from './assets/components/Login';
import SignUp from './assets/components/SignUp';
import Account from './assets/components/Account';
import MainLayout from './assets/components/MainLayout';



const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
