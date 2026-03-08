// import { useState } from 'react'

import { useState } from 'react'
import { Products } from './components/Products.jsx'

import { useCategories } from './hooks/useCategories.js'
import { useFilters } from './hooks/useFilters.js'

import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'

function App () {
  const [products] = useState(initialProducts)
  const { categories } = useCategories({ products: initialProducts })

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header categories={categories} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
