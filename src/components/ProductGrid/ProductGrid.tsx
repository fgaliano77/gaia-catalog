import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import { products, categories } from '../../data/products'
import type { Category } from '../../types'

export default function ProductGrid() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [active, setActive] = useState<Category>('Todos')

  useEffect(() => {
    const cat = searchParams.get('categoria') as Category | null
    setActive(cat && categories.includes(cat as Category) ? (cat as Category) : 'Todos')
  }, [searchParams])

  const filtered = active === 'Todos' ? products : products.filter((p) => p.category === active)

  const handleCategory = (cat: Category) => {
    setActive(cat)
    if (cat === 'Todos') {
      setSearchParams({})
    } else {
      setSearchParams({ categoria: cat })
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat as Category)}
            className={`px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-colors ${
              active === cat
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-400 self-center">
          {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-20 text-sm">
          No hay productos en esta categoría.
        </p>
      )}
    </section>
  )
}
