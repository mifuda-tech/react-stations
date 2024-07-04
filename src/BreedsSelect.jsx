// @ts-check

export const BreedsSelect = ({ breeds, onSelectBreed }) => {
  return (
    <label>
      Select what kind of dog:
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
