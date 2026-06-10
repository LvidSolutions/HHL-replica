import Link from "next/link";
import { galleryImages, getProjectMeta, projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <h1 className="screen-reader-only">Projects</h1>
      <section className="projects-list" aria-label="Projects">
        {projects.map((project, index) => {
          const meta = getProjectMeta(project.slug);
          const cover = galleryImages(project)[0];

          return (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="project-card-image">
                <img src={cover} alt={meta.title} loading={index < 6 ? "eager" : "lazy"} />
              </div>
              <div className="project-card-title">
                <span className="project-card-name">{meta.title}</span>
                <span className="project-card-location">{meta.location}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
