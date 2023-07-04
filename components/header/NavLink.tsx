import Link from "next/link";
export default function NavLink({ href, children, isActive, handleOnClick }) {
  return isActive ? (
    <li>
      <Link
        className="relative block px-3 py-2 transition text-teal-500 dark:hover:text-teal-400"
        href={href}
        onClick={handleOnClick}
      >
        {children}
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
      </Link>
    </li>
  ) : (
    <li>
      <Link
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
        href={href}
        onClick={handleOnClick}
      >
        {children}
      </Link>
    </li>
  );
}
