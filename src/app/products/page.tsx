import { products } from "@/lib/products"
import ProductsList from "../components/ProductList";

export default function Products() {
    return (
        <div>
            <h1>Produtos</h1>

            <ProductsList products={products} />
        </div>
    )
}