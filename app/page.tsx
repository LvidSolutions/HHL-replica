import Link from "next/link";
import { galleryImages, getProjectMeta, projectNumber, projects, type ArchiveImage } from "../lib/projects";

const homeProjectOrder = [
  "goteborgs-konstmuseum",
  "barkarby",
  "sunnersta",
  "froso-park-hotell",
  "sporrsmeden",
  "karrtorp",
  "arsta",
  "kompisen",
  "ekilla",
  "myttinge",
  "no4",
  "juniskar",
  "kalmar-central",
  "rodeby",
  "norrnas",
  "eldstaden",
  "skuru",
];

function homeArchiveImages(): ArchiveImage[] {
  const bySlug = new Map(projects.map((project) => [project.slug, project]));
  const orderedProjects = homeProjectOrder
    .map((slug) => bySlug.get(slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));
  const remainingProjects = projects.filter((project) => !homeProjectOrder.includes(project.slug));
  const archiveProjects = [...orderedProjects, ...remainingProjects];
  const galleries = archiveProjects.map((project) => ({ project, images: galleryImages(project) }));
  const maxLength = Math.max(...galleries.map(({ images }) => images.length));
  const seen = new Set<string>();
  const archive: ArchiveImage[] = [];

  for (let index = 0; index < maxLength; index += 1) {
    for (const { project, images } of galleries) {
      const src = images[index];
      if (!src || seen.has(src)) continue;
      seen.add(src);
      archive.push({ src, project });
    }
  }

  return archive;
}

export default function Home() {
  const images = homeArchiveImages();

  return (
    <main className="home-page">
      <section
        className="home-scroll"
        aria-label="HHL image archive"
        style={{ gridTemplateColumns: "repeat(3, var(--thumb))" }}
      >
        {images.map(({ src, project }, index) => {
          const meta = getProjectMeta(project.slug);

          return (
            <Link
              className="home-hero"
              href={`/projects/${project.slug}`}
              key={`${project.slug}-${src}`}
              style={{ display: "block", width: "var(--thumb)", minHeight: 0 }}
            >
              <img
                src={src}
                alt={meta.title}
                loading={index < 18 ? "eager" : "lazy"}
                style={{
                  width: "var(--thumb)",
                  height: "auto",
                  maxWidth: "none",
                  maxHeight: "none",
                  objectFit: "contain",
                }}
              />
              {index === 0 ? <span className="home-counter">{projectNumber(project.slug, index)}</span> : null}
            </Link>
          );
        })}
      </section>
    </main>
  );
}
