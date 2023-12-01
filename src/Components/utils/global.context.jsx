import axios from "axios";
import { createContext, useEffect, useReducer, useContext } from "react";
import { reducer } from "../../reducers/reducer";

 const initialState = { darkTheme:false, data:[], favArray:[] }

 const ContextGlobal = createContext();

 const ContextProvider = ({ children }) => {

 const [state, dispatch] = useReducer(reducer, initialState)
 
  // CONEXION CON API
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
      .then(res => dispatch({ type: 'GET_ODONTOLOGOS', payload: res.data}))
      console.log('se llamo API global')
  }, [])

  // AGREGAR FAVORITOS A LOCAL STORAGE
  useEffect(()=>{
    localStorage.setItem('favArray',JSON.stringify(state.favArray))
  },[state.favArray])
  
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
  
};

export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal)
