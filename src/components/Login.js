import React,{useState,useEffect} from 'react'
import style from './style.module.css'
function Click(){
    const USuario = document.getElementById("User").value
    const Senha = document.getElementById("Senha").value
    const Foto = document.getElementById("Foto").value
    const gmail = document.getElementById("gmail").value
    let Conteudo = {
        USuario:USuario,
        Senha:Senha,
        Foto:Foto,
        gmail:gmail
    }
    localStorage.setItem("Login",JSON.stringify(Conteudo))

}
const getLocalStorage = () => {
  let LoginLista = localStorage.getItem("LoginLista")
   if(LoginLista){
    return (LoginLista = JSON.parse(localStorage.getItem("LoginLista")))
  }else{
    return [];
  }
}
const Login = () => {
  const [name,setName] = useState("")
  const [senha,setSenha] = useState("")
  const [foto,setFoto] = useState("")
  const [gmail,setGmail] = useState("")
  const [LoginLista,setLoginLista] = useState(getLocalStorage())
  const [editId,setEditID] = useState(null)
  const [isEditing,setIdEditing] = useState(false)
  useEffect(() => {
    localStorage.setItem("LoginLista",JSON.stringify(LoginLista));
  },[LoginLista])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing,foto && isEditing,gmail && isEditing,senha && isEditing){
      setLoginLista(
        LoginLista.map((item) => {
          if (item.id === editId){return {...item,title:name,gmail:gmail,foto:foto,senha:senha}}
        })
        );
        setName("");
        setFoto("");
        setGmail("");
        setSenha("");
        setIdEditing(false);
    }else{
      const newItem = {id: new Date().getTime().toString(),title:name,senha:senha,foto:foto,gmail:gmail};
      setLoginLista([...LoginLista,newItem]);
      setName("");
      setFoto("");
      setGmail("");
      setSenha("");
    }
  };
  var LoginS = localStorage.getItem("Login")
  var Coisas = JSON.parse(LoginS)
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={style.Login}>
            <h2 className={style.TextãoInicial}>Faça seu Login para entrar no Mundo da Terra Média</h2>
            <input id='User' type="text" required placeholder="Nome do User" onChange={(e) => setName(e.target.value)} value={name} />
            <input id='Senha' type="number" required placeholder="Senha do User" onChange={(e) => setSenha(e.target.value)} value={senha} />
            <input id='Foto' type='text' required placeholder='Foto de Perfil' onChange={(e) => setFoto(e.target.value)} value={foto}/>
            <input id='gmail' type='text' required placeholder='Gmail de Perfil' onChange={(e) => setGmail(e.target.value)} value={gmail}/>
            <button onClick={Click} type="submit">
              {isEditing ? "Editar" : "Enviar"}
            </button>
          </div>
          {LoginLista > 0 && (
              <div>
              <h1>{Coisas.USuario}</h1>
              <h2>{Coisas.Senha}</h2>
              <h3>{Coisas.gmail} </h3>
              <img src={Coisas.Foto} alt="" />
            </div>
          )
          }
        </form>

      </section>
    </div>
  )
}
export default Login