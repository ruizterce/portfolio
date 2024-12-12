import { useState } from "react";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import Topbar from "./components/TopBar";
import useScrollNavigation from "./hooks/useScrollNavigation";
import Welcome from "./components/Welcome";
import CardSlideshow from "./components/CardSlideshow";

const sections = ["section1", "section2", "section3", "section4"];

function App() {
  const { currentSectionIndex, scrollToSection } =
    useScrollNavigation(sections);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={"overflow-hidden" + (isDarkMode ? " dark-mode" : "")}>
      <Topbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Navbar
        currentSectionIndex={currentSectionIndex}
        scrollToSection={scrollToSection}
      />

      <Section id="section1">
        <Welcome />
      </Section>
      <Section id="section2">
        <div className="h-full w-full bg-light text-dark flex flex-col items-center justify-center">
          <CardSlideshow />
        </div>
      </Section>
      <Section id="section3">
        <div className="h-full w-full bg-light text-dark flex flex-col items-center justify-center">
          <h1>Contact</h1>
          <p> Get in touch!</p>
        </div>
      </Section>
      <Section id="section4">
        <div className="h-full w-full bg-light text-dark flex flex-col items-center justify-center">
          <h1>More</h1>
          <p> More stuff!</p>
        </div>
      </Section>
    </div>
  );
}

export default App;
