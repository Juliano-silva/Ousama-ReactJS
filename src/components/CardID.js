import Comentario from "./Comentários";
import style from './style.module.css'
const CardID = () =>{
  var url_atual = window.location.href;
  const url_modificar = url_atual.substring(29)
  const urlVerdadeira = parseInt(url_modificar)
  var id = JSON.parse(localStorage.ApiAdc)
  var title = JSON.stringify(id[urlVerdadeira].title).replace(/["]/g,'')
  var img = JSON.stringify(id[urlVerdadeira].image).replace(/["]/g,'')
  var img1 = JSON.stringify(id[urlVerdadeira].image1).replace(/["]/g,'')
  var img2 = JSON.stringify(id[urlVerdadeira].image2).replace(/["]/g,'')
  var img3 = JSON.stringify(id[urlVerdadeira].image3).replace(/["]/g,'')
  var tag = JSON.stringify(id[urlVerdadeira].tag).replace(/["]/g,'')
  var description = JSON.stringify(id[urlVerdadeira].textinho).replace(/["]/g,'')
  return(
    <div className={style.CardID}>
      <h1>{title}</h1>
      <img src={img} alt="" />
      <div className={style.CardImg}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <h3>{tag}</h3>
      <p>{description}</p>
      <Comentario/>
    </div>
  )
}
export default CardID