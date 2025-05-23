'use client';
import { useState } from "react";

import { ProductType } from "@/lib/interface";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

export default function ProductsList({ products }: { products: ProductType[] }) {
    const [query, setQuery] = useState('')

    const filtered = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div>
            <SearchBar onSearch={setQuery} />

            <ul className="flex flex-row flex-wrap w-full gap-8">
                {
                    filtered.length > 0 ? (
                        filtered?.map((product) => (
                            <ProductCard
                                product={product}
                                key={product.id}
                            />
                        ))
                    ) : (
                        <span>Nenhum produto encontrado</span>
                    )
                }

            </ul>
        </div>
    )
}