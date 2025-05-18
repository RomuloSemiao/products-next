import LikeButton from "@/app/components/LikeButton";
import { getProduct } from "@/lib/products";
import Link from "next/link";

type Props = {
  params: { id: string }
}

export default function ProductDetails({ params }: Props) {
    const product = getProduct(params.id)

    return (
        <div>
            <h1>{product?.name}</h1>
            <p>{product?.description}</p>
            <p>€ {product?.price},00</p>

            <LikeButton /><br/>
            <Link href="/" >Home</Link>
        </div>
    )
}