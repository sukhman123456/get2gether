// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

try {
  const logoSrc = "C:/Users/hp/.gemini/antigravity-ide/brain/47bb9a3b-1326-4ece-8c50-9f718f6b772b/.user_uploaded/media_1789199140760.jpg";
  const destAssets = path.resolve("src/assets/get2gather-official-logo.jpg");
  const destPublic = path.resolve("public/get2gather-official-logo.jpg");
  if (fs.existsSync(logoSrc)) {
    fs.copyFileSync(logoSrc, destAssets);
    fs.copyFileSync(logoSrc, destPublic);
  }

  const founderSrc = "C:/Users/hp/.gemini/antigravity-ide/brain/be53994c-69c5-4419-a4e8-be6a05ce264d/.user_uploaded/media_1789219422573.jpg";
  const destFounderAssets = path.resolve("src/assets/maninder-singh-founder.jpg");
  const destFounderPublic = path.resolve("public/maninder-singh-founder.jpg");
  if (fs.existsSync(founderSrc)) {
    fs.copyFileSync(founderSrc, destFounderAssets);
    fs.copyFileSync(founderSrc, destFounderPublic);
  }

  const tasteImages = [
    {
      src: "C:/Users/hp/.gemini/antigravity-ide/brain/06341115-226d-4cca-a485-ef81734d8941/fiery_tandoori_sizzler_1789225823952.jpg",
      name: "taste-tandoori-sizzler.jpg",
    },
    {
      src: "C:/Users/hp/.gemini/antigravity-ide/brain/06341115-226d-4cca-a485-ef81734d8941/rich_dum_biryani_1789225846681.jpg",
      name: "taste-dum-biryani.jpg",
    },
    {
      src: "C:/Users/hp/.gemini/antigravity-ide/brain/06341115-226d-4cca-a485-ef81734d8941/artisan_stone_pizza_1789226253246.jpg",
      name: "taste-stone-pizza.jpg",
    },
    {
      src: "C:/Users/hp/.gemini/antigravity-ide/brain/06341115-226d-4cca-a485-ef81734d8941/botanical_mocktail_1789226276697.jpg",
      name: "taste-botanical-mocktail.jpg",
    },
  ];

  for (const img of tasteImages) {
    if (fs.existsSync(img.src)) {
      fs.copyFileSync(img.src, path.resolve(`src/assets/${img.name}`));
      fs.copyFileSync(img.src, path.resolve(`public/${img.name}`));
    }
  }
} catch (err) {
  console.warn("Asset sync warning:", err);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
