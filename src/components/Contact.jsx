import PropTypes from "prop-types";

const Contact = ({ isCurrentSection }) => {
  return (
    <div className="h-screen w-screen bg-light flex flex-col items-center justify-center">
      <h1
        className={`absolute text-3xl font-nunito font-black text-secondary translate-y-[-180px] transition-all duration-700 ease-in-out ${
          isCurrentSection ? "" : "-translate-y-[3000px] scale-0 opacity-0"
        }`}
      >
        Contact
      </h1>
      <span
        className={`text-medium transition-all duration-1000 ${
          isCurrentSection
            ? "opacity-1 translate-y-60 sm:translate-y-72"
            : "scale-0 opacity-0 -translate-y-16"
        }`}
      >
        ruiz.terce@gmail.com
      </span>
    </div>
  );
};

Contact.propTypes = {
  isCurrentSection: PropTypes.bool,
};

export default Contact;
