import { useState } from "react";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import Topbar from "./components/TopBar";
import useScrollNavigation from "./hooks/useScrollNavigation";
import Welcome from "./components/Welcome";
import CardSlideshow from "./components/CardSlideshow";
import SocialBar from "./components/SocialBar";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const sections = ["Welcome", "Projects", "Contact", "Resume"];

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
        sections={sections}
        currentSectionIndex={currentSectionIndex}
        scrollToSection={scrollToSection}
      />

      <Section id="Welcome">
        <Welcome
          isCurrentSection={currentSectionIndex === 0}
          isDarkMode={isDarkMode}
        />
      </Section>
      <Section id="Projects">
        <CardSlideshow
          isCurrentSection={currentSectionIndex === 1}
          isDarkMode={isDarkMode}
        />
      </Section>
      <Section id="Contact">
        <Contact isCurrentSection={currentSectionIndex === 2} />
      </Section>
      <Section id="Resume">
        <Resume
          isCurrentSection={currentSectionIndex === 3}
          isDarkMode={isDarkMode}
        />
      </Section>
    </div>
  );
}

export default App;
