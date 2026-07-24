import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-xl font-light tracking-[0.3em] uppercase">Gaia</span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Joyas artesanales en plata 925. Diseñadas para acompañarte cada día.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors tracking-wide">IG</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors tracking-wide">FB</a>
            </div>
          </div>

          {/* Categorías */}
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.25em] uppercase text-gray-400">Categorías</h3>
            <ul className="space-y-2">
              {['Anillos', 'Pulseras', 'Cadenas', 'Aros', 'Conjuntos'].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/catalogo?categoria=${cat}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.25em] uppercase text-gray-400">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>hola@gaiajoyas.com</li>
              <li>WhatsApp: +598 099 000 000</li>
              <li className="pt-2 text-gray-400 text-xs leading-relaxed">
                Lun–Vie 9:00–18:00<br />Sáb 10:00–14:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Gaia Joyas. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Política de privacidad</a>
            <a href="#" className="hover:text-gray-300">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
