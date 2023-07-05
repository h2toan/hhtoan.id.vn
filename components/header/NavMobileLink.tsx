import Link from "next/link";

export default function NavMobileLink({ href, children, setIsNavMobileOpen }) {
  return (
    <li>
      <Link
        className="block py-2"
        href={href}
        onClick={() => {
          setIsNavMobileOpen(false);
        }}
      >
        {children}
      </Link>
    </li>
  );
}
