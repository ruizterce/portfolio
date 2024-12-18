import { Tilt } from "react-tilt";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

const Welcome = ({ isCurrentSection, isDarkMode }) => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [showCard, setshowCard] = useState(false);
  const timeoutId = useRef(null);

  const hoverContent = {
    ruizterce: (
      <div className="max-w-[350px] flex flex-col items-center gap-4">
        <img
          src="img/avatar2.jpeg"
          alt="Author's portrait"
          className="h-auto"
        />
        <h1>
          As an Industrial Design and Product Development engineer, my journey
          through product design and manufacturing has shaped my expertise in
          systems, processes, QA, visual language, and user experience. Inspired
          by the transformative power of web technologies, I discovered my
          passion for web development, where I now focus on creating impactful
          and scalable solutions with thoughtful design.
        </h1>
      </div>
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
      <img
        src={`${
          isDarkMode
            ? "img/pexels-omar-ramadan-1739260-12951693.jpg"
            : "img/pexels-apasaric-1388030.jpg"
        }`}
        alt="Sagrada Familia"
        className="h-100 w-auto rounded-xl"
      />
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
    max: 20,
    perspective: 900,
    scale: 1,
    speed: 10000,
    transition: true,
    axis: null,
    reset: false,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div
      className="h-screen w-screen bg-light text-dark flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <Tilt
        options={tiltOptions}
        className="relative h-full w-5/6 flex justify-center items-center"
      >
        <div className="text-center w-5/6 sm:w-2/3 text-xl flex flex-col items-center">
          <p className="leading-5">
            <h1 className="text-4xl font-nunito font-black text-secondary tracking-[0.11em] leading-[2em]">
              Welcome!
            </h1>
            <span className="text-2xl font-nunitoSans font-thin text-center tracking-[0.05em] leading-[0.3em]">
              I&apos;m{" "}
            </span>
            <span
              className={`text-4xl font-nunito font-black text-primary text-justify tracking-[0.02em] leading-[0.3em] drop-shadow hover:cursor-pointer hover:drop-shadow-primary inline-block transition-all duration-[600ms] ease-in-out ${
                isCurrentSection ? "" : "translate-x-[1000px]"
              }`}
              onMouseEnter={(e) => handleMouseEnter("ruizterce", e)}
              onMouseLeave={handleMouseLeave}
            >
              ruizterce
            </span>
            <br />
            <span className="font-nunitoSans  font-thin text-[1.4em] tracking-[0.155em] leading-[1.1em]">
              a passionate
            </span>
            <br />
            <p
              className={`w-max text-4xl font-nunito font-extrabold text-primary tracking-[0.1em] leading-[1em] drop-shadow hover:cursor-pointer hover:drop-shadow-primary block transition-all duration-700 ease-in-out ${
                isCurrentSection ? "" : "-translate-x-[1000px]"
              }`}
              onMouseEnter={(e) => handleMouseEnter("Full Stack Dev", e)}
              onMouseLeave={handleMouseLeave}
            >
              <span>Full Stack </span> <br />
              <span>Developer</span>
            </p>
            <span className="font-nunitoSans  font-thin text-[1.4em] tracking-[0.096em] leading-[1em]">
              established in
            </span>
            <br />
            <span
              className={`text-4xl font-nunito font-black text-primary tracking-[0.11em] drop-shadow hover:cursor-pointer hover:drop-shadow-primary block transition-all duration-[900ms] ease-in-out ${
                isCurrentSection ? "" : "translate-x-[1000px]"
              }`}
              onMouseEnter={(e) => handleMouseEnter("Barcelona", e)}
              onMouseLeave={handleMouseLeave}
            >
              Barcelona
            </span>
          </p>
        </div>
      </Tilt>
      {/* Hover Card */}
      {hoveredWord && (
        <div
          className={`absolute z-10 max-w-[600px] sm:-translate-y-1/2 bg-light text-dark shadow-lg p-4 rounded-xl transition-all duration-500 ease-out text-justify darkTheme:border border-dark ${
            showCard ? "scale-100 opacity-1" : "scale-0 opacity-0"
          } ${window.innerWidth < 640 ? "fixed bottom-4 left-4 right-4" : ""}`}
          style={
            window.innerWidth >= 640
              ? {
                  [cardPosition.x > window.innerWidth / 2
                    ? "right"
                    : "left"]: `${
                    cardPosition.x > window.innerWidth / 2
                      ? Math.abs(cardPosition.x - window.innerWidth - 100)
                      : Math.abs(cardPosition.x + 100)
                  }px`,
                  top: `${cardPosition.y}px`,
                  transformOrigin:
                    cardPosition.x > window.innerWidth / 2 ? "right" : "left",
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

Welcome.propTypes = {
  isCurrentSection: PropTypes.bool,
  isDarkMode: PropTypes.bool,
};

export default Welcome;
