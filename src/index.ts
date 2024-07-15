import { Hono } from "hono";
import markdownHtml from "zenn-markdown-html";
import * as fs from "fs";
import { serveStatic } from "hono/bun";

const app = new Hono();

// 静的ファイルを提供するルート
app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/hello_markdown", (c) => {
  const md = fs.readFileSync("./posts/rust_introduction/section1.md", "utf8");
  const htmlContent = markdownHtml(md);
  const fullHtml = `
    <!DOCTYPE html>
    <html lang="jp">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello Markdown</title>
      <link rel="stylesheet" href="./static/styles.css">
      <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script>
    </head>
    <body class="znc">
      ${htmlContent}
    </body>
    </html>
  `;
  return c.html(fullHtml);
});

export default app;
