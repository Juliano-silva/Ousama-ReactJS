import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import style from './style.module.css'
const List = ({items}) => {
  return(
    <div>
      {items.map((item) => {
      const {id,title} = item;
      return(
        <div key={id} className={style.Card}>
            <Link to={"/CardID/"+id}><h2>{title}</h2></Link>
        </div>
        )
      })}
    </div>
    )
}
const getLocalStorage = () => {
  let ApiAdc = localStorage.getItem("ApiAdc")
  if(ApiAdc){
    return (ApiAdc = JSON.parse(localStorage.getItem("ApiAdc")))
  }else{
    return [];
  }
}
const Card = () => {
  const [ApiAdc,setApiAdc] = useState(getLocalStorage())
  return(
    <div>
      <h2 className={style.TextãoInicial}>Suas Mercadorias</h2>
          <List items={ApiAdc} />
    </div>
  )
}
export default Card
