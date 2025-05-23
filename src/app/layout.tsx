import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <header className="container mx-auto w-full p-8 px-0">
          <Link className="text-4xl text-white font-bold transition duration-300 ease-in-out hover:text-zinc-500" href="/">AudaceProducts</Link>
        </header>
        <main className="border-t border-zinc-700">{children}</main>
      </body>
    </html>
  );
}
