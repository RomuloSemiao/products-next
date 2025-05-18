import Link from "next/link";

import { ProductType } from "@/lib/interface";

export default function ProductCard({ product }: { product: ProductType }) {
    const { id, name, price} = product;

    return (
        <Link href={`/products/${id}`}>
            <h1>{name}</h1>
            <p>€ {price},00</p>
            Ver Detalhes
        </Link>
    )
}