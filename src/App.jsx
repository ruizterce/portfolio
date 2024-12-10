import Navbar from "./components/NavBar";
import Section from "./components/Section";
import useScrollNavigation from "./hooks/useScrollNavigation";

const sections = ["section1", "section2", "section3", "section4"];

function App() {
  const { currentSectionIndex, scrollToSection } =
    useScrollNavigation(sections);

  return (
    <div>
      <Navbar
        currentSectionIndex={currentSectionIndex}
        scrollToSection={scrollToSection}
      />
      <Section id="section1" bgColor="#ffadad">
        <div style={{ textAlign: "center" }}>
          <h1>Welcome!</h1>
          <p> Scroll down for more!</p>
        </div>
      </Section>
      <Section id="section2" bgColor="#ffd6a5">
        <div style={{ textAlign: "center" }}>
          <h1>About us</h1>
          <p> Something about us</p>
        </div>
      </Section>
      <Section id="section3" bgColor="#fdffb6">
        <div style={{ textAlign: "center" }}>
          <h1>Contact</h1>
          <p> Get in touch!</p>
        </div>
      </Section>
      <Section id="section4" bgColor="#fdffdf">
        <div style={{ textAlign: "center" }}>
          <h1>More</h1>
          <p> More stuff!</p>
        </div>
      </Section>
    </div>
  );
}

export default App;
