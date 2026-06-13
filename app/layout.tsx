import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "HERMANSSON HILLER LUNDBERG",
  description: "Hermansson Hiller Lundberg architecture practice and project archive.",
};

// hhl.se is fully fluid: a vw-based root font-size, every text element at
// 0.8rem, and grids measured in rem (i.e. vw). These overrides mirror the
// live theme (wp-content/themes/hhl/css/styles.css) so type and layout scale
// identically at every width instead of snapping at fixed-px breakpoints.
const visualScaleOverrides = `
  /* Root type scale — exact hhl.se breakpoints */
  :root { font-size: 1.25vw; }
  @media (max-width: 1199px) { :root { font-size: 2vw; } }
  @media (max-width: 799px)  { :root { font-size: 2.5vw; } }
  @media (max-width: 499px)  { :root { font-size: 5vw; } }

  body,
  .site-header,
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
    font-size: 0.8rem !important;
  }

  .site-header { line-height: 1rem !important; }

  /* hhl.se never shows a visible project counter (its ssp-id is display:none) */
  .home-counter,
  .page-counter { display: none !important; }

  /* Page gutters — 8rem (=10vw) like hhl.se's __body-images / __body-main */
  body:has(.home-page),
  body:has(.projects-page),
  body:has(.project-page),
  body:has(.practice-page) {
    --page-x: 10vw;
    --page-y: 4rem;
    --header-mask-height: 7.5rem;
  }

  /* HOME — three 20vw square cells, 10vw gaps, centered (=> 10vw gutters) */
  .home-scroll {
    grid-template-columns: repeat(3, 20vw) !important;
    column-gap: 10vw !important;
    row-gap: 5.12rem !important;
    padding: 12.2rem 10vw 6rem !important;
    justify-content: center !important;
  }
  .home-hero {
    width: 20vw !important;
    height: 20vw !important;
    min-height: 0 !important;
  }
  .home-hero img {
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    max-height: none !important;
    object-fit: contain !important;
  }

  /* PROJECTS — two 35vw cells (5:4), justified to the gutters */
  .projects-list {
    grid-template-columns: repeat(2, 35vw) !important;
    justify-content: space-between !important;
    column-gap: 0 !important;
    row-gap: 6.4rem !important;
    padding: 9rem 10vw 6rem !important;
  }
  .project-card,
  .project-card-image {
    width: 35vw !important;
  }
  .project-card-image {
    height: 28vw !important;
    min-height: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-card-image img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
  }

  /* PRACTICE & NEWS — single 28rem (=504px @1440) centered column; section
     images are 28rem-wide 5:4 boxes with the photo contained & centered */
  .practice-intro,
  .practice-block,
  .practice-contact-card,
  .people-list,
  .practice-credit,
  .news-feature,
  .news-feature p,
  .news-meta {
    width: 28rem !important;
  }
  .practice-block {
    display: block !important;
    margin-bottom: 1.6rem !important;
  }
  .practice-block h2 { margin-bottom: 0 !important; }
  .practice-contact-card {
    grid-template-columns: 1fr !important;
    row-gap: 1.2rem !important;
  }
  .practice-top-image,
  .practice-wide-image,
  .news-feature img {
    width: auto !important;
    max-width: 28rem !important;
    height: 22.4rem !important;
    object-fit: contain !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  /* hhl.se project pages are image-only — its description container is empty */
  .project-text-block { display: none !important; }

  /* Mobile (<500px) keeps hhl.se's 3-up home grid; projects stack 1-up */
  @media (max-width: 499px) {
    .home-scroll {
      grid-template-columns: repeat(3, 20vw) !important;
      column-gap: 10vw !important;
      row-gap: 3rem !important;
      padding-top: 7.5rem !important;
    }
    .projects-list {
      grid-template-columns: 1fr !important;
      row-gap: 4rem !important;
      padding-top: 7.5rem !important;
    }
    .project-card,
    .project-card-image { width: 100% !important; }
    .project-card-image { height: auto !important; aspect-ratio: 5 / 4; }
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
