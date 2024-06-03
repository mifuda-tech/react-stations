// DO NOT DELETE

import './App.css'
import React, { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
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
      <header className="header">犬にかんするアプリ</header>
      <a href="https://dog.ceo/dog-api/">「犬の画像を表示するサイトです」</a>
      <img src={dogUrl}></img>
      <button onClick={handleFetch}>更新</button>
    </div>
  )
}
