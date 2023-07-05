import NavMobileLink from "./NavMobileLink";
export default function NavMobileMenu({ setIsNavMobileOpen }) {
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100"
        onClick={() => {
          setIsNavMobileOpen(false);
        }}
      ></div>
      <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            className="-m-1 p-1"
            type="button"
            onClick={() => {
              setIsNavMobileOpen(false);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
            >
              <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <NavMobileLink
              href={"/about"}
              setIsNavMobileOpen={setIsNavMobileOpen}
            >
              About
            </NavMobileLink>
            <NavMobileLink
              href={"/articles"}
              setIsNavMobileOpen={setIsNavMobileOpen}
            >
              Articles
            </NavMobileLink>
          </ul>
        </nav>
      </div>
    </>
  );
}
