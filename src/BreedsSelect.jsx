// @ts-check
import React, { useState, useEffect } from 'react'

export const BreedsSelect = () => {
  return (
    <label>
      Select a kind of dog:
      <select onChange={e => onSelectBreed(e.target.value)}>
        {breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </label>
  )
}

export default BreedsSelect
