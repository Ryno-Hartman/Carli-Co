import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const routes = ["page.tsx", "services/page.tsx", "about/page.tsx", "gallery/page.tsx", "careers/page.tsx", "contact/page.tsx"];

test("includes the original six-page structure", async () => {
  for (const route of routes) {
    const source = await readFile(new URL(`../app/${route}`, import.meta.url), "utf8");
    assert.match(source, /Carli|serviceGroups|business/);
  }
});

test("keeps verified business details in one editable file", async () => {
  const content = await readFile(new URL("../app/content.ts", import.meta.url), "utf8");
  assert.match(content, /0493 073 743/);
  assert.match(content, /62 Davies Road/);
  assert.match(content, /gettimely\.com\/carliandco/);
  assert.match(content, /Balayage full application/);
  assert.match(content, /Serenity Cut/);
});

test("does not retain invented Cape Town content or hosting configuration", async () => {
  const appSources = await Promise.all(routes.concat(["layout.tsx", "components/SiteHeader.tsx", "components/SiteFooter.tsx", "content.ts"]).map((route) => readFile(new URL(`../app/${route}`, import.meta.url), "utf8")));
  assert.doesNotMatch(appSources.join("\n"), /Cape Town|R1\s?250|hello@carliandco\.co\.za|Carli Meyer|Mia|Zara/);
  await assert.rejects(access(new URL("../.openai/hosting.json", import.meta.url)));
});

test("ships every website photograph locally", async () => {
  for (const filename of [
    "hero-cut.webp", "blowdry.webp", "salon-stations.webp", "salon-portrait.webp",
    "precision-cut.webp", "hair-texture.webp", "product-pedestal.webp", "product-shelf.webp",
  ]) {
    await access(new URL(`../public/images/${filename}`, import.meta.url));
  }
  const pages = await Promise.all(routes.map((route) => readFile(new URL(`../app/${route}`, import.meta.url), "utf8")));
  const imageSources = [...pages.join("\n").matchAll(/src="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(imageSources.length > 0);
  assert.ok(imageSources.every((source) => source.startsWith("/images/")));
});
