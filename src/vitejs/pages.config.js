import { resolve } from "path";

export const pagesList = [
  { name: "main", path: resolve(__dirname, "../index.html") },
  { name: "about", path: resolve(__dirname, "../pages/about/index.html") },
  { name: "team", path: resolve(__dirname, "../pages/team/index.html") },
];

const pages = {};
pagesList.forEach(({ name, path }) => (pages[name] = path));

export { pages };
