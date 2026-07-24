import type { Product } from '../types'

import aroCorazonZirconia from '../assets/aro-corazon-zirconia.png'
import aroLagrimaZafiro from '../assets/aro-lagrima-zafiro.png'
import aroCorazonPave from '../assets/aro-corazon-pave.png'
import aroTrianguloFucsia from '../assets/aro-triangulo-fucsia.png'
import aroSolitarioRojo from '../assets/aro-solitario-rojo.png'
import aroSolitarioDiamante from '../assets/aro-solitario-diamante.png'
import aroAguamarina from '../assets/aro-aguamarina.png'
import anilloGrabado from '../assets/anillo-grabado.png'
import anilloSelloGranate from '../assets/anillo-sello-granate.png'

export const products: Product[] = [
  {
    id: '1',
    sku: 'ARO-001',
    name: 'Aros Corazón con Zirconias',
    category: 'Aros',
    price: 500,
    image: aroCorazonZirconia,
    description: 'Aros de tuerca en plata con piedra central en forma de corazón y zirconias redondas en la base. Diseño romántico y elegante.',
    material: 'Plata 925 con zirconias',
    featured: true,
  },
  {
    id: '2',
    sku: 'ARO-002',
    name: 'Aros Lágrima Zafiro',
    category: 'Aros',
    price: 500,
    image: aroLagrimaZafiro,
    description: 'Aros de tuerca con piedra en corte pera color zafiro azul intenso. Montura en plata con garras delicadas.',
    material: 'Plata 925 con zirconia azul',
    featured: true,
  },
  {
    id: '3',
    sku: 'ARO-003',
    name: 'Aros Corazón Pavé',
    category: 'Aros',
    price: 500,
    image: aroCorazonPave,
    description: 'Aros de tuerca en forma de corazón calado, cubiertos de zirconias en pavé. Brillantes y delicados.',
    material: 'Plata 925 con zirconias',
    featured: false,
  },
  {
    id: '4',
    sku: 'ARO-004',
    name: 'Aros Triángulo Fucsia',
    category: 'Aros',
    price: 500,
    image: aroTrianguloFucsia,
    description: 'Aros de tuerca con piedra triangular en tono fucsia vibrante. Montura en plata con tres garras redondas.',
    material: 'Plata 925 con zirconia fucsia',
    featured: true,
  },
  {
    id: '5',
    sku: 'ARO-005',
    name: 'Aros Solitario Rojo',
    category: 'Aros',
    price: 500,
    image: aroSolitarioRojo,
    description: 'Aros de tuerca con piedra redonda en color rojo rubí. Montura en plata con cuatro garras curvas.',
    material: 'Plata 925 con zirconia roja',
    featured: false,
  },
  {
    id: '6',
    sku: 'ARO-006',
    name: 'Aros Solitario Diamante',
    category: 'Aros',
    price: 500,
    image: aroSolitarioDiamante,
    description: 'Aros de tuerca clásicos con piedra redonda blanca de gran brillo. Corte brillante en montura de plata con cuatro garras.',
    material: 'Plata 925 con zirconia blanca',
    featured: true,
  },
  {
    id: '7',
    sku: 'ARO-007',
    name: 'Aros Aguamarina con Pavé',
    category: 'Aros',
    price: 500,
    image: aroAguamarina,
    description: 'Aros de tuerca con piedra central en aguamarina sobre base curva en plata con zirconias blancas en pavé.',
    material: 'Plata 925 con zirconia aguamarina',
    featured: false,
  },
  {
    id: '8',
    sku: 'ANI-001',
    name: 'Anillo Sello Grabado',
    category: 'Anillos',
    price: 500,
    image: anilloGrabado,
    description: 'Anillo sello minimalista con superficie plana para grabado personalizado. Ideal para regalar con nombre o fecha especial.',
    material: 'Plata 925',
    featured: true,
  },
  {
    id: '9',
    sku: 'ANI-002',
    name: 'Anillo Sello Granate',
    category: 'Anillos',
    price: 500,
    image: anilloSelloGranate,
    description: 'Anillo sello en plata con piedra cuadrada color granate engarzada en montura dorada. Diseño clásico y masculino.',
    material: 'Plata 925 con detalles dorados y zirconia granate',
    featured: true,
  },
]

export const categories = ['Todos', 'Anillos', 'Aros'] as const
