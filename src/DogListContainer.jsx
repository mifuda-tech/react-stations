// @ts-check
import React, { useState, useEffect } from 'react'
import DogImage from './Description'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message)
      }, [])
  })

  return (
    <div>
      <DogImage />
      <img src={breeds}></img>
      <button>更新</button>
    </div>
  )
}

export default DogListContainer
