import PropTypes from "prop-types";

const Contact = ({ currentSectionIndex }) => {
  return (
    <div className="h-screen w-screen bg-light flex flex-col items-center justify-center">
      <div className="relative h-full flex flex-col items-center">
        <span
          className={`text-medium absolute bottom-20 transition-all duration-1000 ${
            currentSectionIndex === 2
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
  currentSectionIndex: PropTypes.number,
};

export default Contact;
