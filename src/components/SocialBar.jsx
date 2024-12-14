import PropTypes from "prop-types";

const SocialBar = ({ currentSectionIndex, isDarkMode }) => {
  const isCol = currentSectionIndex === 0 || currentSectionIndex === 3; // Transform into column
  const isContactSection = currentSectionIndex === 2; // Transform into contact section

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-screen flex flex-col justify-start items-end transition-transform duration-500 origin-center opacity-50 ${
        isContactSection ? "translate-y-1/2 -translate-x-1/2" : ""
      }`}
    >
      <nav
        className={`z-[1000] flex flex-wrap flex-row-reverse  w-[72px] sm:w-[88px] gap-2 transition-transform duration-1000  origin-center relative left-[36px] sm:left-[44px]
          ${
            isContactSection
              ? ""
              : "translate-y-4 -translate-x-14 sm:-translate-x-20"
          }
        `}
      >
        <button
          onClick={() => {
            window.open("https://github.com/ruizterce/");
          }}
          className={`h-8 w-8 sm:h-10 sm:w-10 transition-all duration-500 origin-center hover:drop-shadow-primary ${
            isContactSection
              ? "translate-x-16 sm:translate-x-20 -translate-y-20 scale-[3] hover:scale-x-[4] hover:scale-y-[4] drop-shadow-lg"
              : ""
          }`}
        >
          <img
            src="/icons/github-original.svg"
            className={`transition-all duration-700 ${
              isDarkMode ? "invert" : ""
            }`}
          ></img>
        </button>
        <button
          onClick={() => {
            window.open("mailto:ruiz.terce@gmail.com");
          }}
          className={`h-8 w-8 sm:h-10 sm:w-10 transition-all duration-500 origin-center hover:drop-shadow-primary ${
            isCol
              ? " translate-y-10 translate-x-10 sm:translate-y-12 sm:translate-x-12"
              : ""
          } ${
            isContactSection
              ? "-translate-x-16 sm:-translate-x-20 -translate-y-20 scale-[3] hover:scale-x-[4] hover:scale-y-[4] drop-shadow-lg"
              : ""
          }`}
        >
          <img
            src="/icons/mail.svg"
            className={`transition-all duration-700 ${
              isDarkMode ? "invert" : ""
            }`}
          ></img>
        </button>
        <button
          onClick={() => {
            window.open("https://www.linkedin.com/in/manuel-ruiz-tercedor/");
          }}
          className={`h-8 w-8 sm:h-10 sm:w-10 transition-all duration-500 origin-center hover:drop-shadow-primary ${
            isCol ? "translate-y-10 sm:translate-y-12" : ""
          } ${
            isContactSection
              ? "translate-x-16 sm:translate-x-20 translate-y-20 scale-[3] hover:scale-x-[4] hover:scale-y-[4] drop-shadow-lg"
              : ""
          }`}
        >
          <img
            src="/icons/linkedin-plain.svg"
            className={`transition-all duration-700 ${
              isDarkMode ? "invert" : ""
            }`}
          ></img>
        </button>{" "}
        <button
          onClick={() => {
            window.open("https://discord.com/users/ruizterce");
          }}
          className={`h-8 w-8 sm:h-10 sm:w-10 transition-all duration-500 origin-center hover:drop-shadow-primary ${
            isCol
              ? "translate-y-20 translate-x-10 sm:translate-y-24 sm:translate-x-12"
              : ""
          } ${
            isContactSection
              ? "-translate-x-16 sm:-translate-x-20 translate-y-20 scale-[3] hover:scale-x-[4] hover:scale-y-[4] drop-shadow-lg"
              : ""
          }`}
        >
          <img
            src="/icons/discord-mark-black.svg"
            className={`transition-all duration-700 ${
              isDarkMode ? "invert" : ""
            }`}
          ></img>
        </button>
      </nav>
    </div>
  );
};

SocialBar.propTypes = {
  currentSectionIndex: PropTypes.number,
  isDarkMode: PropTypes.bool,
};

export default SocialBar;
