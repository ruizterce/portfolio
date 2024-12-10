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
      style={{
        ...springs,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor || "#fff",
        color: "#333",
      }}
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
