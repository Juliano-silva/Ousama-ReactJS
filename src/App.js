import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Home from "./components/Home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
export default function App(){
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Card" element={<Card/>}/>
      </Routes>
    </Router>
  )
}