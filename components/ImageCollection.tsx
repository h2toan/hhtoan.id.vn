import FeaturedImage from "./FeaturedImage";
import Pic1 from "../public/image-1.webp";
import Pic2 from "../public/image-2.webp";
import Pic3 from "../public/image-3.webp";
import Pic4 from "../public/image-4.webp";
import Pic5 from "../public/image-5.webp";

export default function ImageCollection() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <FeaturedImage image={Pic1} rotate={"rotate-2"}></FeaturedImage>
        <FeaturedImage image={Pic2} rotate={"-rotate-2"}></FeaturedImage>
        <FeaturedImage image={Pic3} rotate={"rotate-2"}></FeaturedImage>
        <FeaturedImage image={Pic4} rotate={"rotate-2"}></FeaturedImage>
        <FeaturedImage image={Pic5} rotate={"-rotate-2"}></FeaturedImage>
      </div>
    </div>
  );
}
