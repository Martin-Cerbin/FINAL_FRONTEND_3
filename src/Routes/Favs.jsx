import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const {state} = useContextGlobal()
  const [favArray, setFavArray] = useState([]);

  // Obtener el array desde localStorage al cargar la página
  useEffect(() => {
    setFavArray(JSON.parse(localStorage.getItem('favArray')));
  }, [state.favArray]);
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>

        {favArray.map(item => <Card item={item} key={item.id+1} />)}
        
      </div>
    </>
  );
};

export default Favs;
