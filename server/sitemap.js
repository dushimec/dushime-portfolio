import fs from "fs";
import path from "path";

const generateSitemap = () => {
  const baseUrl = "https://dushime-christian.vercel.app";
  const pages = [
    { loc: "/", filePath: "src/Pages/Home/Home.jsx", changefreq: "daily", priority: 1.0 },
    { loc: "/about", filePath: "src/Pages/About/About.jsx", changefreq: "monthly", priority: 0.8 },
    { loc: "/skills", filePath: "src/Pages/Skills/Skills.jsx", changefreq: "monthly", priority: 0.8 },
    { loc: "/portfolio", filePath: "src/Pages/Portfolio/Portfolio.jsx", changefreq: "weekly", priority: 0.9 },
    { loc: "/process", filePath: "src/Pages/Process/Process.jsx", changefreq: "monthly", priority: 0.7 },
    { loc: "/contact", filePath: "src/components/ContactSection/ContactSection.jsx", changefreq: "monthly", priority: 0.7 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const filePath = path.resolve(page.filePath);
      const lastmod = fs.existsSync(filePath)
        ? fs.statSync(filePath).mtime.toISOString().split("T")[0] // Get last modified date
        : new Date().toISOString().split("T")[0]; // Default to current date if file doesn't exist

      return `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join("")}
</urlset>`;

  const outputPath = path.resolve("public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap, "utf8");
  console.log("Sitemap generated at:", outputPath);
};

generateSitemap();
