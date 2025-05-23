import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto w-full flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Link href="/products">Products</Link>
    </div>
  );
}
