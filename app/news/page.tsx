const item = {
  title: "GÖTEBORGS KONSTMUSEUM",
  excerpt: "1st prize, competition for the extension to the Gothenburg Museum of Art, Barozzi Veiga and Hermansson Hiller Lundberg with landscape by Peter Korn...",
  date: "28 MAR 2024",
  image: "/projects/goteborgs-konstmuseum/tr-01.jpg",
};

export default function NewsPage() {
  return (
    <main className="news-page text-page">
      <article className="news-feature">
        <img src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
        <p>{item.excerpt}</p>
        <div className="news-meta">
          <time>{item.date}</time>
          <span>READ MORE</span>
        </div>
      </article>
      <span className="page-counter">1367</span>
    </main>
  );
}
