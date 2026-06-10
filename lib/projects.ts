import projectsRaw from "../content/projects.json";

export type Project = {
  slug: string;
  url: string;
  images: string[];
};

export const projects = projectsRaw as Project[];

export const titleMap: Record<string, string> = {
  "goteborgs-konstmuseum": "Göteborgs Konstmuseum",
  "karrtorp": "Kärrtorp",
  "no4": "No 4",
  "rodeby": "Rödeby",
  "sporrsmeden": "Sporrsmeden",
  "eldstaden": "Eldstaden",
  "kompisen": "Kompisen",
  "ekilla": "Ekilla",
  "froso-park-hotell": "Frösö Park Hotell",
  "sunnersta": "Sunnersta",
  "skuru": "Skuru",
  "myttinge": "Myttinge",
  "juniskar": "Juniskär",
  "norrnas": "Norrnäs",
  "arsta": "Årsta",
  "barkarby": "Barkarby",
  "kalmar-central": "Kalmar Central",
};

export function formatTitle(slug: string) {
  return titleMap[slug] ?? slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function relatedProjects(slug: string, limit = 2) {
  const index = projects.findIndex((project) => project.slug === slug);
  const rotated = [...projects.slice(index + 1), ...projects.slice(0, Math.max(index, 0))];
  return rotated.filter((project) => project.slug !== slug).slice(0, limit);
}

export function projectNumber(index: number) {
  return String(1372 + index).padStart(4, "0");
}
