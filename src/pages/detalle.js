import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useParams } from 'react-router-dom';
import Personas from '../Personas';

export default function Detalle() {
  const { id } = useParams();
  let personaSeleccionada = Personas.find(Persona => Persona.id === id)
  
  return (
    <div className="text-center place-content-center">
      <p className="font-bold my-4">Nombre</p>
      <p>{personaSeleccionada.nombre} {personaSeleccionada.apellido}</p>
      <p className="font-bold my-4">Edad</p>
      <p>{personaSeleccionada.edad} años</p>
      <p className="font-bold my-4">Email</p>
      <p>{personaSeleccionada.email}</p>
    </div>
  )
}