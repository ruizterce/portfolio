import { Tilt } from "react-tilt";
import { useState, useRef } from "react";

const Welcome = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [showCard, setshowCard] = useState(false);
  const timeoutId = useRef(null);

  const hoverContent = {
    ruizterce: (
      <h1>
        As an Industrial Design and Product Development engineer, I started my
        career in the field of 3D printing. Over the years, I’ve taken on roles
        in product development, technical support, teaching, and plant
        management, gaining both technical and leadership skills. Witnessing the
        vast potential of web technologies to drive innovation, I found my
        passion in web development, where I now focus on creating impactful and
        scalable solutions.
      </h1>
    ),
    "Full Stack Dev": (
      <div className="grid grid-cols-3 gap-4">
        <img
          src="/icons/git-plain-wordmark.svg"
          alt="Git"
          className="h-16 w-auto"
        />
        <img
          src="/icons/html5-plain-wordmark.svg"
          alt="HTML5"
          className="h-16 w-auto"
        />
        <img
          src="/icons/css3-plain-wordmark.svg"
          alt="CSS3"
          className="h-16 w-auto"
        />
        <img
          src="/icons/javascript-plain.svg"
          alt="JavaScript"
          className="h-16 w-auto"
        />
        <img
          src="/icons/typescript-plain.svg"
          alt="TypeScript"
          className="h-16 w-auto"
        />
        <img
          src="/icons/vitejs-plain.svg"
          alt="Vite"
          className="h-16 w-auto darkTheme:invert"
        />
        <img
          src="/icons/ionic-original-wordmark.svg"
          alt="Ionic"
          className="h-16 w-auto"
        />
        <img
          src="/icons/react-original-wordmark.svg"
          alt="React"
          className="h-16 w-auto"
        />
        <img
          src="/icons/tailwindcss-plain-wordmark.svg"
          alt="TailwindCSS"
          className="h-16 w-auto darkTheme:invert"
        />
        <img
          src="/icons/axios-plain-wordmark.svg"
          alt="Axios"
          className="h-16 w-auto"
        />
        <img
          src="/icons/postman-plain-wordmark.svg"
          alt="Postman"
          className="h-16 w-auto"
        />
        <img
          src="/icons/nodejs-plain-wordmark.svg"
          alt="Node.js"
          className="h-16 w-auto"
        />
        <img
          src="/icons/postgresql-original-wordmark.svg"
          alt="PostgreSQL"
          className="h-16 w-auto darkTheme:invert"
        />
        <img
          src="/icons/prisma-original-wordmark.svg"
          alt="Prisma"
          className="h-16 w-auto darkTheme:invert"
        />
        <img
          src="/icons/express-original-wordmark.svg"
          alt="Express"
          className="h-16 w-auto darkTheme:invert"
        />
      </div>
    ),
    Barcelona: (
      <div className="grid grid-cols-3 gap-2">
        <img
          src="/icons/barcelona-sagrada.svg"
          alt="Sagrada Familia"
          className="h-16 w-auto darkTheme:invert"
        />
        <img src="/icons/es-ct.svg" alt="Catalonia" className="h-16 w-auto" />
        <img src="/icons/es.svg" alt="Spain" className="h-16 w-auto" />
      </div>
    ),
  };

  const handleMouseEnter = (word, event) => {
    clearTimeout(timeoutId.current); // Cancel any pending hide operation
    setHoveredWord(word);
    setCardPosition({ x: event.clientX, y: event.clientY });

    setTimeout(() => {
      setshowCard(true);
    }, 30); // Slight delay to trigger the animation
  };

  const handleMouseMove = (event) => {
    if (hoveredWord) {
      setCardPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setshowCard(false); // Trigger the disappearance animation

    // Remove the card after the animation completes
    timeoutId.current = setTimeout(() => {
      setHoveredWord(null);
    }, 500);
  };

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
    <div
      className="h-full w-full bg-light text-dark flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <Tilt
        options={tiltOptions}
        className="h-full w-full flex justify-center items-center"
      >
        <div className="text-center w-5/6 sm:w-2/3 sm:text-xl">
          <h1 className="text-3xl font-nunito font-bold text-secondary transition-all duration-700">
            Welcome!
          </h1>
          <p>
            <span className="font-nunitoSans font-condensed">I&apos;m </span>
            <span
              className="text-4xl font-nunito font-bold text-primary hover:cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter("ruizterce", e)}
              onMouseLeave={handleMouseLeave}
            >
              ruizterce
            </span>
            <span className="font-nunitoSans font-condensed">
              , a passionate{" "}
            </span>
            <span
              className="text-4xl font-nunito font-bold text-primary hover:cursor-pointer font-nunito"
              onMouseEnter={(e) => handleMouseEnter("Full Stack Dev", e)}
              onMouseLeave={handleMouseLeave}
            >
              Full Stack Developer
            </span>
            <span className="font-nunitoSans font-condensed">
              {" "}
              with a love for crafting efficient and elegant digital solutions.
              I specialize in building responsive web applications, scalable
              backend systems, and seamless user experiences. Based in{" "}
            </span>
            <span
              className="text-3xl font-nunito font-bold text-primary hover:cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter("Barcelona", e)}
              onMouseLeave={handleMouseLeave}
            >
              Barcelona, Spain
            </span>
            .
          </p>
        </div>
      </Tilt>
      {/* Hover Card */}
      {hoveredWord && (
        <div
          className={`absolute z-10 max-w-[600px] sm:-translate-y-1/2 bg-light text-dark shadow-lg p-4 rounded transition-all duration-500 ease-out text-justify darkTheme:border border-dark ${
            showCard ? "scale-100 opacity-1" : "scale-0 opacity-0"
          } ${window.innerWidth < 640 ? "fixed bottom-4 left-4 right-4" : ""}`}
          style={
            window.innerWidth >= 640
              ? {
                  left: `${cardPosition.x + 40}px`,
                  top: `${cardPosition.y}px`,
                  transformOrigin: "left",
                }
              : {}
          }
        >
          <div>{hoverContent[hoveredWord]}</div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
