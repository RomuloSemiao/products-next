import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <header>
          <h1>AudaceProducts</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
