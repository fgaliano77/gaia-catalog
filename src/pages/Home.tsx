import Hero from '../components/Hero/Hero'
import ProductCard from '../components/ProductCard/ProductCard'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const featured = products.filter((p) => p.featured)

  return (
    <main>
      <Hero />

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-1">Selección</p>
            <h2 className="text-2xl font-light text-gray-900">Destacados</h2>
          </div>
          <Link
            to="/catalogo"
            className="hidden sm:flex items-center gap-1 text-xs tracking-wide text-gray-500 hover:text-gray-900 transition-colors"
          >
            Ver todos <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 text-xs tracking-wide hover:border-gray-500 transition-colors"
          >
            Ver catálogo completo <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Banner strip */}
      <section className="bg-[#f8f6f3] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400">Garantía</p>
          <h2 className="text-2xl font-light text-gray-900">Plata 925 certificada</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Todas nuestras piezas están elaboradas en plata de ley 925 con certificado de autenticidad.
          </p>
        </div>
      </section>
    </main>
  )
}
