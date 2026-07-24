import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

const WHATSAPP_NUMBER = '59896254767'

function buildWhatsAppUrl(items: ReturnType<typeof useCartStore.getState>['items'], total: number) {
  const lines = items.map(({ product, quantity }) =>
    `• [${product.sku}] ${product.name} x${quantity} — $${(product.price * quantity).toLocaleString('es-UY')}`
  )
  const message = [
    '¡Hola! Quiero hacer este pedido:',
    '',
    ...lines,
    '',
    `*Total: $${total.toLocaleString('es-UY')}*`,
  ].join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, clearCart } = useCartStore()
  const cartTotal = total()

  function handleCheckout() {
    window.open(buildWhatsAppUrl(items, cartTotal), '_blank')
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="text-sm tracking-[0.2em] uppercase font-normal text-gray-900">
            Carrito {items.length > 0 && `(${items.reduce((s, i) => s + i.quantity, 0)})`}
          </h2>
          <button onClick={closeCart} className="text-gray-500 hover:text-gray-900 transition-colors">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-gray-200" />
              <p className="text-sm text-gray-400">Tu carrito está vacío</p>
              <button
                onClick={closeCart}
                className="text-xs tracking-wide text-gray-600 underline underline-offset-2"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gray-50 space-y-0">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-5">
                  <div className="w-20 h-20 bg-[#f8f6f3] flex-shrink-0 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 leading-snug">{product.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{product.material}</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      ${(product.price * quantity).toLocaleString('es-UY')}
                    </p>
                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-6 h-6 border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs w-4 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-6 h-6 border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-gray-300 hover:text-gray-600 transition-colors self-start mt-1"
                  >
                    <Trash2 size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">
                ${cartTotal.toLocaleString('es-UY')}
              </span>
            </div>
            <p className="text-xs text-gray-400">Envío calculado al finalizar la compra</p>
            <button
              onClick={handleCheckout}
              className="w-full bg-gray-900 text-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-gray-700 transition-colors"
            >
              Finalizar compra por WhatsApp
            </button>
            <div className="flex justify-between text-xs">
              <button
                onClick={closeCart}
                className="text-gray-500 underline underline-offset-2 hover:text-gray-800"
              >
                Seguir comprando
              </button>
              <button
                onClick={clearCart}
                className="text-gray-400 underline underline-offset-2 hover:text-gray-600"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
