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
  const [heroImage] = galleryImages(project);
  const related = relatedProjects(project.slug, 2);

  return (
    <main className="project-page">
      {heroImage ? (
        <figure className="project-hero-image">
          <img src={heroImage} alt={meta.title} loading="eager" />
        </figure>
      ) : null}

      <section className="project-info">
        <div className="project-intro">
          {meta.location ? <p>{meta.location}</p> : null}
          {meta.category ? <p>{meta.category}</p> : null}
          {meta.year ? <p>{meta.year}</p> : null}
        </div>
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
            return (
              <Link href={`/projects/${item.slug}`} className="related-card" key={item.slug}>
                {relatedMeta.title}
              </Link>
            );
          })}
        </div>
      </section>

      <span className="project-page-number">{projectNumber(project.slug)}</span>
    </main>
  );
}
