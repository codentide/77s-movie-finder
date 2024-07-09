import { useSearch } from '../../hooks/useSearch'

// Styles
import './SearchInput.css'

export const SearchInput = ({ name, label }) => {
  const { setSearch, error } = useSearch()

  function handleChange (e) {
    setSearch(e.target.value)
  }

  return (
    <div className='form__input-box'>
      <label className='form__input-label' htmlFor={name}>{label}</label>
      <div className='form__input-search'>
        <input className='search__input' onChange={handleChange} type='text' name={name} id={name} />
        <button disabled={!!error} className='search__btn' type='submit'>Search</button>
      </div>
      {error ? <p className='form__error-msg'>{error}</p> : null}
    </div>
  )
}
