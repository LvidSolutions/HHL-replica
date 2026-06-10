import Image from "next/image";
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
              <Image src={image} alt={meta.title} fill sizes="100vw" priority={index === 0} />
              <span className="home-counter">{projectNumber(project.slug, index)}</span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
