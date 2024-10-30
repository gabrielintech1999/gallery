// import Link from "next/link";

import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // search later

const urlsImages = [
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
];

const photos = urlsImages.map((url, index) => ({
  id: index,
  url,
}));

export default async function Page() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      <header className="mb-4 bg-black p-4 text-center uppercase text-white">
        <h1>Gallery</h1>
      </header>
      <div>
        <div className="flex flex-wrap gap-8">
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.name}</h2>
              </div>
            ))}
          </div>
          {photos.map((photo) => (
            <img
              src={photo.url}
              key={photo.id}
              className="h-auto"
              alt="gallery"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
