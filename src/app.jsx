import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './compon­ent­/home.js';
import SignIn from './compon­ent­/signIn.js';
import SignUp from './compon­ent­/signUp.js';
import Dashboard from './compon­ent­/dashboard.js';
import BookAppoinment from './compon­ent­/bookAppoinment';
import DocDescription from "./compon­ent­/doc_Description.js";
import Datepicker from './compon­ent­/Schedule.js';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<Home/>}></Route>
      <Route path="/join" element={<SignUp/>}></Route>
      <Route path="/prices" element={<Home/>}></Route>
      <Route path="/login" element={<SignIn/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/bookappointment" element={<BookAppoinment/>}></Route>
      <Route path="/doc_Description" element={<DocDescription/>}></Route>
      <Route path="/Schedule" element={<Datepicker/>}></Route>
      
    </Routes>
  );
}

export default App;
