import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './compon­ent­/home.js';
import SignIn from './compon­ent­/signIn.js';
import SignUp from './compon­ent­/signUp.js';
import Dashboard from './compon­ent­/dashboard.js';




function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<Home/>}></Route>
      <Route path="/join" element={<SignUp/>}></Route>
      <Route path="/prices" element={<Home/>}></Route>
      <Route path="/login" element={<SignIn/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  );
}

export default App;
