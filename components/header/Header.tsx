import Avatar from "./Avatar";
import MenuWrapper from "./MenuWrapper";

export default function Header({ activeIndex, setActiveIndex }) {
  return (
    <header>
      <MenuWrapper
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      ></MenuWrapper>
      <Avatar setActiveIndex={setActiveIndex}></Avatar>
    </header>
  );
}
