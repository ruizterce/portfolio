import PropTypes from "prop-types";

const Navbar = ({ sections, currentSectionIndex, scrollToSection }) => {
  return (
    <div className="fixed z-[1000] flex h-screen items-start">
      <nav className="top-0 p-4">
        <ul className="flex flex-col justify-center list-none">
          {sections.map((section, index) => (
            <li key={section} className="mx-1 sm:mx-4">
              <button
                onClick={() => scrollToSection(index)}
                className={`bg-none border-none cursor-pointer text-lg w-full flex justify-end items-center gap-2 transition-all duration-500 ${
                  currentSectionIndex === index
                    ? "text-dark translate-x-1 sm:scale-[1.1]"
                    : "text-lightMedium"
                }`}
              >
                <span className="hidden sm:block">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>

                <span
                  className={` h-1 w-1 sm:h-2 sm:w-2 my-1 sm:my-2 rounded inline-block ${
                    currentSectionIndex === index
                      ? "bg-primary ring ring-medium"
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
  sections: PropTypes.array.isRequired,
  currentSectionIndex: PropTypes.number.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
