import projectsRaw from "../content/projects.json";

export type Project = {
  slug: string;
  url: string;
  images: string[];
};

export type ProjectMeta = {
  title: string;
  location: string;
  category: string;
  year?: string;
  description: string[];
  awards?: string[];
  photography?: string;
  galleryCount?: number;
  related?: string[];
  number?: string;
};

export type ArchiveImage = {
  src: string;
  project: Project;
};

export const projects = projectsRaw as Project[];

export const projectMeta: Record<string, ProjectMeta> = {
  "goteborgs-konstmuseum": {
    title: "GÖTEBORGS KONSTMUSEUM",
    location: "Gothenburg",
    category: "MUSEUM EXTENSION",
    year: "2024-",
    description: [
      "1st prize, competition for the extension to the Gothenburg Museum of Art, Barozzi Veiga and Hermansson Hiller Lundberg with landscape by Peter Korn",
    ],
    galleryCount: 7,
    related: ["karrtorp", "kompisen"],
    number: "1372",
  },
  karrtorp: {
    title: "TRILLING",
    location: "STOCKHOLM",
    category: "STUDENT HOUSING",
    description: [
      "TRILLING Student housing, 380 apts, Stockholm (2016-23, built)",
      "On a rocky site in a functionalistic suburb from the 50's, the project consists of student housing in three long building volumes placed perpendicular to the street. Navigating topography and programme, the project balances modernistic planning logic and formal investigations into colour, division, composition and order.",
      "Along the street, a shallow colonnade structures the urban relationship, whereas along the dramatic cliff, the subdivided volumes of the buildings climb up and meet the natural ground on different levels.",
    ],
    awards: ["Nomination, Stockholm's Best Building 2023, Sweden"],
    photography: "Johan Dehlin",
    galleryCount: 5,
    related: ["no4", "sporrsmeden"],
    number: "1372",
  },
  no4: {
    title: "NO4",
    location: "NACKA",
    category: "RESIDENTIAL BUILDING",
    description: [
      "NO4 Conversion of office building into 210 apts and a pre-school for 80 children, Nacka (2014-18, built)",
      "An existing monofunctional office building from the 1990s was converted into a residential building with a preschool, through a complex balancing of access, views, floor plate depths and topography. Throughout both the reconfigured existing facades and the façades of the added superstructures, the building is characterised by a meeting between existing brick and added steel.",
      "The crown of steel that the penthouses constitute form a free interpretation of the memory of the former factory environment in Nacka Strand.",
    ],
    awards: [
      "Winner, Best Architects 20 Award, 2019, Germany",
      "Nomination, ROT Award for best re-use, 2019, Sweden",
      "Nomination, Swedish Steel Design Award, 2019, Sweden",
    ],
    photography: "Mikael Olsson",
    galleryCount: 5,
    related: ["rodeby", "karrtorp"],
    number: "895",
  },
  rodeby: {
    title: "RÖDEBY",
    location: "KARLSKRONA",
    category: "CARE HOME",
    description: [
      "RÖDEBY Care home, 48 units, Karlskrona (2018-21, built)",
      "On a plot next to a decommissioned city hall from the 1950s, a new care home has been built. The project adapts to its settings with the use of pitched roofs and intricate brick patterns. However, the central preoccupation of the project is to provide a sense of spatial richness to the inhabitants, most of whom will end their lives there in a place not fully of their choosing.",
      "This search for dignity and experiential variation is developed through an intricate plan with courtyards, loggias and ambulatory spaces, both within and between the wards.",
    ],
    awards: ["Winner, Best Architects 23 Award, 2022, Germany"],
    photography: "Johan Dehlin",
    galleryCount: 5,
    related: ["barkarby", "karrtorp"],
  },
  sporrsmeden: {
    title: "SPORRSMEDEN",
    location: "MARKARYD",
    category: "CARE HOME",
    description: [
      "SPORRSMEDEN Care home, Markaryd.",
      "A restrained institutional project organised around everyday dignity, durable construction and carefully composed facades.",
    ],
    galleryCount: 5,
    related: ["eldstaden", "kompisen"],
  },
  eldstaden: {
    title: "ELDSTADEN",
    location: "FALKENBERG",
    category: "PRE-SCHOOL",
    description: [
      "ELDSTADEN Pre-school for 120 children, Falkenberg (2019-21, built)",
      "The basic building block of the preschool is a module comprising of two grouped wards, combined with shared service areas like sheltered exterior sleeping areas, atelier, cloakrooms, etc. The wards are laid out with internal plazas along a meandering walkway. The building is composed of interconnecting woodclad volumes in different muted primary colours with pitched roofs.",
      "These volumes have symmetrical compositions and are connected with adjoining volumes which ambiguously mediate between the colours and forms.",
    ],
    awards: ["Winner, Best Architects 23 Award, 2022, Germany"],
    photography: "Johan Dehlin",
    galleryCount: 5,
    related: ["karrtorp", "no4"],
  },
  kompisen: {
    title: "KOMPISEN",
    location: "FALKENBERG",
    category: "PRE-SCHOOL",
    description: [
      "KOMPISEN Pre-school, Falkenberg.",
      "A compact public building developed through simple volumes, robust materials and a precise relationship between rooms for children, shared spaces and the surrounding site.",
    ],
    galleryCount: 5,
    related: ["eldstaden", "sporrsmeden"],
  },
  ekilla: {
    title: "EKILLA",
    location: "STOCKHOLM",
    category: "RESIDENTIAL BUILDING",
    description: [
      "EKILLA Residential building, 63 apartments, with assisted living apts, Sigtuna (2017-20, built)",
      "The site was typical for much of the architecture created today: a mixture of scales and of programmes, without a clear grammar of the surroundings; a kind of no-context. The programme had to be reconciled with the construction criteria, in accordance with the strictest possible budget, and with a material palette consisting of basically the cheapest possible low-maintenance facade you can build in Sweden.",
      "From these circumscribed conditions we explored the expressive possibilites of the facades to investigate a gentle monumentality.",
    ],
    awards: ["Winner, Best Architects 21 Award, 2020, Germany"],
    photography: "Samuel Lundberg",
    galleryCount: 4,
    related: ["karrtorp", "no4"],
  },
  "froso-park-hotell": {
    title: "FRÖSÖ PARK",
    location: "ÖSTERSUND",
    category: "HOTEL AND SPA",
    description: [
      "FRÖSÖ PARK Hotel, 115 rooms, Östersund (2012-15, built)",
      "The project has two parts, one re-use and one new-build. The architectural principles in the two parts are different. In the transformation of the old building the aim was to make an ambiguous whole, where the additions and transformations are not to be seen as 'new'.",
      "In the addition, the facades are clad with prefabricated sheet metal panels whose ordering indicate a tectonic subdivision, expressed in a shallow bas-relief, that is not indicative of the underlying structure but rather strives to order the facade into a harmonious whole.",
    ],
    photography: "Mikael Olsson",
    galleryCount: 3,
    related: ["karrtorp", "no4"],
  },
  sunnersta: {
    title: "SUNNERSTA",
    location: "UPPSALA",
    category: "THREE SEMI-DETACHED HOUSES",
    description: [
      "SUNNERSTA Three semi-detached houses, Uppsala (2015-17, built)",
      "Three semi-detached houses replaced an existing villa in a quiet suburb. Each building contains two dwellings. The inherent symmetry is expressed and expanded so that each façade has a symmetric composition. Over every corner symmetrical facades clash and create a free effect. The division of the facades into strong horizontal and vertical elements pronounce the windows as a function of their composition.",
      "Between the calm and ordered building volumes and the sculptural qualities of the exposed rock, a free but violent juxtaposition takes place.",
    ],
    awards: ["Winner, Best Architects 19 Award, 2018, Germany"],
    photography: "Mikael Olsson",
    galleryCount: 5,
    related: ["norrnas", "myttinge"],
  },
  skuru: {
    title: "SKURU",
    location: "NACKA",
    category: "PRIVATE HOUSE",
    description: [
      "SKURU Private house, Nacka (2012-15, built)",
      "The clear volume of the house gains a richness of expression through the development of a tectonic order of discreet buildings parts. These tectonics, however, are entirely rhetorical as they lie in the elaboration of reliefs in the plaster surface, and the actual construction is made of standard expanded clay masonry blocks. The repetition of pillars and the juxtaposition of building elements create a minimalistic complexity.",
      "The monumental expression creates a specific yet unprogrammed openness for an unconventional dwelling.",
    ],
    awards: [
      "Winner, Design S Award, Sweden’s national design award, 2016, Sweden",
      "Winner, Best Architects 18 Award, 2017, Germany",
      "Shortlist, Architectural Review House Award, 2015, UK",
    ],
    photography: "Mikael Olsson",
    galleryCount: 5,
    related: ["norrnas", "myttinge"],
    number: "309",
  },
  myttinge: {
    title: "MYTTINGE",
    location: "VÄRMDÖ",
    category: "PRIVATE HOUSE",
    description: [
      "MYTTINGE Private house, Värmdö (2015-17, built)",
      "The brief was simple, a summer house in bucolic surroundings. We sought out a relationship to the natural setting based on tension, working with scale and order to pursue a reserved architectonic expression. Monumental expression in individual building elements creates unusual effects when used in small-scale and domestic settings. The dark broad piers of the exterior order the facades on all sides.",
      "The cornice crowning the facades is very slim, resulting in an ambiguous trabeation, where there is no load-bearing taking place. The interior is abstract and restrained. The vertical windows balance an openness to the surroundings with a firm delineation of interior space.",
    ],
    awards: ["Winner, Best Architects 19 Award, 2018, Germany", "Finalist, Architizer A+ Award 2019, USA"],
    photography: "Mikael Olsson",
    galleryCount: 5,
    related: ["skuru", "sunnersta"],
  },
  juniskar: {
    title: "JUNISKÄR",
    location: "SUNDSVALL",
    category: "PRIVATE HOUSE",
    description: [
      "JUNISKÄR Single-family house, Sundsvall (2012-15, built)",
      "The project is conceived as a reflection on the theme of the domestic. The house is composed of two clear volumes with different proportions and heights, allowing for the exterior adaption to the sloping site as well as an interior variety of interlocking spaces. The house has a sort of doubleness or Janus-character, being formal and symmetrical towards the garden but informal and plastic toward the entrance side.",
      "The interior spaces play with the idea of the traditional or home-like, and create subtle dislocations in the perception of the rooms through the use of different proportions and hues of colour.",
    ],
    awards: [
      "Winner, Best Architects 18 Gold Award, 2017, Germany",
      "Nomination, Wienerberger Brick Award, 2018, Austria",
      "Nomination, World Architecture Festival Award, 2016, Germany",
    ],
    photography: "Mikael Olsson",
    galleryCount: 5,
    related: ["rodeby", "skuru"],
  },
  norrnas: {
    title: "NORRNÄS",
    location: "VÄRMDÖ",
    category: "PRIVATE HOUSE",
    description: [
      "NORRNÄS Private house, Värmdö (2009-14, built)",
      "The impetus for the project was the site and how to respond to it. The architecture aims to establish a topographical relationship to the location, where the main building in a sense dominates the surroundings. Whereas there is a Swedish tradition of subordinating the house to the landscape, here the goal has been to create a relationship between building and surrounding based on tension.",
      "The client preferred not to be surrounded by seldom-used functions in their daily life, and the programme was therefore divided into three building volumes, each of which contains different functions, and all of which together constitute the dwelling. The site has a great variation in its landscape and by relating to this in differentiated ways, the restrained interiors gain character and richness.",
      "The buildings have been developed as a kind of primordial hut, in the manner of Semper, with a distinction between stereotomic platforms and space-catching tectonic frames.",
    ],
    awards: ["Special Mention, Architizer A+ Award, 2017, USA"],
    photography: "Mikael Olsson",
    galleryCount: 5,
    related: ["skuru", "myttinge"],
  },
  arsta: {
    title: "ÅRSTA",
    location: "STOCKHOLM",
    category: "RESIDENTIAL BUILDING",
    description: [
      "ÅRSTA Residential building, Stockholm.",
      "A residential project developed through a restrained composition of facade, volume and urban relationship.",
    ],
    galleryCount: 3,
    related: ["karrtorp", "no4"],
  },
  barkarby: {
    title: "BARKARBY",
    location: "JÄRFÄLLA",
    category: "MULTI-USE BLOCK AND RESIDENTIAL BUILDING",
    description: [
      "BARKARBY Multi-use block and residential building, Järfälla (2019-, ongoing)",
      "The project, won in a competition, consists of two new city blocks forming a public square next to a commuter rail station. One of the blocks is a conventional residential building with shops and offices, and the other is a 'mobility house', containing commuter parking, shops, offices, a hotel and residences.",
      "The project is heavily influenced by traffic requirements and a complex topography, but solutions to these conditions are always balanced with the creating of an urban and civic space in the new development.",
    ],
    galleryCount: 4,
    related: ["karrtorp", "no4"],
  },
  "kalmar-central": {
    title: "KALMAR CENTRAL",
    location: "KALMAR",
    category: "TRAVEL CENTRE",
    description: [
      "KALMAR CENTRAL Travel centre, Kalmar.",
      "A civic transport project organised around public movement, robust urban space and a clear architectural order.",
    ],
    galleryCount: 5,
    related: ["barkarby", "goteborgs-konstmuseum"],
  },
};

export const titleMap: Record<string, string> = Object.fromEntries(
  Object.entries(projectMeta).map(([slug, meta]) => [slug, meta.title])
);

export function getProjectMeta(slug: string) {
  return projectMeta[slug] ?? {
    title: formatTitle(slug),
    location: "",
    category: "",
    description: [],
  };
}

export function formatTitle(slug: string) {
  return titleMap[slug] ?? slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function galleryImages(project: Project) {
  const meta = getProjectMeta(project.slug);
  const count = meta.galleryCount ?? Math.max(1, project.images.length - 2);
  return project.images.slice(0, count);
}

export function archiveImages() {
  const seen = new Set<string>();
  const images: ArchiveImage[] = [];

  for (const project of projects) {
    for (const src of project.images) {
      if (seen.has(src)) continue;
      seen.add(src);
      images.push({ src, project });
    }
  }

  return images;
}

export function relatedProjects(slug: string, limit = 2) {
  const meta = getProjectMeta(slug);
  const explicit = meta.related
    ?.map((relatedSlug) => getProject(relatedSlug))
    .filter((project): project is Project => Boolean(project))
    .slice(0, limit);

  if (explicit && explicit.length >= limit) return explicit;

  const index = projects.findIndex((project) => project.slug === slug);
  const rotated = [...projects.slice(index + 1), ...projects.slice(0, Math.max(index, 0))];
  return rotated.filter((project) => project.slug !== slug).slice(0, limit);
}

export function projectNumber(slug: string, fallbackIndex = 0) {
  return getProjectMeta(slug).number ?? String(1372 - fallbackIndex * 17);
}
