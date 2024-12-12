import { Tilt } from "react-tilt";

const Welcome = () => {
  const tiltOptions = {
    reverse: true,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 3000,
    transition: true,
    axis: null,
    reset: false,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div className="h-full w-full bg-light text-dark flex flex-col items-center justify-center">
      <Tilt
        options={tiltOptions}
        className="h-full w-full flex justify-center items-center"
      >
        <div className="m-6 text-center w-80 leading-10">
          <h1>Welcome!</h1>
          <p>
            <span className="text-6xl">ruizterce </span>is a passionate
            <span className="text-2xl"> Full Stack Dev</span> based in
            <span className="text-4xl"> Barcelona, Spain</span>
          </p>
        </div>
      </Tilt>
    </div>
  );
};

export default Welcome;
