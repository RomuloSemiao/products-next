'use client'

import { ChangeEvent } from "react";

type Props = {
    onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: Props) {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onSearch(event.target.value)
    }

    return (
        <input 
            type="text" 
            placeholder="Buscar produto..."
            onChange={handleChange}
            className="border-zinc-600 p-2 rounded w-full max-w-md m-6 mx-0"
        />
    )
}