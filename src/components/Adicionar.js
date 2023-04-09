import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import style from './style.module.css'
const List = ({items,removeItem,editItem}) => {
  return(
    <div>
      {items.map((item) => {
      const {id,title} = item;
      return(
        <div key={id} className={style.AdicionarTitle}>
          <h2>{title}</h2>
          <button onClick={() => editItem(id)}>Editar</button>
          <button onClick={() => removeItem(id)}>Remover</button>
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
const Adicionar = () => {
  const [name,setName] = useState("")
  const [tag,setTag] = useState("")
  const [image,setImage] = useState("")
  const [image1,setImage1] = useState("")
  const [image2,setImage2] = useState("")
  const [image3,setImage3] = useState("")
  const [textinho,setTextinho] = useState("")
  const [ApiAdc,setApiAdc] = useState(getLocalStorage())
  const [editId,setEditID] = useState(null)
  const [isEditing,setIdEditing] = useState(false)
  useEffect(() => {
    localStorage.setItem("ApiAdc",JSON.stringify(ApiAdc));
  },[ApiAdc])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEditing,tag && isEditing,image && isEditing,image1 && isEditing,image2 && isEditing,image3 && isEditing,textinho && isEditing){
      setApiAdc(
        ApiAdc.map((item) => {
          if (item.id === editId){return {...item,title:name,textinho:textinho,image:image,image1:image1,image2:image2,image3:image3,tag:tag}}
        })
        );
        setName("");
        setTag("")
        setImage("");
        setImage1("");
        setImage2("");
        setImage3("");
        setTextinho("");
        setIdEditing(false);
        setEditID(null)
    }else{
      let DadosApi = JSON.parse(localStorage.getItem("ApiAdc"))
      var Dados = JSON.stringify((parseInt(DadosApi.length)))
      var IDs = localStorage.setItem("NumDados",Dados)
      const newItem = {id: localStorage.getItem("NumDados"),title:name,textinho:textinho,image:image,image1:image1,image2:image2,image3:image3,tag:tag};
      setApiAdc([...ApiAdc,newItem]);
      setName("");
      setTag("")
      setImage("");
      setImage1("");
      setImage2("");
      setImage3("");
      setTextinho("");
    }
  };
  const removeItem = (id) => {
    setApiAdc(ApiAdc.filter((item) => item.id !== id));
  };
  const EditItem = (id) => {
    const EditItem = ApiAdc.find((item) => item.id === id);
    setIdEditing(true);
    setEditID(id);
    setName(EditItem.title);
    setImage(EditItem.image);
    setTextinho(EditItem.textinho);
    };
  const clearList = () => {
    setApiAdc([]);
  };
  return(
    <div className={style.Adicionar}>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className={style.TextãoInicial}>Adicionar um item na nossa Taverna como por exemplo (espadas,armaduras,escudos,arcos)</h2>
            <input id='User' type="text" placeholder="Nome da página" required onChange={(e) => setName(e.target.value)} value={name} />
            <input id='Image' type="text" placeholder="Image da página" required onChange={(e) => setImage(e.target.value)} value={image} />
            <input id='ImageC1' type="text" placeholder="Image da página 1" onChange={(e) => setImage1(e.target.value)} value={image1} />
            <input id='ImageC2' type="text" placeholder="Image da página 2" onChange={(e) => setImage2(e.target.value)} value={image2} />
            <input id='ImageC3' type="text" placeholder="Image da página 3" onChange={(e) => setImage3(e.target.value)} value={image3} />
            <input id='Tag' type="text" placeholder="Tags da página" required onChange={(e) => setTag(e.target.value)} value={tag} />
            <textarea id='Texto' placeholder='Descrição da página' required onChange={(e) => setTextinho(e.target.value)} value={textinho}></textarea>
            <button type="submit">
              {isEditing ? "Editar" : "Adicionar"}
            </button>
          </div>
        </form>
        {ApiAdc.length > 0 && (
          <div>
            <List items={ApiAdc} removeItem={removeItem} editItem={EditItem}/>
            <button type='submit' onClick={clearList}>
                Apagar Tudo
              </button>
          </div>
        )}
      </section>
    </div>
  )
}
export default Adicionar
