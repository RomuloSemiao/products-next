import Link from "next/link";

export default function NotFound() {
    return (
        <div className="container mx-auto w-full">
            <h3 className="text-white text-2xl font-bold m-6 mx-0">404 - Página não encontrada</h3><br/>
            <Link className="bg-zinc-700 rounded-lg p-4 text-white transition- duration-300 ease-in-out hover:bg-zinc-900 hover:text-zinc-400" href="/">Voltar para a Home</Link>
        </div>
    )
}