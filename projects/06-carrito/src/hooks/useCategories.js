import { useEffect, useState } from 'react'

import { getCategories } from '../services/getAllCategories.js'

export function useCategories ({ products }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const newCategories = getCategories({ products })
    setCategories(newCategories)
  }, [products])

  return { categories }
}
