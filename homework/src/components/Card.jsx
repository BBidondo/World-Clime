
import React from 'react';
import estilo from '../css/Card.module.css';   


export default function Card({ max, min, name, img, onClose, id, temp }) {
  return (
    
      <div className={estilo.contenedor}>
        <button onClick={() => onClose(id)} className={estilo.btn}>
          X
        </button>
        <h4>{name}</h4>
        <div className={estilo.infoCont}>
          <div>
            <h1>{Math.round(temp)}°C</h1>
          </div>
          <div className="min-max">
            <h6>Min</h6>
            <p>{Math.round(min)}°C</p>

            <h6>Max</h6>
            <p>{Math.round(max)}°C</p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt={""}
          />
        </div>
      </div>
    
  );
}

