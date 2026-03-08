import { Filters } from './Filters.jsx'

export function Header ({ categories }) {
  return (
    <header style={{ maxWidth: '1000px' }}>
      <h1>React Shop</h1>
      <Filters categories={categories} />
    </header>
  )
}
