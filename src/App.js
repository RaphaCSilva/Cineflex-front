import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu1 from "./componentes/menu1";
import Menu2 from "./componentes/menu2";
import Menu3 from "./componentes/menu3";
import Header from "./componentes/header"
import Sucesso from "./componentes/sucesso";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Menu1/>} /> 
    <Route path="/sessoes/:idfilme" element={<Menu2/>}/>
    <Route path="/assentos/:idSessao" element={<Menu3/>}/> 
    <Route path="/sucesso" element={<Sucesso/>}/>
    </Routes>
    </BrowserRouter>
  );
}
