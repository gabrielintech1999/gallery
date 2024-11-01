// import Link from "next/link";

import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // search later




export default async function Page() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });
  return (
    <main>
      <div>
        <div className="flex flex-wrap gap-8">
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.url} className="h-auto" alt="gallery" />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
