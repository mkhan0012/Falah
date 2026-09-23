import { insights } from "@/data/insights";

export async function GET() {
  const baseUrl = "https://falahbrandhouse.com";

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>FALAH BRANDHOUSE Insights</title>
      <link>${baseUrl}</link>
      <description>Strategy, design, digital experiences and growth systems for ambitious businesses.</description>
      ${insights.map(post => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${baseUrl}/insights/${post.slug}</link>
          <guid>${baseUrl}/insights/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.category} - ${post.readingTime}]]></description>
        </item>
      `).join("")}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
