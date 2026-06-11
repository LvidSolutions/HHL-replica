import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HERMANSSON HILLER LUNDBERG",
  description: "Hermansson Hiller Lundberg architecture practice and project archive.",
};

const visualScaleOverrides = `
  body,
  .site-header,
  .home-counter,
  .page-counter,
  .project-card-title,
  .project-title-block,
  .project-title-block h1,
  .project-title-block p,
  .project-copy,
  .related-projects,
  .related-projects h2,
  .news-feature h1,
  .news-feature p,
  .news-feature time,
  .news-feature span,
  .practice-page p,
  .practice-page li,
  .practice-block h2,
  .practice-contact-card,
  .people-list,
  .practice-credit {
    font-size: 18px !important;
  }

  body:has(.home-page),
  body:has(.projects-page) {
    --page-y: 44px;
    --thumb: 430px;
    --gap-x: 190px;
    --gap-y: 160px;
    --header-mask-height: 132px;
  }

  .home-scroll {
    padding-top: 150px !important;
  }

  .home-hero,
  .home-hero img {
    width: var(--thumb) !important;
    max-width: none !important;
    max-height: none !important;
  }

  @media (max-width: 1600px) {
    body:has(.home-page),
    body:has(.projects-page) {
      --page-y: 42px;
      --thumb: 340px;
      --gap-x: 155px;
      --gap-y: 130px;
      --header-mask-height: 118px;
    }

    .home-scroll {
      padding-top: 145px !important;
    }
  }

  @media (max-width: 900px) {
    body:has(.home-page),
    body:has(.projects-page) {
      --page-x: clamp(28px, 8.75vw, 78px);
      --page-y: clamp(16px, 4.7vw, 30px);
      --thumb: clamp(70px, 22vw, 170px);
      --gap-x: clamp(32px, 10vw, 68px);
      --gap-y: clamp(54px, 17vw, 104px);
      --header-mask-height: clamp(58px, 18vw, 100px);
    }

    body,
    .site-header,
    .home-counter,
    .page-counter,
    .project-card-title,
    .project-title-block,
    .project-title-block h1,
    .project-title-block p,
    .project-copy,
    .related-projects,
    .related-projects h2,
    .news-feature h1,
    .news-feature p,
    .news-feature time,
    .news-feature span,
    .practice-page p,
    .practice-page li,
    .practice-block h2,
    .practice-contact-card,
    .people-list,
    .practice-credit {
      font-size: clamp(9px, 2.8vw, 15px) !important;
    }

    .home-scroll {
      grid-template-columns: repeat(3, var(--thumb)) !important;
      padding-top: clamp(72px, 23vw, 138px) !important;
    }
  }
`;

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
      <head>
        <style dangerouslySetInnerHTML={{ __html: visualScaleOverrides }} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
