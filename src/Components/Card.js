import React from "react";
import MilitarImg from '../assets/images/militar-modified.jpg';

function Card() {

  const cardContent = [
    { trabajo: 'Freelance', tiempo: '2 años' , etapa: '2022/Actualidad', empresa: 'Autonomo'  },
    { trabajo: 'Militar', puesto: 'Soldado Primera Clase', tiempo: '6 años' , etapa: '2005/2011', empresa: 'Fuerza Aerea Argentina'  },
    { trabajo: 'Bombero Aeronautico', puesto: 'Jefe de grupo', tiempo: '13 años' , etapa: '2011/Actualidad', empresa: 'Administracion Nacional de Aviacion Civil'  },
    { trabajo: 'Comercio', puesto: 'Atencion al publico', tiempo: '1 año' , etapa: '2004/2005', empresa: 'Panaderia Rosario'  },
  ]

  return (
    <>
       {cardContent.map(card => (
       <div className="card">
              <div className="content" key={card.trabajo}>
                <div className="back">
                  <div className="back-content">
                    <h3>{card.trabajo}</h3>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <img src={MilitarImg} alt='Militar' />
                  </div>

                  <div className="front-content">
                    <h4 className="badge">{card.empresa}</h4>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          <h4>{card.puesto}</h4>
                        </p>
                      </div>
                      <p className="card-footer">{card.etapa}</p>
                      <p className="card-footer">{card.tiempo}</p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            ))}     
   </>
  );
}

export default Card;
