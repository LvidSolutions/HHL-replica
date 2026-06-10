import Image from "next/image";
import Link from "next/link";
import { formatTitle, projectNumber, projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <main className="page projects-page">
      <h1 className="visually-hidden">Projects</h1>
      <section className="project-index-grid">
        {projects.map((project, index) => (
          <Link className="index-card" href={`/projects/${project.slug}`} key={project.slug}>
            <figure>
              <Image src={project.images[0]} alt={formatTitle(project.slug)} width={900} height={650} priority={index < 6} />
            </figure>
            <div className="index-meta">
              <span>{formatTitle(project.slug)}</span>
              <span>{projectNumber(index)}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
