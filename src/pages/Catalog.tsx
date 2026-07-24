import ProductGrid from '../components/ProductGrid/ProductGrid'

export default function Catalog() {
  return (
    <main>
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-1">Gaia</p>
          <h1 className="text-2xl font-light text-gray-900">Catálogo</h1>
        </div>
      </div>
      <ProductGrid />
    </main>
  )
}
