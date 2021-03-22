import React from "react";

const projectCard = (p) => {
  const proj = [
    {
      id: 0,
      title: "Collins Blog",
      body:
        "A Blog for a friend showcasing his Cyber Security write-ups. Here I dynamically render and route articles from a database",
      technologies: ["Javascript", "React.js", "Next.js"],
      link: "https://collinhacks.com/",
    },
    {
      id: 1,
      title: "Trello Clone",
      body:
        "A Simplistic recreate of Trello capturing their core UI-Concepts along with their Drag & Drop functionality",
      technologies: ["Javascript", "React.js", "Unsplash API"],
      link: "https://stevendeleon.github.io/trello-clone/",
    },
    {
      id: 2,
      title: "Finddit",
      body:
        "Using Reddit's API to search for keywords related to a post through the data the API Provides",
      technologies: ["Javascript", "React.js", "Next.js", "Reddit API"],
      link: "https://reddit-api-theta.vercel.app/",
    },
    {
      id: 3,
      title: "Discord Bot",
      body:
        "Magic 8-ball Bot for Discord Servers. Takes a question and outputs a response in the Jamaican Dialect 'Patois'",
      technologies: ["Python", "Discord API"],
      link: "https://github.com/Stevendeleon/Jamaican-magic-eightball",
    },
  ];

  const list = proj.map((p) => {
    return (
      <li
        key={p.id}
        className="relative text-gray-800 bg-white rounded-lg shadow-xl dark:bg-gray-600 dark:text-blue-300 md:duration-150 md:ease-out md:transform md:hover:scale-110 motion-reduce:transform-none"
      >
        <div>
          <div
            className="flex flex-col w-full h-auto p-4 mb-4 transition-all duration-200 ease-out"
            key={p.id}
          >
            <header className="flex flex-row justify-between mb-6 text-xl text-center">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {p.title}
              </span>
              <a href={p.link} target="_blank">
                <i
                  className="font-bold text-green-500 duration-200 ease-out transform rounded-md cursor-pointer fal fa-external-link-square dark:text-yellow-200 hover:scale-110 motion-reduce:transform-none"
                  aria-hidden="false"
                />
              </a>
            </header>
            <p
              className="mb-4 dark:text-gray-200"
              style={{ fontSize: ".785rem" }}
            >
              {p.body}
            </p>
          </div>
          <div
            className="absolute bottom-0 flex flex-row my-4 ml-3 font-bold text-red-700 justify-self-start dark:text-green-300"
            style={{ bottom: "0", fontSize: "10px" }}
          >
            {p.technologies.map((tech, i) => {
              return (
                <span key={i} className="px-1">
                  {" "}
                  {tech}{" "}
                </span>
              );
            })}
          </div>
        </div>
      </li>
    );
  });
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {list}
    </ul>
  );
};

export default projectCard;
