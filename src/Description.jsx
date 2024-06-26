// @ts-check

import React, { useState } from 'react'
import DogImage from './Description'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/terrier-tibetan/n02097474_7572.jpg',
  )

  async function fetchData() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    return data.message
  }

  const handleFetch = async () => {
    const newDogUrl = await fetchData()
    setDogUrl(newDogUrl)
  }

  return (
    <div>
      <DogImage />
      <img src={dogUrl}></img>
      <button onClick={handleFetch}>更新</button>
    </div>
  )
}

export default Description
