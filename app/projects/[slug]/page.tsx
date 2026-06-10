import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatTitle, getProject, projectNumber, projects, relatedProjects } from "../../../lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${formatTitle(project.slug)} | HHL` : "Project | HHL" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const title = formatTitle(project.slug);
  const index = projects.findIndex((item) => item.slug === project.slug);
  const related = relatedProjects(project.slug, 2);

  return (
    <main className="page project-detail">
      <section className="project-heading">
        <div>
          <h1>{title}</h1>
          <p>{projectNumber(index)}</p>
        </div>
        <Link href="/projects" className="back-link">PROJECTS</Link>
      </section>

      <section className="project-gallery">
        {project.images.map((image, imageIndex) => (
          <figure className="project-image" key={`${image}-${imageIndex}`}>
            <Image src={image} alt={`${title} ${imageIndex + 1}`} width={1800} height={1200} priority={imageIndex === 0} />
          </figure>
        ))}
      </section>

      <section className="related-block">
        <h2>RELATED PROJECTS</h2>
        <div className="related-grid">
          {related.map((item, relatedIndex) => (
            <Link href={`/projects/${item.slug}`} className="index-card" key={item.slug}>
              <figure>
                <Image src={item.images[0]} alt={formatTitle(item.slug)} width={900} height={650} />
              </figure>
              <div className="index-meta">
                <span>{formatTitle(item.slug)}</span>
                <span>{projectNumber((index + relatedIndex + 1) % projects.length)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
