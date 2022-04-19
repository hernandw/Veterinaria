import React from 'react'

const Registros = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl" >
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
    <span className="font-normal normal-case">Hook</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
    <span className="font-normal normal-case">Williams Hernández</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
    <span className="font-normal normal-case">correo@correo.com</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
    <span className="font-normal normal-case">14 de Abril de 2022</span></p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
    <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nemo ab quisquam cupiditate sed reiciendis itaque laborum, cum consequatur optio officia animi reprehenderit debitis delectus sunt nulla! Impedit, officia illum?</span></p>
  </div>
  )
}

export default Registros
