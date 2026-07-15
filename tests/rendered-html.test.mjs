import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders every public salon page", async () => {
  for (const pathname of ["/", "/services", "/team", "/journal", "/book"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, /Carli &amp; Co\.|Carli &amp; Co/i);
    assert.match(html, /Book a visit/i);
  }
});

test("ships the finished brand and local image library", async () => {
  const [layout, page, packageJson] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(layout + page, /codex-preview|SkeletonPreview|Your site is taking shape/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));

  for (const filename of [
    "hero-cut.webp", "blowdry.webp", "salon-stations.webp", "salon-portrait.webp",
    "precision-cut.webp", "hair-texture.webp", "product-pedestal.webp", "product-shelf.webp",
  ]) {
    await access(new URL(`../public/images/${filename}`, import.meta.url));
  }
  await access(new URL("../public/og.png", import.meta.url));
});
