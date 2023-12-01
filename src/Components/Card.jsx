import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ item }) => {
  const [favorito, setFavorito] = useState(false)

  const { state, dispatch } = useContextGlobal()

  // Función para buscar un FAVORITO por su ID
  const buscarObjetoPorId = (array, idABuscar) => {
    return array.find(objeto => objeto.id === idABuscar);
  };

  useEffect(() => {
    // Llamar a la función para buscar el objeto con el ID específico
    const objetoEncontrado = buscarObjetoPorId(state.favArray, item.id);
    objetoEncontrado && setFavorito(true)
  }, [])

  // FUNCION PARA AGREGAR O ILIMINAR FAVORITO MEDIANTE BOTON
  const addFav = () => {
    setFavorito(!favorito)
    favorito? dispatch({ type: 'DELETE_FAV', payload: item.id }) : dispatch({ type: 'ADD_FAV', payload: item })
    
  }

  return (
    <div className= {`card ${state.darkTheme ? 'cardDark' : 'cardLight'}`}>

      <Link to={'detail/' + item.id}>
        <img src="images/doctor.jpg" alt="odontologo" />
        <h3>{item.name}</h3>
        <h3>{item.username}</h3>
      </Link>

      <button onClick={addFav} className={'favButton'}>{favorito ? '💙' : '🤍'}</button>
    </div>
  );
};

export default Card;

