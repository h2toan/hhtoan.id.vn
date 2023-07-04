import NavLink from "./NavLink";

export default function Navigator({ activeIndex, setActiveIndex }) {
  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <div className="pointer-events-auto md:hidden" data-headlessui-state="">
        <button
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          type="button"
          aria-expanded="false"
          data-headlessui-state=""
          id="headlessui-popover-button-:R2qb6:"
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
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
    </div>
  );
}
