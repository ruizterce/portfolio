import PropTypes from "prop-types";

const Section = ({ id, children }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center" id={id}>
      {children}
    </div>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
