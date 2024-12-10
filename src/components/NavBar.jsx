import PropTypes from "prop-types";

const Navbar = ({ currentSectionIndex, scrollToSection }) => {
  const sections = ["Welcome", "About Me", "Contact", "More"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        padding: "1rem",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {sections.map((section, index) => (
          <li key={section} style={{ margin: "0 1rem" }}>
            <button
              onClick={() => scrollToSection(index)}
              style={{
                background: "none",
                border: "none",
                color: currentSectionIndex === index ? "#6b0000" : "#363636",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  currentSectionIndex: PropTypes.number.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
