import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  // FUNCION PARA CAMBIAR DE TEMA
  const changeTheme = () => {
    dispatch({type:'CHANGE_THEME'})
  }

  return (
    <nav className={`${state.darkTheme ? 'NavDarkTheme' : 'NavLigthTeme'}`}>
      <div className='dh'>
        <h2>DH Odonto</h2>
      </div>

      <div className='divNav'>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/favs'}>Favs</Link></li>
          <li><Link to={'contact'}>Contact</Link></li>
        </ul>

        <button className= {` changeTheme ${state.darkTheme ? 'ligthTeme' : 'darkTheme'}`}
          onClick={changeTheme}>
          {`${state.darkTheme ? '🌞' : '🌙'}`}
        </button>
      </div>

    </nav>
  )
}

export default Navbar