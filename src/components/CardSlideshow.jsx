const CardSlideshow = () => {
  const data = [
    { title: "Project 1", imgUrl: "url", description: "Desc" },
    { title: "Project 2", imgUrl: "url", description: "Desc" },
    { title: "Project 3", imgUrl: "url", description: "Desc" },
    { title: "Project 4", imgUrl: "url", description: "Desc" },
    { title: "Project 5", imgUrl: "url", description: "Desc" },
    { title: "Project 6", imgUrl: "url", description: "Desc" },
    { title: "Project 7", imgUrl: "url", description: "Desc" },
  ];

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-screen flex items-center justify-center">
        <button className="absolute left-10 h-10 w-10 bg-red-500">L</button>
        <button className="absolute right-10 h-10 w-10 bg-red-500">R</button>
      </div>
      <div className="flex gap-6 ">
        {data.map((project) => {
          return (
            <div key={project.title} className="p-16 shadow text-center">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSlideshow;
