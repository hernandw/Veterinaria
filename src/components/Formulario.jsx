import React, { useState } from 'react'
import Error from './Error';

function Formulario({pacientes, setPacientes}) {
const [name, setName] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [alta, setAlta] = useState('');
const [sintomas, setSintomas] = useState('');
const [error, setError] = useState(false);

const getId = () =>{
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36)

  return random + fecha
}

const handleSubmit = e =>{
  e.preventDefault();

  //Validación del formulario
  if([name, propietario, email, alta, sintomas].includes('')){
    console.log('Hay al menos un campo vacío');
    setError(true);
    return;
  }
  setError(false);

  //Crear Pacientes
  const objetoPacientes = {
    name, 
    propietario, 
    email, 
    alta, 
    sintomas,
    id: getId()
  }
  
  setPacientes([...pacientes, objetoPacientes]);
  //Reiniciar Formulario
  setName('');
  setPropietario('');
  setEmail('');
  setAlta('');
  setSintomas('');
}
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center mb-10">Seguimiento Pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10 ">
      Añade Pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span></p>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      {error && <Error><p>Todos los campos son obligatorios</p></Error> }
      <div className='mb-5'>
        <label htmlFor="name" className='block text-gray-700 uppercase font-bold'>Nombre de Mascota</label>
      <input type="text" id='name' placeholder='Nombre de la Mascota' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
      value={name}
      onChange={ e => setName(e.target.value)}
      />
      
      </div>
      <div className='mb-5'>
        <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
      <input type="text" id='propietario' placeholder='Nombre del Propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
      value={propietario}
      onChange={ e => setPropietario(e.target.value)}
      />
      </div>
      <div className='mb-5'>
        <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
      <input type="email" id='email' placeholder='Email - Contacto Propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
      value={email}
      onChange={ e => setEmail(e.target.value)}
      />
      </div>
      <div className='mb-5'>
        <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
      <input type="date" id='alta'  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
      value={alta}
      onChange={ e => setAlta(e.target.value)}
      />
      </div>
      <div className='mb-5'>
        <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
      <textarea name="sintomas" id="sintomas" cols="30" rows="10" placeholder='Describe los síntomas' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
      value={sintomas}
      onChange={ e => setSintomas(e.target.value)}
      ></textarea>
      </div>
      <input type="submit"
      className="bg-indigo-600 w-full p-3 cursor-pointer text-white uppercase font-bold hover:bg-indigo-700 transition-colors" value="Agregar Paciente"  />
    </form>
    
    </div>
  )
}

export default Formulario