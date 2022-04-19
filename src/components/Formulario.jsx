import React from 'react'

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center mb-10">Seguimiento Pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">
      Añade Pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span></p>
    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

      <div className='mb-5'>
        <label htmlFor="name" className='block text-gray-700 uppercase font-bold'>Nombre de Mascota</label>
      <input type="text" id='name' placeholder='Nombre de la Mascota' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
      </div>
      <div className='mb-5'>
        <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
      <input type="text" id='propietario' placeholder='Nombre del Propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
      </div>
      <div className='mb-5'>
        <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
      <input type="email" id='email' placeholder='Email - Contacto Propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
      </div>
      <div className='mb-5'>
        <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Alta</label>
      <input type="date" id='alta'  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
      </div>
      <div className='mb-5'>
        <label htmlFor="description" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
      <textarea name="description" id="description" cols="30" rows="10" placeholder='Describe los síntomas' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
      </div>
      <input type="submit"
      className="bg-indigo-600 w-full p-3 cursor-pointer text-white uppercase font-bold hover:bg-indigo-700 transition-colors" value="Agregar Paciente"  />
    </form>
    
    </div>
  )
}

export default Formulario