import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HERMANSSON HILLER LUNDBERG",
  description: "Visual portfolio replica for Hermansson Hiller Lundberg.",
};

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Home">
        HERMANSSON HILLER LUNDBERG
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
