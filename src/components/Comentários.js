import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import style from './style.module.css'
const List = ({items}) => {
  return(
    <div>
      {items.map((item) => {
      const {id,texto,userComentario} = item;
      return(
        <div key={id} className={style.Comentário}>
            <h1>{userComentario} falou:{texto}</h1>
        </div>
        )
      })}
    </div>
    )
}
const getLocalStorage = () => {
  let Comentarios = localStorage.getItem("Comentarios")
   if(Comentarios){
    return (Comentarios = JSON.parse(localStorage.getItem("Comentarios")))
  }else{
    return [];
  }
}
const Comentario = () => {
  const [texto,setTextinho] = useState("")
  const [userComentario,setUserComentarios] = useState("")
  const [Comentarios,setComentarios] = useState(getLocalStorage())
  const [editId,setEditID] = useState(null)
  const [isEditing,setIdEditing] = useState(false)
  useEffect(() => {
    localStorage.setItem("Comentarios",JSON.stringify(Comentarios));
  },[Comentarios])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto && isEditing,userComentario == "Já" && isEditing){
      setComentarios(
        Comentarios.map((item) => {
          if (item.id === editId){return {...item,texto:texto,userComentario:userComentario}}
        })
        );
        setTextinho("");
        setUserComentarios("")
        setIdEditing(false);
    }else{
        let DadosApi = JSON.parse(localStorage.getItem("Comentarios"))
        var Dados = JSON.stringify((parseInt(DadosApi.length)))
        var IDs = localStorage.setItem("NumDados",Dados)
        var User = localStorage.getItem("Login")
        var Login = JSON.parse(User)
        var UserLOG = Login.USuario
        const newItem = {id: localStorage.getItem("NumDados"),texto:texto,userComentario:UserLOG};
      setComentarios([...Comentarios,newItem]);
      setTextinho("");
      setUserComentarios("")
    }
  };
  return(
    <div>
      <h2 className={style.TextãoInicial}>Adicionar algum Conto</h2>
      <section>
        <form onSubmit={handleSubmit}>
            <textarea id='Texto' placeholder='Descrição da página' onChange={(e) => setTextinho(e.target.value)} value={texto}></textarea>
            <button type="submit">
              Enviar
            </button>
        </form>
        {Comentarios.length > 0 && (
          <div>
             <List items={Comentarios} />
          </div>
        )}
      </section>
    </div>
  )
}
export default Comentario

