import PropTypes from "prop-types";
import { useSpring, animated } from "@react-spring/web";

const Section = ({ id, children }) => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });

  return (
    <animated.div
      className="h-screen w-screen flex items-center justify-center"
      style={springs}
      id={id}
    >
      {children}
    </animated.div>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
