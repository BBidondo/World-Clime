
import React from 'react';
import estilo from '../css/Card.module.css';   


export default function Card({max,min,name,img,onClose,id}) {
  // acá va tu código
  return (
  <div className={estilo.contenedor}>
    
    <button onClick={()=>onClose(id)} className={estilo.btn}>X</button>  
    <h4>{name}</h4>
    <div className={estilo.infoCont}>
      <div> 
        <h6>Min</h6>
        <p>{min} °C</p>
      </div>   
      <div>
        <h6>Max</h6>
        <p>{max} °C</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt = {""} />
    </div>
  </div>
)
};
