import PropTypes from "prop-types";

const Navbar = ({ currentSectionIndex, scrollToSection }) => {
  const sections = ["Welcome", "Projects", "Contact", "More"];

  return (
    <div className="fixed flex h-screen items-start">
      <nav className="top-0 z-[1000] p-4">
        <ul className="flex flex-col justify-center list-none m-0 p-0">
          {sections.map((section, index) => (
            <li key={section} className="mx-4">
              <button
                onClick={() => scrollToSection(index)}
                className={`bg-none border-none cursor-pointer text-lg w-full flex justify-end items-center gap-2 ${
                  currentSectionIndex === index
                    ? "text-dark"
                    : "text-lightMedium"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
                <span
                  className={`h-2 w-2  rounded inline-block ${
                    currentSectionIndex === index
                      ? "bg-dark ring ring-medium"
                      : "ring ring-2 ring-lightMedium"
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  currentSectionIndex: PropTypes.number.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
