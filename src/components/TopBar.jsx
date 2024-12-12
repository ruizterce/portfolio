import PropTypes from "prop-types";

const Topbar = ({ isDarkMode, setIsDarkMode }) => {
  const handleDarkToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed top-4 w-full flex justify-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          id="darkToggle"
          type="checkbox"
          onChange={handleDarkToggle}
          value={isDarkMode}
          className="sr-only peer"
        ></input>
        <div className="relative w-11 h-6 left-2 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-medium  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lightMedium"></div>
      </label>
    </div>
  );
};

Topbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Topbar;
