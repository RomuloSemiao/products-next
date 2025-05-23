'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const categories = ['Periféricos', 'Informática', 'Monitores']

export default function CategoryFilter() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function handleCategoryChange(category: string) {
        const params = new URLSearchParams(searchParams)
        params.set('category', category)
        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex flex-row flex-wrap w-full gap-4 m-6 mx-0">
            {categories.map(category => (
                <button
                    key={category}
                    className="px-3 py-1 border border-zinc-600 rounded text-white transition duration-300 ease-in-out hover:bg-zinc-800 hover:cursor-pointer"
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </button>
            ))}

            <button
                className="px-3 py-1 border border-zinc-600 rounded text-white transition duration-300 ease-in-out hover:bg-zinc-800 hover:cursor-pointer"
                onClick={() => router.push(pathname)} // limpa o filtro
            >
                Todos
            </button>
        </div>
    )
}  