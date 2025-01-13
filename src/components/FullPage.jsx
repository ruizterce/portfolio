import { useState } from "react";
import Navbar from "./NavBar";
import Section from "./Section";
import Topbar from "./TopBar";
import useScrollNavigation from "../hooks/useScrollNavigation";
import Welcome from "./Welcome";
import CardSlideshow from "./CardSlideshow";
import SocialBar from "./SocialBar";
import Contact from "./Contact";
import Resume from "./Resume";
import CustomCursor from "./CustomCursor";
const sections = ["Welcome", "Projects", "Contact", "Resume"];

const FullPage = () => {
  const { currentSectionIndex, scrollToSection } =
    useScrollNavigation(sections);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={
        "overflow-hidden nunitoSans" + (isDarkMode ? " dark-mode" : "")
      }
    >
      <CustomCursor />
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
};

export default FullPage;
