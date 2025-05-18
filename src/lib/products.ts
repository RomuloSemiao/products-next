import { ProductType } from "@/lib/interface"


export const products: ProductType[] = [
  { id: '1', name: 'Mouse Gamer', description: 'Mouse RGB com alta precisão.', price: 199.00 },
  { id: '2', name: 'Teclado Mecânico', description: 'Switch Blue, iluminação LED.', price: 299.00 },
  { id: '3', name: 'Monitor 144Hz', description: 'Full HD, 1ms.', price: 999.00 },
]

export function getProduct(id: string) {
  return products.find(product => product.id === id)
}