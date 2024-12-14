import { useState } from "react";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import Topbar from "./components/TopBar";
import useScrollNavigation from "./hooks/useScrollNavigation";
import Welcome from "./components/Welcome";
import CardSlideshow from "./components/CardSlideshow";
import SocialBar from "./components/SocialBar";

const sections = ["section1", "section2", "section3", "section4"];

function App() {
  const { currentSectionIndex, scrollToSection } =
    useScrollNavigation(sections);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={
        "overflow-hidden nunitoSans" + (isDarkMode ? " dark-mode" : "")
      }
    >
      <Topbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SocialBar
        currentSectionIndex={currentSectionIndex}
        isDarkMode={isDarkMode}
      />
      <Navbar
        currentSectionIndex={currentSectionIndex}
        scrollToSection={scrollToSection}
      />

      <Section id="section1">
        <Welcome />
      </Section>
      <Section id="section2">
        <div className="h-screen w-screen bg-light text-dark flex flex-col items-center justify-center">
          <CardSlideshow
            currentSectionIndex={currentSectionIndex}
            isDarkMode={isDarkMode}
          />
        </div>
      </Section>
      <Section id="section3">
        <div className="h-screen w-screen bg-light flex flex-col items-center justify-center">
          <div className="relative h-full flex flex-col items-center">
            <span
              className={`text-medium absolute bottom-20 transition-all duration-1000 ${
                currentSectionIndex === 2
                  ? "opacity-1 translate-y-12"
                  : "scale-0 opacity-0 -translate-y-12"
              }`}
            >
              ruiz.terce@gmail.com
            </span>
          </div>
        </div>
      </Section>
      <Section id="section4">
        <div className="h-screen w-screen bg-light text-dark flex flex-col items-center justify-center">
          <h1>More</h1>
          <p> More stuff!</p>
        </div>
      </Section>
    </div>
  );
}

export default App;
