const items = [
  {
    title: "Göteborgs konstmuseum",
    excerpt: "1st prize, competition for the extension to the Gothenburg Museum of Art, Barozzi Veiga and Hermansson Hiller Lundberg with landscape by Peter Korn...",
    date: "28 Mar 2024",
  },
];

export default function NewsPage() {
  return (
    <main className="news-page text-page">
      <h1 className="screen-reader-only">News</h1>
      <section className="news-list" aria-label="News">
        {items.map((item) => (
          <article className="news-item" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.excerpt}</p>
            <time>{item.date}</time>
            <span>Read More</span>
          </article>
        ))}
      </section>
      <span className="page-counter">1367</span>
    </main>
  );
}
