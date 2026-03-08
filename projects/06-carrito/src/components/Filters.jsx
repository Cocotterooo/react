import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

const categoriesEs = {
  groceries: 'Comestibles',
  smartphones: 'Teléfonos',
  laptops: 'Portátiles',
  fragrances: 'Fragancias',
  skincare: 'Skincare',
  'home-decoration': 'Decoración del hogar'
}

export function Filters ({ categories }) {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handlePriceChange = (event) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: event.target.value
    }))
  }

  const handleCategoryChange = (event) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      category: event.target.value
    }))
  }

  return (
    <form action='' style={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <label htmlFor={minPriceFilterId}>A partir de:</label>
        <input type='range' id={minPriceFilterId} min='0' max='2000' onChange={handlePriceChange} value={filters.minPrice} />
        <span style={{ alignContent: 'center' }}>{filters.minPrice}€</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <label htmlFor={categoryFilterId} style={{ alignContent: 'center' }}>Categoría</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>Todas</option>
          {categories && categories.map(category => {
            return <option key={category} value={category}>{categoriesEs[category]}</option>
          })}
        </select>
        <div />
      </div>
    </form>
  )
}
