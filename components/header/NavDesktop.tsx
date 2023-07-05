import NavLink from "./NavLink";
export default function NavDesktop({ activeIndex, setActiveIndex }) {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavLink
          href="/about"
          isActive={activeIndex === 1}
          handleOnClick={() => {
            setActiveIndex(1);
          }}
        >
          About
        </NavLink>
        <NavLink
          href="/articles"
          isActive={activeIndex === 2}
          handleOnClick={() => {
            setActiveIndex(2);
          }}
        >
          Articles
        </NavLink>
      </ul>
    </nav>
  );
}
