import React from "react";
import Layout from "../../components/layout";
// import Experience from "../../components/experience";
// import Goals from "../../components/goals";
const about = () => {
  const list = [
    "Javascript",
    "HTML/CSS",
    "React.js",
    "Node.js",
    "Next.js",
    "Mdx js",
    "Typescript",
    "Python",
  ];

  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 mb-6 text-4xl font-bold md:text-6xl ">About me</h1>
        <p className="mb-4 text-lg">
          Currently I work for{" "}
          <span className="font-bold">Glitnir Ticketing</span>, but I am open to
          new opportunities.
        </p>
        <p className="mb-8 text-lg">
          I aim to combine my skills of programming and design to build quality
          scalable products that are user friendly and appealing.
        </p>

        <p className="mb-2 text-red-700 dark:text-green-300  font-bold">
          Recently Used Technologies
        </p>
        <ul className="grid grid-cols-2 my-4 truncate">
          {list.map((li, index) => {
            return (
              <li
                className="transition-all ease-out duration-150 relative pr-4 pb-2 hover:text-blue-500 cursor-none"
                key={index}
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.88rem",
                  fontWeight: "500",
                }}
              >
                {li}
              </li>
            );
          })}
        </ul>
        {/* <Goals /> */}
        {/* <Experience /> */}
      </div>
    </Layout>
  );
};

export default about;
