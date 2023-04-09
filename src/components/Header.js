import React from "react"
import style from './style.module.css'
function Abir(){
    document.getElementById("Sidebar").style.display = "block"
}
export default function Header(){
    return(
        <div className={style.Header}>
            <button type="submit" onClick={Abir}><img src="https://cdn-icons-png.flaticon.com/512/61/61140.png" alt="" /></button>
            <h1>Ousama</h1>        
        </div>
    )
}