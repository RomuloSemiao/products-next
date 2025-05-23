import LikeButton from "@/app/components/LikeButton";
import { getProduct } from "@/lib/products";
import Link from "next/link";

type Props = {
  params: { id: string }
}

export default async function ProductDetails({ params }: Props) {
    const product = await getProduct(params.id)

    return (
        <div className="border-zinc-500 bg-zinc-700 h-56 w-56">
            <h1>{product?.name}</h1>
            <p>{product?.description}</p>
            <p>€ {product?.price},00</p>

            <LikeButton /><br/>
            <Link href="/" >Home</Link>
        </div>
    )
}