import Image from "next/image";
import Link from "next/link";
import { galleryImages, getProjectMeta, projectNumber, projects } from "../lib/projects";

export default function Home() {
  const featured = projects[0];
  const meta = getProjectMeta(featured.slug);
  const [image] = galleryImages(featured);

  return (
    <main className="home-page">
      <Link className="home-hero" href={`/projects/${featured.slug}`} aria-label={meta.title}>
        <Image src={image} alt={meta.title} fill sizes="100vw" priority />
        <span className="home-counter">{projectNumber(featured.slug, 0)}</span>
      </Link>
    </main>
  );
}
