import PropTypes from "prop-types";

const Navbar = ({ currentSectionIndex, scrollToSection }) => {
  const sections = ["Welcome", "About Me", "Contact", "More"];

  return (
    <nav className="fixed top-0 z-[1000] p-4">
      <ul className="flex flex-col justify-center list-none m-0 p-0">
        {sections.map((section, index) => (
          <li key={section} className="mx-4">
            <button
              onClick={() => scrollToSection(index)}
              className={`bg-none border-none cursor-pointer text-lg ${
                currentSectionIndex === index ? "text-red-700" : "text-gray-800"
              }`}
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
