import Navigator from "./Navigator";
import DarkModeToggle from "./DarkModeToggle";

export default function MenuWrapper({ activeIndex, setActiveIndex }) {
  return (
    <div className="top-0 z-10 h-16 pt-6">
      <div className="sm:px-8 w-full">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex gap-4">
                <div className="flex flex-1"></div>
                <Navigator
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                ></Navigator>
                <DarkModeToggle></DarkModeToggle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
