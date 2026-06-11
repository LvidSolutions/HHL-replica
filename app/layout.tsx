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
    font-size: 24px !important;
  }

  .site-header {
    line-height: 1.03 !important;
  }

  body:has(.home-page),
  body:has(.projects-page) {
    --page-x: 17px;
    --page-y: 17px;
    --thumb: 470px;
    --gap-x: 235px;
    --gap-y: 170px;
    --header-mask-height: 126px;
  }

  .home-scroll {
    padding-top: 252px !important;
    padding-left: 17px !important;
    padding-right: 17px !important;
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
      --page-x: 15px;
      --page-y: 15px;
      --thumb: 340px;
      --gap-x: 150px;
      --gap-y: 130px;
      --header-mask-height: 104px;
    }

    .home-scroll {
      padding-top: 188px !important;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
  }

  @media (max-width: 900px) {
    body:has(.home-page),
    body:has(.projects-page) {
      --page-x: clamp(8px, 3vw, 18px);
      --page-y: clamp(8px, 3vw, 18px);
      --thumb: clamp(70px, 24vw, 170px);
      --gap-x: clamp(32px, 11vw, 70px);
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
      font-size: clamp(10px, 3.2vw, 16px) !important;
    }

    .home-scroll {
      grid-template-columns: repeat(3, var(--thumb)) !important;
      padding-top: clamp(82px, 26vw, 148px) !important;
      padding-left: var(--page-x) !important;
      padding-right: var(--page-x) !important;
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
