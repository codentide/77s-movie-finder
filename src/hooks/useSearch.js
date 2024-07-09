import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const isFirstSearch = useRef(true)

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }

    // validations
    if (search === '' || search.trim() === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { error, setSearch }
}
