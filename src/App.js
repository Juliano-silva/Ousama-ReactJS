import React from "react"
import Header from "./components/Header"
import Sidebar from './components/Sidebar'
import Card from "./components/Card"
import CardID from "./components/CardID"
import Login from "./components/Login"
import LoginLista from "./components/LoginLista"
import Adicionar from "./components/Adicionar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import style from './components/style.module.css'
export default function App(){
  return(
    <Router>
      <Header/>
      <Sidebar/>
      <div className={style.Corpo}>
      <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="/CardID/:id" element={<CardID/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/LoginLista" element={<LoginLista/>}/>
        <Route path="/Adicionar" element={<Adicionar/>}/>
      </Routes>
      </div>
    </Router>
  )
}