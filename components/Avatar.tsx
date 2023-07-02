import Image from "next/image";
import AvatarPic from "../public/avatar.webp";

export default function Avatar() {
  return (
    <div className="sm:px-8 top-0 order-last -mb-3 pt-3">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="relative">
              <a
                href="/"
                className="block h-16 w-16 origin-left pointer-events-auto"
              >
                {" "}
                <Image
                  src={AvatarPic}
                  alt="Avatar Picture"
                  width={500}
                  height={500}
                  className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
