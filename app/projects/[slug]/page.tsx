import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryImages, getProject, getProjectMeta, projects, relatedProjects } from "../../../lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const meta = project ? getProjectMeta(project.slug) : null;
  return { title: meta ? `${meta.title} | HHL` : "Project | HHL" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = getProjectMeta(project.slug);
  const gallery = galleryImages(project);
  const related = relatedProjects(project.slug, 2);

  return (
    <main className="project-page">
      <header className="project-title-block">
        <h1>{meta.title}</h1>
        {meta.location ? <p>{meta.location}</p> : null}
        {meta.category ? <p>{meta.category}</p> : null}
        {meta.year ? <p>{meta.year}</p> : null}
      </header>

      <section className="project-gallery" aria-label={`${meta.title} images`}>
        {gallery.map((image, imageIndex) => (
          <figure className="project-image" key={`${image}-${imageIndex}`}>
            <img src={image} alt={`${meta.title} ${imageIndex + 1}`} loading={imageIndex === 0 ? "eager" : "lazy"} />
          </figure>
        ))}
      </section>

      <section className="project-text-block">
        <div className="project-copy">
          {meta.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {meta.awards?.length ? <div className="project-facts">{meta.awards.map((award) => <p key={award}>{award}</p>)}</div> : null}
          {meta.photography ? <p className="project-photo">Photography: {meta.photography}</p> : null}
        </div>
      </section>

      <section className="related-projects" aria-label="Related projects">
        <h2>Related Projects</h2>
        <div className="related-list">
          {related.map((item) => {
            const relatedMeta = getProjectMeta(item.slug);
            const [cover] = galleryImages(item);
            return (
              <Link href={`/projects/${item.slug}`} className="related-card" key={item.slug} aria-label={relatedMeta.title}>
                <img src={cover} alt={relatedMeta.title} loading="lazy" />
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
