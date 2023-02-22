import { React, useState } from "react";
import { connect } from "react-redux";
import {
  searchByName,
  getAllGames,
  volverAhome,
} from "../../Redux/store/actions/actions";
import "./SearchBar.css";
import lupa from "../../img/icone-loupe-gris.png";
import logo from "../../img/white logo.png";
import { Link } from "react-router-dom";


function SearchBar({ searchByName, volverAhome }) {
  const [input, setInput] = useState({
    buscar: "",
  });

  const handleInputChange = function (e) {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = () => {
    searchByName(input.buscar);
    setInput({
      buscar: "",
    });
  };
  const handleOnClickAll = () => {
    volverAhome();
    setInput({
      buscar: "",
    });
  };

  return (
    <div className="Background">
      <div className="searchbar-div">
        <Link to="/">
        <img className="Logo" src={logo} />
        </Link>
        <input
          className="bar-btn"
          name="buscar"
          placeholder="Search"
          onChange={handleInputChange}
          value={input.buscar}
          autoComplete="off"
        ></input>
        {/* <button className="btn" onClick={handleOnClick}>
          {" "}
          <img className="lupaa" src={lupa} />
        </button> */}
      </div>
    </div>
  );
}

export default connect(null, { searchByName, getAllGames, volverAhome })(
  SearchBar
); // conecta el componente con el store
