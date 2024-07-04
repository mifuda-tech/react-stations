// @ts-check
import React, { useState, useEffect } from 'react'
import DogImage from './Description'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState()

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        setBreeds(Object.keys(data.message))
      }, [])
  })

  const [selectedBreed, setSelectedBreed] = useState('')

  return (
    <div>
      <DogImage />
      <BreedsSelect breeds={breeds} onSelectBreed={setSelectedBreed} />
    </div>
  )
}

export default DogListContainer
