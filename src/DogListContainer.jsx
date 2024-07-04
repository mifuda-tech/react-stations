// @ts-check
import React, { useState, useEffect } from 'react'
import DogImage from './Description'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(
    'https://images.dog.ceo/breeds/terrier-tibetan/n02097474_7572.jpg',
  )

  useEffect(() => {
    async function fetchBreeds() {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      setBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  }, [])

  const [selectedBreed, setSelectedBreed] = useState()

  return (
    <div>
      <DogImage />
      <BreedsSelect breeds={breeds} onSelectBreed={setSelectedBreed} />
    </div>
  )
}

export default DogListContainer
