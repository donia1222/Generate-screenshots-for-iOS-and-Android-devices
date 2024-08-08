import sharp from 'sharp';
import { promises } from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const resolutions = {
  iphone65: { width: 1242, height: 2688 },
  iphone67: { width: 1284, height: 2778 },
  iphone55: { width: 1242, height: 2208 },
  ipad13: { width: 2048, height: 2732 },
  ipad11: { width: 1668, height: 2388 }
};

async function post({ request }) {
  const data = await request.formData();
  const file = data.get('image');
  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadsDir = path.join(process.cwd(), 'public/uploads');
  await promises.mkdir(uploadsDir, { recursive: true });

  const imageUrls = [];

  const promises$1 = Object.entries(resolutions).map(async ([device, { width, height }]) => {
    const outputFilePath = path.join(uploadsDir, `${device}-${file.name}`);
    await sharp(buffer)
      .resize(width, height)
      .toFile(outputFilePath);

    imageUrls.push(`/uploads/${device}-${file.name}`);
  });

  await Promise.all(promises$1);

  return new Response(JSON.stringify({ message: 'Imagen subida y procesada con éxito.', urls: imageUrls }), { status: 200 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
