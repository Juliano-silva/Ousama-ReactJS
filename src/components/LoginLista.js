import React,{useState,useEffect} from 'react'
import style from './style.module.css'
const List = ({items}) => {
  return(
    <div>
      <h2 className={style.TextãoInicial}>Lista de Companheiros</h2>
      {items.map((item) => {
      const {id,title,senha,foto,gmail} = item;
      return(
        <div key={id} className={style.ListaLogin}>
           <h1>{title}</h1>
           <img src={foto} alt="" />
           <h2>{senha}</h2>
           <h3>{gmail}</h3>
        </div>
        )
      })}
    </div>
    )
}
const getLocalStorage = () => {
  let LoginLista = localStorage.getItem("LoginLista")
  if(LoginLista){
    return (LoginLista = JSON.parse(localStorage.getItem("LoginLista")))
  }else{
    return [];
  }
}
const LoginLista = () => {
  const [ApiAdc,setApiAdc] = useState(getLocalStorage())
  return(
  <List items={ApiAdc} />
  )
}
export default LoginLista
