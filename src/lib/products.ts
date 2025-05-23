import { ProductType } from "@/lib/interface"

export const products: ProductType[] = [
  { id: '1', name: 'Mouse Gamer', description: 'Mouse RGB com alta precisão.', price: 199.00, category: "Periféricos" },
  { id: '2', name: 'Teclado Mecânico', description: 'Switch Blue, iluminação LED.', price: 299.00, category: "Periféricos" },
  { id: '3', name: 'Monitor 144Hz', description: 'Full HD, 1ms.', price: 999.00, category: "Monitores" },
  { id: '4', name: 'Notebook Lenovo', description: 'Ryzen 7, 144hz 2k', price: 8999, category: "Informática" },
]

export async function getProducts(category?: string): Promise<ProductType[]> {
  await new Promise(resolve => setTimeout(resolve, 500))

  if (category) {
    return products.filter((product: ProductType) => product.category === category)
  }

  return products;
}

export async function getProduct(id: string) {
  await new Promise(resolve => setTimeout(resolve, 3000))

  return products[Number(id)];
}