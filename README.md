# Alex Pereyra · Frontend Developer

Portfolio personal de Alex Pereyra, basado en Málaga. Incluye casos de estudio, experiencia, una muestra de producción creativa y un CV imprimible en español e inglés.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
```

El sitio se genera con Astro y se publica en Vercel. La selección y los casos de estudio viven en `src/data/portfolio.ts`. El CV comparte los datos de experiencia en español y reúne sus traducciones en `src/data/cv.ts`.

La muestra HTML5 y GSAP vive en `src/pages/produccion-creativa.astro`. Las rutas anteriores de proyectos retirados y CV se conservan con redirecciones en `vercel.json`.
