export interface Product {
  id: string
  sku: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  description: string
  material: string
  featured: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export type Category = 'Todos' | 'Anillos' | 'Aros'
