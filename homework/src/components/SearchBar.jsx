import React, { useState } from "react";
import estilo from "../css/SearchBar.module.css";
import logo from "../Assets/wc.png";
import Swal from 'sweetalert2';


export default function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      setSearchInput("");
    }
  };
  
  const handleSearch = () => {
  if (searchInput === "") {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please write a city!",
    });
    return;
  }
  onSearch(searchInput);
  setSearchInput("");
};

 

  const changeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className={estilo.contenedor}>
      <img className={estilo.titulo} alt= "" src={logo} />
      <input
        className={estilo.inputText}
        type="text"
        placeholder="Search for a city!"
        onChange={changeHandler}
        onKeyPress={handleKeyPress} // Agrega la función para manejar el evento "keypress"
      />
      <button className={estilo.boton} onClick={handleSearch}>
        <img alt=""
          src="https://th.bing.com/th/id/R.11f31fbdbe61951b4f85dd7618633183?rik=8esHaEmZbxfTaQ&riu=http%3a%2f%2ficon-icons.com%2ficons2%2f520%2fPNG%2f512%2fMagnifier_icon-icons.com_52024.png&ehk=bxd3uOf%2bLlcSv9l7Fy15AmfkZP10u75K7WVIPedD9v8%3d&risl=&pid=ImgRaw&r=0"
          className={estilo.img}
        />
      </button>
    </div>
  );
}
