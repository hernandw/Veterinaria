import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes( {pacientes }) {
  
  return (
          
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? 
        (<>
        <h2 className="font-black text-3xl text-center mb-10">Listado Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
      Administra tus{''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
      {pacientes.map((paciente)=>{
     return <Paciente 
     key={paciente.id}
     paciente={paciente}
     />
   })}
        
        </>)
        
        
        : (<>
          <h2 className="font-black text-3xl text-center mb-10">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
        Comienza agregando pacientes{''} <span className="text-indigo-600 font-bold">y aparecerán aquí</span></p>
        {pacientes.map((paciente)=>{
       return <Paciente 
       key={paciente.id}
       paciente={paciente}
       />
     })}
          
          </>)}
        
      
    
   
   
   
    </div>
  )
}

export default ListadoPacientes