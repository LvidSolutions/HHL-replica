import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryImages, getProject, getProjectMeta, projectNumber, projects, relatedProjects } from "../../../lib/projects";

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
  const index = projects.findIndex((item) => item.slug === project.slug);
  const gallery = galleryImages(project);
  const related = relatedProjects(project.slug, 2);

  return (
    <main className="project-page">
      <section className="project-top">
        <div className="project-intro">
          <h1>{meta.title}</h1>
          <p>{meta.category}</p>
          <p>{meta.location}</p>
          {meta.year ? <p>{meta.year}</p> : null}
        </div>
        <div className="project-copy">
          {meta.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {meta.awards?.length ? (
            <div className="project-facts">
              {meta.awards.map((award) => <p key={award}>{award}</p>)}
            </div>
          ) : null}
          {meta.photography ? <p className="project-photo">Photography: {meta.photography}</p> : null}
        </div>
      </section>

      <section className="project-gallery" aria-label={`${meta.title} images`}>
        {gallery.map((image, imageIndex) => (
          <figure className="project-image" key={`${image}-${imageIndex}`}>
            <img src={image} alt={`${meta.title} ${imageIndex + 1}`} loading={imageIndex === 0 ? "eager" : "lazy"} />
          </figure>
        ))}
      </section>

      <section className="related-projects">
        <h2>Related Projects</h2>
        <div className="related-list">
          {related.map((item, relatedIndex) => {
            const relatedMeta = getProjectMeta(item.slug);
            const [cover] = galleryImages(item);
            return (
              <Link href={`/projects/${item.slug}`} className="related-card" key={item.slug}>
                <div className="related-image">
                  <Image src={cover} alt={relatedMeta.title} fill sizes="(max-width: 780px) 100vw, 50vw" />
                </div>
                <div className="project-card-title">
                  <span>{relatedMeta.title}</span>
                  <span>{projectNumber(item.slug, index + relatedIndex + 1)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
