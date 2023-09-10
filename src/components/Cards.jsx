import { useState } from "react";
import "../styles/card.css";

export const Cards = ({ image, title, description, price, handleAdd, handleDelete }) => {
  const [added, setAdded] = useState(false);

  const clickDelete = () => {
    handleDelete()
    setAdded(false);
  };
  const clickAdd = () => {
    handleAdd()
    setAdded(true);
  };

  return (
    <div className="tarjeta" >
      <img src={image} alt={title} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>
        {added ? (
          <button type="button" className="boton-quitar" onClick={clickDelete}>
            Eliminar
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={clickAdd}>
            Agregar
          </button>
        )}
      </div>
    </div>
  );
};
