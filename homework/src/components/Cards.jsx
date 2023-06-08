import React from 'react';
import Card from './Card';
import estilo from '../css/Cards.module.css';


export default function Cards({cities,onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return(  
  <div className={estilo.contenedor}>

    {cities.map(city => 
      <Card
      temp={city.main.temp}
      max={city.main.temp_max}
      min={city.main.temp_min}
      name={city.name}
      img={city.weather[0].icon}
      onClose={() => onClose(city.id)}
      key = {city.id}
      id = {city.id}
        />
      )}
    
  </div>)
};
