'use client';

import { ProductType } from "@/lib/interface";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }: { products: ProductType[] }) {
    return (
        <div>
            <ul>
                {products?.map((product) => (
                    <ProductCard 
                        product={product}
                        key={ product.id }
                    />
                ))}
            </ul>
        </div>
    )
}