import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { categories } from '../../data/products'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openCart, itemCount } = useCartStore()
  const count = itemCount()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-light tracking-[0.3em] uppercase text-gray-900">
              Gaia
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={cat === 'Todos' ? '/catalogo' : `/catalogo?categoria=${cat}`}
                className={`text-sm tracking-wide transition-colors hover:text-gray-900 ${
                  location.pathname === '/catalogo' ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {cat}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative p-1 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-1 text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4">
          <nav className="flex flex-col gap-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={cat === 'Todos' ? '/catalogo' : `/catalogo?categoria=${cat}`}
                className="text-sm tracking-wide text-gray-600 hover:text-gray-900"
                onClick={() => setMobileOpen(false)}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
