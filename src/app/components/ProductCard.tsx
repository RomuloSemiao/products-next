import Link from "next/link";

import { ProductType } from "@/lib/interface";

export default function ProductCard({ product }: { product: ProductType }) {
    const { id, name, price} = product;

    return (
        <Link 
            className="border-1 border-zinc-700 bg-zinc-900 h-56 w-56 rounded-lg flex flex-col align-middle justify-center transition duration-300 ease-in-out hover:bg-zinc-700" 
            href={`/products/${id}`}
        >
            <h1>{name}</h1>
            <p>€ {price},00</p>
            Ver Detalhes
        </Link>
    )
}