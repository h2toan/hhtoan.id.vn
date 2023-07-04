import Link from "next/link";
export default function FooterLink({ href, handleOnClick, children }) {
  return (
    <Link
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
      href={href}
      onClick={handleOnClick}
    >
      {children}
    </Link>
  );
}
