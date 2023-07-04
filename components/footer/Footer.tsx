import CopyRight from "./CopyRight";
import FooterMenu from "./FooterMenu";

export default function Footer({ setActiveIndex }) {
  return (
    <footer className="mt-32">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <FooterMenu setActiveIndex={setActiveIndex}></FooterMenu>
                  <CopyRight></CopyRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
