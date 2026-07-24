import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] items-center gap-12 py-16 lg:py-0">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
              Nueva colección
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Joyas en<br />
              <span className="italic">plata 925</span>
            </h1>
            <p className="text-gray-500 text-base max-w-md leading-relaxed">
              Piezas artesanales diseñadas para acompañarte. Cada joya cuenta una historia.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm tracking-wide hover:bg-gray-700 transition-colors"
              >
                Ver catálogo
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                to="/catalogo?categoria=Conjuntos"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 text-sm tracking-wide hover:border-gray-500 transition-colors"
              >
                Conjuntos
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-72 lg:h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
              alt="Colección Gaia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 divide-x divide-gray-100">
            {['Anillos', 'Pulseras', 'Cadenas', 'Aros', 'Conjuntos'].map((cat) => (
              <Link
                key={cat}
                to={`/catalogo?categoria=${cat}`}
                className="flex-shrink-0 px-6 py-4 text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
