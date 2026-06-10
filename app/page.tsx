import Link from "next/link";
import { galleryImages, getProjectMeta, projectNumber, projects } from "../lib/projects";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-scroll">
        {projects.map((project, index) => {
          const meta = getProjectMeta(project.slug);
          const image = galleryImages(project)[0];

          return (
            <Link className="home-hero" href={`/projects/${project.slug}`} key={project.slug}>
              <img src={image} alt={meta.title} loading={index < 6 ? "eager" : "lazy"} />
              {index === 0 ? <span className="home-counter">{projectNumber(project.slug, index)}</span> : null}
            </Link>
          );
        })}
      </section>
    </main>
  );
}
