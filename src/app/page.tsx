// import Link from "next/link";

const urlsImages = [
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
  "https://utfs.io/f/FnSxuIF3dG16rmLFoiA1I8gVveKUMlBFYaOP5CuhZSRfTXjJ",
];

const photos = urlsImages.map((url, index) => (
  {
    id: index,
    url,
  }
));

export default function HomePage() {
  return (
    <main>
       <header className="bg-black text-white text-center p-4 uppercase mb-4">
        <h1>Gallery</h1>
      </header> 
      <div>
        <div className="flex flex-wrap gap-8">
          {photos.map((photo) => (
            <img src={photo.url} key={photo.id} className=" h-auto" alt="gallery" />
          ))}
        </div>
      </div>
    </main>
  );
}
