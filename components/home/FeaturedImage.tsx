import Image from "next/image";

export default function FeaturedImage({ image, rotate }) {
  return (
    <div
      className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${rotate}`}
    >
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src={image}
        alt="Featured Image 1"
      ></Image>
    </div>
  );
}
