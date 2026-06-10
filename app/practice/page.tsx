const intro = [
  "HERMANSSON HILLER LUNDBERG is focused on the development and production of architecture with a lasting worth and value to society, always in continuous engagement with the history of architecture. The work of the studio has been acknowledged with various national and international awards.",
  "Architecture is by its very nature complex. Projects exist on multiple levels simultaneously, and are informed by specific combinations of conditions such as regulations, construction systems, details, materials, project management, topography, and more. We work with different forms and expressions in the pursuit of a rich and complex architecture, and we combine an interest in the fundamental values in architecture with a dedication to context, programme and building processes.",
  "For us, there are many themes that we are interested in and that we return to in different ways to develop our projects and their architectural forms and building elements. Each project tends to touch on just some of these themes and conditions, and we consciously work with a range of different formal qualites and materials, so while some projects can be quite similar, others turn out quite different from each other.",
  "The practice’s ongoing projects include housing, city planning, care homes, pre-schools, hotels and offices. Regardless of the type or scale of a project we investigate and develop architectural forms, building components, materialities and atmospheres. The practice was founded in Stockholm in 2010 by Andreas Hermansson, Andreas Hiller and Samuel Lundberg.",
];

const distinctions = [
  "Nomination, Stockholm’s Best Building 2023, Sweden, 2023", "Winner, Best Architects 23 Award, Germany, 2022", "Winner, Best Architects 21 Award, Germany, 2020", "Nomination, ECOLA Award, Germany, 2019", "Winner, Best Architects 20 Award, Germany, 2019", "Nomination, Swedish Steel Design Award, Sweden, 2019", "Finalist, Architizer A+ Award, USA, 2019", "Nomination, ROT Award, Sweden, 2019", "Winner, Best Architects 19 Award, Germany, 2018", "Winner, German Design Award, Germany, 2018", "Winner, Best Architects 18 Gold Award, Germany, 2017", "Winner, Best Architects 18 Award, Germany, 2017", "Special Mention, Architizer A+ Award, USA, 2017", "Nomination, Wienerberger Brick Award 2018, Austria, 2017", "Winner, Sweden’s national design award ‘Design S’, Sweden, 2016", "Nomination, World Architecture Festival Award, Germany, 2016", "Shortlist, Architectural Review House Award, UK, 2015",
];

const competitions = [
  "Winner, Procurement competition, Residential building with re-used materials and life-cycle perspective, Linköping, Sweden, 2021", "Winner, Procurement competition, Multi-use block and housing, Barkarby, Sweden, 2019", "Winner, Invited competition. Urban plan for suburban densification, Jordbro, Sweden, 2016", "Winner, Invited competition. Residential buildings 370 apts, Nacka, Sweden, 2016", "Honorary Mention, International competition, Gründungsviertel, Lübeck, Germany, 2015", "Winner, Procurement competition. Care home 54 units, Ekerö, Sweden, 2014", "Winner, Invited competition. Residential building 200 apts, Nacka, Sweden, 2014", "Winner, Invited competition. Residential building 60 apts, Östersund, Sweden, 2013", "2nd prize, International competition. New parish house, Flöng, Denmark, 2008", "1st prize, International competition. New HQ for Glitnir Bank, Reykjavik, Iceland, 2007", "Honorary Mention, International competition. Residential area, Jyväskylä, Finland, 2007",
];

const exhibitions = ["‘Collective City’, Seoul Biennale of Architecture and Urbanism, Seoul, 2019", "‘Architecture Projects: Skeppsbron’, ArkDes, Stockholm, 2019", "’Public Luxury’, ArkDes, Stockholm, 2018", "‘In Therapy’, Nordic pavilion at the Architecture Biennale, Venice, 2016"];

const lectures = [
  "‘Architektur als Ressource’, Dortmunder Architekturtage 2022, Dortmund, Germany, 2022", "‘many levels of meaning and combinations of focus’, Halle A lecture series, OTH, Regensburg, Germany, 2022", "‘Hermansson Hiller Lundberg’, Oslo Association of Architects, Oslo, Norway, 2022", "‘Architecture on Stage: Hermansson Hiller Lundberg’, Architectural Foundation, London, UK, 2022", "‘Where we are’, Western Sydney University, Sydney, Australia, 2022", "‘More or Less’, TU München, Munich, Germany, 2022", "‘On facades’, London Metropolitan University, London, UK, 2021", "‘Order and Emotion’, Royal Academy of Arts, Stockholm, Sweden, 2020", "‘Current work’, Architectural Foundation, London, UK, 2020", "’Hermansson Hiller Lundberg’, Reihe Eins lecture series, TU Kaiserslautern, Kaiserslautern, Germany, 2020", "‘evokes many levels of meaning and combinations of focus’, Architectural Foundation, London, UK, 2020", "‘a living thing, asserting itself with ever-growing insistency’, Architectural Foundation, London, UK, 2020", "‘within each of them vault after vault opened endlessly’, Architectural Foundation, London, UK, 2020", "‘In Practice’, Kingston School of Art, London, UK, 2020", "‘Local Practice’, KTH Royal Institute of Technology, Stockholm, Sweden, 2018",
];

const people = [
  ["ANDREAS HERMANSSON", "Arkitekt SAR/MSA", "+46 (0)8 410 509 02", "+46 (0)70 428 38 83", "andreas.hermansson@hhl.se"],
  ["ANDREAS HILLER", "Arkitekt SAR/MSA", "+46 (0)8 410 509 03", "+46 (0)73 987 27 52", "andreas.hiller@hhl.se"],
  ["SAMUEL LUNDBERG", "Arkitekt SAR/MSA", "+46 (0)8 410 509 04", "+46 (0)70 313 51 12", "samuel.lundberg@hhl.se"],
  ["FREDRIK EVENSEN", "", "", "", "fredrik.evensen@hhl.se"], ["VERONICA FELTRE", "", "", "", "veronica.feltre@hhl.se"], ["VERONICA GERINI", "", "", "", "veronica.gerini@hhl.se"], ["MOA HANNERZ", "", "", "", "moa.hannerz@hhl.se"], ["GODA LUKSAITE", "", "", "", "goda.luksaite@hhl.se"], ["CLAUDIA TURIEL", "", "", "", "claudia.turiel@hhl.se"],
];

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return <section className="practice-block"><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export default function PracticePage() {
  return (
    <main className="practice-page text-page">
      <img className="practice-top-image" src="/projects/skuru/HHL-SKURU-02.jpg" alt="Practice" />
      <section className="practice-intro">{intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
      <ListBlock title="DISTINCTIONS" items={distinctions} />
      <ListBlock title="COMPETITIONS" items={competitions} />
      <ListBlock title="EXHIBITIONS" items={exhibitions} />
      <ListBlock title="LECTURES" items={lectures} />
      <img className="practice-wide-image" src="/projects/karrtorp/tr-01.jpg" alt="Office" />
      <section className="practice-contact">
        <h2>HERMANSSON HILLER LUNDBERG ARKITEKTER AB</h2>
        <p>Åsögatan 142<br />116 24 Stockholm</p>
        <p>+46 (0)8 410 509 00<br />info@hhl.se</p>
        <div className="people-list">{people.map(([name, role, phone, mobile, email]) => <article key={name}><p>{name}</p>{role ? <p>{role}</p> : null}{phone ? <p>{phone}</p> : null}{mobile ? <p>{mobile}</p> : null}<p>{email}</p></article>)}</div>
      </section>
      <span className="page-counter">9</span>
    </main>
  );
}
