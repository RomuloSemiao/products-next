import { getProducts } from "@/lib/products"
import ProductsList from "../components/ProductList";
import CategoryFilter from "../components/CategoryFilter";

type Props = {
    searchParams?: {
        category?: string
    }
}

export default async function Products({searchParams}: Props) {
    const products = await getProducts(searchParams?.category)

    return (
        <div className="container mx-auto w-full">
            <h1 className="text-white text-2xl font-bold m-6 mx-0">Produtos</h1>

            <CategoryFilter />
            <ProductsList products={products} />
        </div>
    )
}