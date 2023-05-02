import axios from "axios";
import React, {useState} from 'react';
import '../src/css/App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import videoo from '../src/Assets/cielo.mp4';



function App() {
  
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  const [cities,setCities] = useState([]);
  
  const onSearch = (ciudad) => {  
    
    axios
    .get(
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
    .then((response) => {
      setCities(oldCities => [...oldCities,response.data]);
      console.log(cities);
  });
  };
  
  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  };
  
  return (
    
    

    <div className="App">



    <div>
    <Nav onSearch={onSearch}/>
      </div>

      <div>
         <Cards cities={cities} onClose ={onClose} /> 
          
          
   </div>
      
   <video autoPlay loop muted>
        <source src={videoo} type = "video/mp4" />
      </video>
    </div>
  );
}

export default App;

