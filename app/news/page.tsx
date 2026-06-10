const items = [
  ["2024", "Göteborgs Konstmuseum"],
  ["2023", "Kärrtorp, Rödeby, Sporrsmeden, Eldstaden and Kompisen"],
  ["2021", "Årsta, Barkarby and Kalmar Central"],
  ["2017", "Frösö Park Hotell, Sunnersta, Skuru, Myttinge, Juniskär and Norrnäs"],
];

export default function NewsPage() {
  return (
    <main className="page text-layout">
      <h1>NEWS</h1>
      <div className="news-table">
        {items.map(([year, title]) => (
          <article key={`${year}-${title}`}>
            <time>{year}</time>
            <p>{title}</p>
            <span>READ MORE</span>
          </article>
        ))}
      </div>
    </main>
  );
}
