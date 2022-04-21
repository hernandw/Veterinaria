import React from 'react'

const Paciente = ({paciente}) => {
  const {name, propietario, email, alta, sintomas } = paciente
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl" >
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
    <span className="font-normal normal-case">{name}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
    <span className="font-normal normal-case">{propietario}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
    <span className="font-normal normal-case">{email}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
    <span className="font-normal normal-case">{alta}</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
    <span className="font-normal normal-case">{sintomas}</span></p>
  </div>
  )
}

export default Paciente