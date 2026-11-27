# Alex Pereyra · Frontend Developer

Portfolio personal de Alex Pereyra, basado en Málaga. Incluye casos de estudio, experiencia, un laboratorio de movimiento y un CV imprimible en español e inglés.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
```

El sitio se genera con Astro y se publica en Vercel. La selección y los casos de estudio viven en `src/data/portfolio.ts`. El CV comparte los datos de experiencia en español y reúne sus traducciones en `src/data/cv.ts`.

Las demos de GSAP enlazadas desde el laboratorio viven en `public/demos`. Las rutas anteriores de proyectos retirados y CV se conservan con redirecciones en `vercel.json`.
