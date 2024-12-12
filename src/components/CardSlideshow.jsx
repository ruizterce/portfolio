import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";

const CardSlideshow = () => {
  const data = [
    {
      title: "Project 1",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 2",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 3",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 4",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 5",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 6",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 7",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 8",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
    {
      title: "Project 9",
      imgUrl: "https://picsum.photos/500/500",
      description: "Desc",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <h1
        className="absolute text-3xl"
        style={{ transform: "translateY(-280px)" }}
      >
        Work
      </h1>
      <div className="w-full">
        <Swiper
          effect={"coverflow"}
          modules={[EffectCoverflow, Pagination]}
          slidesPerView={"auto"}
          centeredSlides={true}
          initialSlide={4}
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
              <SwiperSlide key={project.title} style={{ maxWidth: "300px" }}>
                <div className="swiper-slide-transform  bg-lightMedium flex flex-col justify-center items-center ">
                  <img src={project.imgUrl} className="w-auto h-96 "></img>
                  <div className="p-4 text-center">
                    <h1>{project.title}</h1>
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

export default CardSlideshow;
