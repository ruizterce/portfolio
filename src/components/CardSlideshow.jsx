import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Chip from "./Chip";
import PropTypes from "prop-types";

const CardSlideshow = ({ isCurrentSection, isDarkMode }) => {
  const data = [
    {
      title: "Battleship",
      imgUrl: "/img/battleship-1.png",
      chips: (
        <>
          <Chip icon="/icons/html5-plain.svg" text="HTML" bgColor="light" />
          <Chip icon="/icons/css3-plain.svg" text="CSS" bgColor="light" />
          <Chip
            icon="/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip
            icon="/icons/webpack-plain.svg"
            text="Webpack"
            bgColor="light"
          />
        </>
      ),
      description: "Classic Game",
      liveUrl: "https://ruizterce.github.io/Battleship/",
      repoUrl: "https://github.com/ruizterce/Battleship",
    },
    {
      title: "CV Editor",
      imgUrl: "/img/cv-editor-1.png",
      chips: (
        <>
          <Chip
            icon="/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip icon="/icons/react-original.svg" text="React" bgColor="light" />
          <Chip
            icon="/icons/vitejs-plain.svg"
            text="Vite"
            bgColor="light"
            invertIcon={true}
          />
        </>
      ),
      description: "Create your CV Tool",
      liveUrl: "https://ruizterce-cv-editor.netlify.app/",
      repoUrl: "https://github.com/ruizterce/cv-editor",
    },
    {
      title: "Linkeem",
      imgUrl: `/img/linkeem-2-${isDarkMode ? "d" : "l"}.png`,
      chips: (
        <>
          <Chip
            icon="/icons/typescript-original.svg"
            text="TypeScript"
            bgColor="light"
          />
          <Chip icon="/icons/react-original.svg" text="React" bgColor="light" />
          <Chip icon="/icons/ionic-original.svg" text="Ionic" bgColor="light" />
          <Chip
            icon="/icons/express-original.svg"
            text="Express"
            bgColor="light"
            invertIcon={true}
          />
          <Chip
            icon="/icons/postgresql-plain.svg"
            text="PostgreSQL"
            bgColor="light"
          />
          <Chip
            icon="/icons/prisma-original.svg"
            text="Prisma"
            bgColor="light"
            invertIcon={true}
          />
        </>
      ),
      description: "Social Media App",
      liveUrl: "https://linkeem.mooo.com",
      repoUrl: "https://github.com/ruizterce/linkeem",
    },
    {
      title: "Blog API",
      chips: (
        <>
          <Chip
            icon="/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip icon="/icons/react-original.svg" text="React" bgColor="light" />
          <Chip
            icon="/icons/express-original.svg"
            text="Express"
            bgColor="light"
          />
          <Chip icon="/icons/materialui-plain.svg" text="MUI" bgColor="light" />
          <Chip
            icon="/icons/postgresql-plain.svg"
            text="PostgreSQL"
            bgColor="light"
          />
          <Chip
            icon="/icons/prisma-original.svg"
            text="Prisma"
            bgColor="light"
            invertIcon={true}
          />
        </>
      ),
      imgUrl: "/img/blog-authors-1.png",
      description: "Multi-frontend Blog",
      liveUrl: "",
      repoUrl: "https://github.com/ruizterce/blog-api",
    },
    {
      title: "Card Clicker",
      chips: (
        <>
          <Chip
            icon="/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip icon="/icons/react-original.svg" text="React" bgColor="light" />
          <Chip
            icon="/icons/vitejs-plain.svg"
            text="Vite"
            bgColor="light"
            invertIcon={true}
          />
        </>
      ),
      imgUrl: "/img/pokemon-1.png",
      description: "Memory Game",
      liveUrl: "https://cardclicker.netlify.app",
      repoUrl: "https://github.com/ruizterce/card-clicker-game",
    },
  ];

  return (
    <div className="h-screen w-screen bg-light text-dark flex flex-col items-center justify-center">
      <h1
        className={`absolute text-3xl font-nunito font-bold text-secondary translate-y-[-260px] sm:translate-y-[-310px] transition-all duration-700 ease-in-out ${
          isCurrentSection ? "" : "-translate-x-[1000px] opacity-0"
        }`}
      >
        Work
      </h1>
      <div
        className={`w-full translate-y-10 transition-all duration-700 ease-in-out ${
          isCurrentSection ? "" : "translate-x-[1000px] opacity-0"
        }`}
      >
        <Swiper
          effect={"coverflow"}
          modules={[EffectCoverflow, Pagination]}
          slidesPerView={"auto"}
          centeredSlides={true}
          initialSlide={2}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            scale: 0.9,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {data.map((project) => {
            return (
              <SwiperSlide
                key={project.title}
                className="max-w-xs sm:max-w-sm max-h-full"
              >
                <div className="swiper-slide-transform rounded-3xl bg-lightMild flex flex-col justify-center items-center ">
                  <img
                    src={project.imgUrl}
                    className="object-cover object-top w-full h-[300px] sm:h-[420px] rounded-t-3xl"
                  ></img>

                  <div className="flex flex-wrap justify-center gap-2 mx-2 mt-2 sm:mx-4 sm:mt-4">
                    {project.chips}
                  </div>
                  <div className="w-full flex flex-col items-center p-2">
                    <h1 className="text-3xl font-nunito font-extrabold ">
                      {project.title}
                    </h1>

                    <h1 className="mb-2">{project.description}</h1>
                    <div className="box-border flex w-5/6 mb-2 justify-around ">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1 px-4 font-nunito bg-primary  shadow-md hover:bg-primaryContrast hover:text-primary active:shadow-none active:invert  font-black rounded-full"
                      >
                        <span className="text-lightMild text-shadow-sm shadow-gray-500">
                          LIVE SITE
                        </span>
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1 px-4 font-nunito bg-primary shadow-md hover:bg-primaryContrast hover:text-primary active:shadow-none active:invert font-black rounded-full"
                      >
                        <span className="text-lightMild text-shadow-sm shadow-gray-500">
                          GITHUB
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

CardSlideshow.propTypes = {
  isCurrentSection: PropTypes.bool,
  isDarkMode: PropTypes.bool,
};

export default CardSlideshow;
