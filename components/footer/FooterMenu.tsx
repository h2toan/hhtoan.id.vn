import FooterLink from "./FooterLink";

export default function FooterMenu({ setActiveIndex }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
      <FooterLink
        href="/about"
        handleOnClick={() => {
          setActiveIndex(1);
        }}
      >
        About
      </FooterLink>
      <FooterLink
        href="/articles"
        handleOnClick={() => {
          setActiveIndex(2);
        }}
      >
        Articles
      </FooterLink>
    </div>
  );
}
