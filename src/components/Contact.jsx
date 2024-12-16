import PropTypes from "prop-types";

const Contact = ({ isCurrentSection }) => {
  return (
    <div className="h-screen w-screen bg-light flex flex-col items-center justify-center">
      <h1
        className={`absolute text-3xl font-nunito font-bold text-secondary translate-y-[-160px] transition-all duration-1000 ease-out ${
          isCurrentSection ? "" : "scale-0 opacity-0"
        }`}
      >
        Contact
      </h1>
      <div className="relative h-full flex flex-col items-center">
        <span
          className={`text-medium absolute bottom-20 transition-all duration-1000 ${
            isCurrentSection
              ? "opacity-1 translate-y-12"
              : "scale-0 opacity-0 -translate-y-12"
          }`}
        >
          ruiz.terce@gmail.com
        </span>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isCurrentSection: PropTypes.bool,
};

export default Contact;
