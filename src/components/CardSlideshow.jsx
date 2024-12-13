import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Chip from "./Chip";
import PropTypes from "prop-types";

const CardSlideshow = ({ isDarkMode }) => {
  const data = [
    {
      title: "Battleship",
      imgUrl: "/src/assets/img/battleship-1.png",
      chips: (
        <>
          <Chip
            icon="/src/assets/icons/html5-plain.svg"
            text="HTML"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/css3-plain.svg"
            text="CSS"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/webpack-plain.svg"
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
      imgUrl: "/src/assets/img/cv-editor-1.png",
      chips: (
        <>
          <Chip
            icon="/src/assets/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/react-original.svg"
            text="React"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/vitejs-plain.svg"
            text="Vite"
            bgColor="light"
            invertIcon="true"
          />
        </>
      ),
      description: "Classic Game",
      liveUrl: "https://ruizterce-cv-editor.netlify.app/",
      repoUrl: "https://github.com/ruizterce/cv-editor",
    },
    {
      title: "Linkeem",
      imgUrl: `/src/assets/img/linkeem-2-${isDarkMode ? "d" : "l"}.png`,
      chips: (
        <>
          <Chip
            icon="/src/assets/icons/typescript-original.svg"
            text="TypeScript"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/react-original.svg"
            text="React"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/ionic-original.svg"
            text="Ionic"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/express-original.svg"
            text="Express"
            bgColor="light"
            invertIcon="true"
          />
          <Chip
            icon="/src/assets/icons/postgresql-plain.svg"
            text="PostgreSQL"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/prisma-original.svg"
            text="Prisma"
            bgColor="light"
            invertIcon="true"
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
            icon="/src/assets/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/react-original.svg"
            text="React"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/express-original.svg"
            text="Express"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/materialui-plain.svg"
            text="MUI"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/postgresql-plain.svg"
            text="PostgreSQL"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/prisma-original.svg"
            text="Prisma"
            bgColor="light"
            invertIcon="true"
          />
        </>
      ),
      imgUrl: "/src/assets/img/blog-authors-1.png",
      description: "Multi-frontend Blog",
      liveUrl: "",
      repoUrl: "https://github.com/ruizterce/blog-api",
    },
    {
      title: "Card Clicker",
      chips: (
        <>
          <Chip
            icon="/src/assets/icons/javascript-original.svg"
            text="JavaScript"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/react-original.svg"
            text="React"
            bgColor="light"
          />
          <Chip
            icon="/src/assets/icons/vitejs-plain.svg"
            text="Vite"
            bgColor="light"
            invertIcon="true"
          />
        </>
      ),
      imgUrl: "/src/assets/img/pokemon-1.png",
      description: "Desc",
      liveUrl: "https://cardclicker.netlify.app",
      repoUrl: "https://github.com/ruizterce/card-clicker-game",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <h1
        className="absolute text-3xl hidden sm:block"
        style={{ transform: "translateY(-340px)" }}
      >
        Work
      </h1>
      <div className="w-full">
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
              <SwiperSlide key={project.title} className="max-w-xs max-h-full">
                <div className="swiper-slide-transform  bg-lightMedium flex flex-col justify-center items-center ">
                  <img
                    src={project.imgUrl}
                    className="object-cover object-top w-full h-[300px] sm:h-[420px]"
                  ></img>

                  <div className="flex flex-wrap justify-center gap-2 m-2">
                    {project.chips}
                  </div>
                  <div className="w-full p-2 text-center">
                    <h1 className="text-2xl">{project.title}</h1>
                    <div className="my-2 flex w-full justify-around">
                      <a href={project.liveUrl}>Live Site</a>
                      <a href={project.repoUrl}>GitHub</a>
                    </div>

                    <h1>{project.description}</h1>
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
  isDarkMode: PropTypes.bool,
};

export default CardSlideshow;
