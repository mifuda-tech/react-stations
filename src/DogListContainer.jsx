// @ts-check
import React, { useState, useEffect } from 'react'
import DogImage from './Description'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(
    'https://images.dog.ceo/breeds/terrier-tibetan/n02097474_7572.jpg',
  )

  async function fetchData() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    return data.message
  }

  const handleFetch = async () => {
    const newDogList = await fetchData()
    return newDogList
  }

  useEffect(() => {
    setBreeds(handleFetch()), [breeds]
  })

  return (
    <div>
      <DogImage />
      <img src={breeds}></img>
      <button onClick={useEffect}>更新</button>
    </div>
  )
}

export default DogListContainer
