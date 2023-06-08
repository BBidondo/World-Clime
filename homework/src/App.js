import axios from "axios";
import React, { useState, useEffect } from "react";
import "../src/css/App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
// import videoo from "../src/Assets/cielo.mp4";
import Clime from "./Assets/Clime.png";

function App() {
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  const [cities, setCities] = useState([]);
  const [ setShowImage] = useState(true);

  useEffect(() => {
    const citiesFromStorage = localStorage.getItem("cities");
    if (citiesFromStorage) {
      setCities(JSON.parse(citiesFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const onSearch = (ciudad) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setCities((oldCities) => [...oldCities, response.data]);
        setShowImage(false);
      });
  };

  const onClose = (id) => {
    setCities((oldCities) => {
      const updatedCities = oldCities.filter((city) => city.id !== id);
      localStorage.setItem("cities", JSON.stringify(updatedCities));
      return updatedCities;
    });
  };

  return (
    <div className="App">
      <div>
        <Nav onSearch={onSearch} />
      </div>
      {cities.length ? (
        <div>
          <Cards cities={cities} onClose={onClose} />
        </div>
      ) : (
        <img src={Clime} alt="" style={{ width: "600px", margin: "3.5rem 0 0 0" }} />
      )}
      {/* <video autoPlay loop muted>
        <source src={videoo} type = "video/mp4" />
      </video> */}
    </div>
  );
}

export default App;
