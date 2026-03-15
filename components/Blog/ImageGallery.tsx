type Image = {
  src: string;
  caption?: string;
};

export default function ImageGallery({ images }: { images: Image[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <div key={index} className="border rounded-xl overflow-hidden">
          <img
            src={img.src}
            alt={img.caption || "project image"}
            className="w-full h-48 object-cover"
          />
          {img.caption && (
            <p className="p-3 text-sm text-gray-600">{img.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
}
