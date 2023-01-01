/* Purpose
  Firebase needs certain rewrite rules in place, in order to function properly with
  Next.js' static routing. This only applies to statically generated Next.js
  projects (i.e. built by 'next build' 'next export')
  
  Inspired by the discussion at:
  https://github.com/firebase/firebase-js-sdk/discussions/4980
*/

import fsProm from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

console.info('Assumes you have already ran "next build && next export"');

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const projectRootPath = path.join(_dirname, '..');
const routeManifestPath = path.join(projectRootPath, '.next', 'routes-manifest.json');
const firebaseJsonPath = path.join(projectRootPath, 'firebase.json');

const routeManifestTxt = await fsProm.readFile(routeManifestPath, 'utf8');
const routeManifest = JSON.parse(routeManifestTxt);

const modifiedRoutes = routeManifest.dynamicRoutes.map(({ page, regex }) => {
  const destination = `${page}/index.html`;
  return {
    destination,
    regex,
  };
});

const allRoutes = routeManifest.staticRoutes.map(({ page }) => {
  const destination = `${page}/index.html`;
  return {
    source: page,
    destination,
  };
});

allRoutes.push({
  source: '**',
  destination: '/index.html',
});

const firebaseJsonTxt = await fsProm.readFile(firebaseJsonPath, 'utf8');
const firebaseJson = JSON.parse(firebaseJsonTxt);

firebaseJson.hosting.forEach((host) => (host.rewrites = [...modifiedRoutes, ...allRoutes]));

const firebaseJsonModTxt = JSON.stringify(firebaseJson, null, 2);
await fsProm.writeFile(firebaseJsonPath, firebaseJsonModTxt, 'utf8');

console.info('firebaseJsonModTxt', firebaseJsonModTxt);
