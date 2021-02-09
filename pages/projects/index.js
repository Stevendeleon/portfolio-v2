import React from "react";
import Layout from "../../components/layout";

const projects = () => {
  const proj = [
    {
      id: 0,
      title: "Trello Clone",
      body:
        "A Simplistic recreate of Trello capturing their core UI-Concepts along with their Drag & Drop functionality",
      technologies: ["Javascript", "React.js", "Unsplash API"],
      link: "https://stevendeleon.github.io/trello-clone/",
    },
    {
      id: 1,
      title: "Finddit",
      body:
        "Using Reddit's API to search for keywords related to a post through the data the API Provides",
      technologies: ["Javascript", "React.js", "Next.js", "Reddit API"],
      link: "https://reddit-api-theta.vercel.app/",
    },
    {
      id: 2,
      title: "Discord Bot",
      body:
        "Magic 8-ball Bot for Discord Servers. Takes a question and outputs a response in the Jamaican Dialect 'Patois'",
      technologies: ["Python", "Discord API"],
      link: "https://github.com/Stevendeleon/Jamaican-magic-eightball",
    },
  ];
  const styles = {
    background: "#f2d4a4",
  };
  const list = proj.map((p) => {
    return (
      <li
        key={p.id}
        className="text-gray-800 relative bg-white dark:bg-gray-600 dark:text-blue-300 rounded-lg shadow-xl"
      >
        <div>
          <div
            className="w-full h-auto p-4 mb-4 flex flex-col transition-all ease-out duration-200"
            key={p.id}
          >
            <header className="flex flex-row text-center text-xl mb-6 justify-between">
              <span className="dark:text-white text-2xl font-bold text-gray-800">
                {p.title}
              </span>
              <a href={p.link} target="_blank">
                <i className="fal fa-external-link-square font-bold dark:text-yellow-200 text-green-500" />
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
            className="absolute bottom-0 flex flex-row justify-self-start my-4 ml-3 dark:text-green-300 text-red-700 font-bold"
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
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 text-3xl font-bold tracking-tight  md:text-5xl ">
          {" "}
          View some of my work
        </h1>
      </div>
      <div className="min-h-auto flex items-center">
        <div className="flex-1 max-w-4xl mx-auto p-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {list}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default projects;
