
import React, { useState } from 'react';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  // VALIDACION DE FORMULARIO
  const validarFormulario = () => {
    let valido = true;
    const mensajeError = "Por favor verifique su información nuevamente"
    if (nombre.trim() === '' || nombre.length < 5) {
      setErrorNombre(mensajeError);
      valido = false;
    } else {
      setErrorNombre('');
    }

    if (email.trim() === '') {
      setErrorEmail(mensajeError);
      valido = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorEmail(mensajeError);
      valido = false;
    } else {
      setErrorEmail('');
    }

    return valido;
  };

  // OCULTAR FORMULARIO UNA VEZ ENVIADO
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const esFormularioValido = validarFormulario();

    if (esFormularioValido) {
      
      console.log('Nombre:', nombre);
      console.log('Email:', email);

      setShow(true)
    }
  };

  return (
    <div>

      {!show &&
        <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            placeholder='Ingrese su nombre'
            onChange={(e) => setNombre(e.target.value)}
          />
          {errorNombre && <p className='error'>{errorNombre}</p>}
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='Ingrese su Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <p className='error'>{errorEmail}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
      }
      
      {show && <h2 className='successful-message'>Gracias {nombre}, te contactaremos cuando antes vía mail</h2>}

    </div>
  );
};

export default Form;
