import Link from "next/link";
import { archiveImages, getProjectMeta, projectNumber } from "../lib/projects";

export default function Home() {
  const images = archiveImages();

  return (
    <main className="home-page">
      <section className="home-scroll" aria-label="HHL image archive">
        {images.map(({ src, project }, index) => {
          const meta = getProjectMeta(project.slug);

          return (
            <Link className="home-hero" href={`/projects/${project.slug}`} key={`${project.slug}-${src}`}>
              <img src={src} alt={meta.title} loading={index < 12 ? "eager" : "lazy"} />
              {index === 0 ? <span className="home-counter">{projectNumber(project.slug, index)}</span> : null}
            </Link>
          );
        })}
      </section>
    </main>
  );
}
