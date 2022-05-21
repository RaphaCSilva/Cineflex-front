import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Component, useState} from "react";
import Menu1 from "./componentes/menu1";
import Menu2 from "./componentes/menu2";
import Menu3 from "./componentes/menu3";
import Header from "./componentes/header"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Menu1/>} /> 
    <Route path="/sessoes/:idfilme" element={<Menu2/>}/>
    <Route path="/assentos" element={<Menu3/>}/> 

    </Routes>
    </BrowserRouter>
  );
}
