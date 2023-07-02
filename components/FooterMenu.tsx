export default function FooterMenu() {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
      <a
        className="transition hover:text-teal-500 dark:hover:text-teal-400"
        href="/about"
      >
        About
      </a>
      <a
        className="transition hover:text-teal-500 dark:hover:text-teal-400"
        href="/projects"
      >
        Projects
      </a>
      <a
        className="transition hover:text-teal-500 dark:hover:text-teal-400"
        href="/speaking"
      >
        Speaking
      </a>
      <a
        className="transition hover:text-teal-500 dark:hover:text-teal-400"
        href="/uses"
      >
        Uses
      </a>
    </div>
  );
}
