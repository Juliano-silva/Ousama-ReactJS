import React from "react"
import { Link } from "react-router-dom"
import style from './style.module.css'
const changeThemeBtn = document.querySelector("#change-theme");
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
function loadTheme() {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toggleDarkMode();
  }
}
loadTheme();
function Click() {
  toggleDarkMode();
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
};
function Fechar(){
  document.getElementById("Sidebar").style.display = "none"
}
export default function Sidebar(){
    return(
        <div id="Sidebar" className={style.Sidebar}>
          <button type="submit" onClick={Fechar}><img src="https://cdn-icons-png.flaticon.com/512/61/61140.png" alt="" /></button>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/LoginLista">Logins</Link>
            <Link to="/Adicionar">Adicionar</Link>
            <input type="checkbox" onClick={Click} name="change-theme" id="change-theme" />
            <label className={style.CheckBox} for="change-theme"><i class="bi bi-sun">Sun</i><i class="bi bi-moon">Moon</i></label>
        </div>
    )
}