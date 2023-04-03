import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'inio', label: 'inicio' },
    { value: 'productos', label: 'Productos' },
    { value: 'sobre', label: 'Sobre Nosotros' }
  ]
export const Selection = ()=> {
  return (
   
    <Select options={options} id='chevron' />

  )
}
