import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import { reducer } from '../reducers/reducer'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // OBTENER ID DE LA URL
  const { id } = useParams()

  const { state, dispatch } = useContextGlobal()

  const odontologo = state.data

   // LLAMADO A API
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  useEffect(() => {
    axios(url)
      .then(res => dispatch({ type: 'GET_ODONTOLOGO', payload: res.data }))
  }, [])
  
  return (
    <div className='contenido-detail'>
      <div className='cardDetail'>
        <h1>Detail Dentist id: {id}</h1>
        <h3>nombre: {odontologo.name}</h3>
        <h3>Email: {odontologo.email}</h3>
        <h3>Phone: {odontologo.phone}</h3>
        <h3>Website: {odontologo.website}</h3>
      </div>
    </div>
  )
}

export default Detail
