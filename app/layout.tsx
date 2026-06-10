import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HERMANSSON HILLER LUNDBERG",
  description: "Hermansson Hiller Lundberg architecture practice and project archive.",
};

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="HERMANSSON HILLER LUNDBERG">
        <span>HERMANSSON</span>
        <span>HILLER</span>
        <span>LUNDBERG</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/projects">PROJECTS</Link>
        <Link href="/news">NEWS</Link>
        <Link href="/practice">PRACTICE</Link>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
