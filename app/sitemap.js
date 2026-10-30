export default function sitemap() {
  const base = "https://hopecarrental.mu";
  const now = new Date();
  return ["", "#about", "#services", "#fleet", "#booking", "#feedback", "#faq", "#contact"].map(
    (hash) => ({
      url: `${base}/${hash}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: hash === "" ? 1 : 0.7,
    })
  );
}
