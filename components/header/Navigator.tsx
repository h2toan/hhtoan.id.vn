import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navigator({ activeIndex, setActiveIndex }) {
  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <div className="pointer-events-auto md:hidden">
        <NavMobile></NavMobile>
      </div>
      <NavDesktop
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></NavDesktop>
    </div>
  );
}
