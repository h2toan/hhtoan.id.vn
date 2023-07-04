import Image from "next/image";
import AvatarPic from "../../public/avatar.webp";
import Link from "next/link";

export default function Avatar({ setActiveIndex }) {
  return (
    <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="relative">
              <Link
                href="/"
                className="block h-16 w-16 origin-left pointer-events-auto"
                onClick={() => setActiveIndex(0)}
              >
                <Image
                  src={AvatarPic}
                  alt="Avatar Picture"
                  width={500}
                  height={500}
                  className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
