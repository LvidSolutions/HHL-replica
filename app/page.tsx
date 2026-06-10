import Image from "next/image";
import Link from "next/link";
import { formatTitle, projectNumber, projects } from "../lib/projects";

export default function Home() {
  const featured = projects[0];
  const selected = projects.slice(0, 4);

  return (
    <main className="home-page">
      <Link className="home-hero" href={`/projects/${featured.slug}`} aria-label={formatTitle(featured.slug)}>
        <Image src={featured.images[0]} alt={formatTitle(featured.slug)} fill sizes="100vw" priority />
        <span className="home-number">1372</span>
        <span className="home-caption">{formatTitle(featured.slug)}</span>
      </Link>

      <section className="home-strip" aria-label="Selected projects">
        {selected.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="home-strip-item">
            <Image src={project.images[0]} alt={formatTitle(project.slug)} width={520} height={380} />
            <span>{projectNumber(index)}</span>
            <strong>{formatTitle(project.slug)}</strong>
          </Link>
        ))}
      </section>
    </main>
  );
}
