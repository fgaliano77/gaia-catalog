import { ShoppingBag } from 'lucide-react'
import type { Product } from '../../types'
import { useCartStore } from '../../store/cartStore'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addItem, openCart } = useCartStore()
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const handleAdd = () => {
    addItem(product)
    openCart()
  }

  return (
    <article className="group">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#f8f6f3] aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs px-2 py-1 tracking-wide">
            -{discount}%
          </span>
        )}
        {/* Add to cart overlay — always visible on mobile, hover on desktop */}
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-transparent py-3 text-xs tracking-[0.15em] uppercase text-gray-800 flex items-center justify-center gap-2 transition-transform duration-300 sm:bg-white sm:bg-opacity-95 sm:translate-y-full sm:group-hover:translate-y-0"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Agregar al carrito
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-xs text-gray-400 tracking-wide">{product.material}</p>
        <h3 className="text-sm text-gray-900 font-normal">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">
            ${product.price.toLocaleString('es-UY')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice.toLocaleString('es-UY')}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
