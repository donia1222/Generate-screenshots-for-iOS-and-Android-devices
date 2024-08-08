import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_BZo9tnJG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Android = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import UploadImageAndroid from '../components/UploadImageAndroid.jsx';
import '../styles/styles.css'
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generar Capturas de Pantalla para las Resoluciones Requeridas por Android</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">iOS</a></li>
        <li><a href="/android">Android</a></li>
      </ul>
    </nav>
    <main>
      <UploadImageAndroid client:load />
    </main>
  </body>
</html>`;
}, "/Users/roberto/lunar-luminosity/src/pages/android.astro", void 0);

const $$file = "/Users/roberto/lunar-luminosity/src/pages/android.astro";
const $$url = "/android";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Android,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
