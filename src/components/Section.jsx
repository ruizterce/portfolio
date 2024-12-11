import PropTypes from "prop-types";
import { useSpring, animated } from "@react-spring/web";

const Section = ({ id, children, bgColor }) => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });

  return (
    <animated.div
      className={`h-screen w-screen flex items-center justify-center ${
        bgColor ? "" : "bg-white"
      } text-gray-800`}
      style={{ ...springs, backgroundColor: bgColor || "#fff" }}
      id={id}
    >
      {children}
    </animated.div>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Section;
