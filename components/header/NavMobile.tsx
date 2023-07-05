import { useState } from "react";
import NavMobileMenu from "./NavMobileMenu";
import NavMobileOpenButton from "./NavMobileOpenButton";

export default function NavMobile() {
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  return isNavMobileOpen ? (
    <>
      <NavMobileOpenButton
        setIsNavMobileOpen={setIsNavMobileOpen}
      ></NavMobileOpenButton>
      <NavMobileMenu setIsNavMobileOpen={setIsNavMobileOpen}></NavMobileMenu>
    </>
  ) : (
    <NavMobileOpenButton
      setIsNavMobileOpen={setIsNavMobileOpen}
    ></NavMobileOpenButton>
  );
}
