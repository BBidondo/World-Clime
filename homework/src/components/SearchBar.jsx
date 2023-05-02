import React, {useState} from 'react';
import estilo from '../css/SearchBar.module.css';
import logo from "../Assets/wc.png"



export default function SearchBar({onSearch}) {
  // acá va tu código
  const [searchInput,setSearchInput] = useState("");
  const changeHandler = (event) => {
    setSearchInput(event.target.value);
  }


  return (
    
  <div className={estilo.contenedor}>
        <img className={estilo.titulo} src={logo}/>
    <input className={estilo.inputText} type= "text" placeholder='Search for a city!'
      onChange={changeHandler} />  
    <button className={estilo.boton} onClick={() => onSearch(searchInput)}><img src='https://th.bing.com/th/id/R.11f31fbdbe61951b4f85dd7618633183?rik=8esHaEmZbxfTaQ&riu=http%3a%2f%2ficon-icons.com%2ficons2%2f520%2fPNG%2f512%2fMagnifier_icon-icons.com_52024.png&ehk=bxd3uOf%2bLlcSv9l7Fy15AmfkZP10u75K7WVIPedD9v8%3d&risl=&pid=ImgRaw&r=0' className={estilo.img}/></button>
  </div>
  )
};