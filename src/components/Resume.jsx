import PropTypes from "prop-types";

const Resume = ({ isDarkMode }) => {
  const openResume = () => {
    window.open("files/Cv 2025 English.pdf", "_blank");
  };

  return (
    <div className="h-screen w-screen bg-light text-dark flex flex-col items-center justify-center">
      <div className="absolute h-full w-full flex flex-col items-center justify-center">
        <img
          onClick={openResume}
          src={`/img/Cv 2025 English-${isDarkMode ? "dark-" : ""}p.svg`}
          alt="resume"
          className={`sm:h-2/3 sm:w-auto h-auto w-2/3 shadow-xl cursor-pointer transition-all duration-500 hover:drop-shadow-primary hover:scale-[1.2] ${
            isDarkMode ? "border border-1px" : ""
          }`}
        />
      </div>
    </div>
  );
};

Resume.propTypes = {
  isDarkMode: PropTypes.bool,
};

export default Resume;
