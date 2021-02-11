import React from "react";

const experience = () => {
  const jobDetails = [
    {
      name: "Glitnir",
      tl: "Sept 2017 - Present",
      id: 0,
      title: "Web Developer",
      company: "Glitnir Ticketing",
      duties: [
        "Redesigned Admin/Client Dashboard, and Designing various customer streams & flow",
        "Incorporated Python to help manage and automate Finances",
        "Assisted with creating new software to aid Social Distancing Seating for COVID-19",
        "Building and incorporating API's",
      ],
      tools: ["HTML/CSS", "Javascript", "Python", "PHP"],
    },
    {
      name: "One Seven",
      tl: "June 2016 - July 2017",
      id: 1,
      title: "Web Developer",
      company: "OneSeven Technology",
      duties: [
        "Assisted with Company Startup",
        "Oversaw Development rollout to ensure best procedures & meet deadlines",
        "Mentor for Web Developer interns from NYCDA",
        "Managed Client Relations",
      ],
      tools: ["HTML/CSS", "Javascript", "PHP"],
    },
    {
      name: "Freelance",
      tl: "2016 - Present",
      id: 2,
      title: "Freelance Web Designer",
      duties: ["Mockup & Demo of build process to production through Figma"],
      tools: [
        "Javascript",
        "React.js",
        "Node.js",
        "Next.js",
        "Figma",
        "Tailwindcss",
      ],
    },
  ];

  // const job = jobDetails.map((job) => {
  //   return (
  //     <div className="grid" key={job.id}>
  //       <div className="col-span-4">{job.title}</div>
  //       <div className="col-span-2">{job.tl}</div>
  //       <div className="col-span-6">{job.company}</div>
  //       {/*
  //       {job.duties.map((duty, index) => {
  //         return (
  //           <div key={index} className="">
  //             {" "}
  //             {duty}
  //           </div>
  //         );
  //       })}
  //       {job.tools.map((tool, index) => {
  //         return <div key={index}>{tool}</div>;
  //       })} */}
  //     </div>
  //   );
  // });
  return (
    <>
      <h1 className="mt-8 mb-6 text-3xl font-bold bg-gray-">Experience</h1>
      <div className="flex w-full p-2 text-gray-800 bg-white rounded-lg shadow-xl dark:bg-gray-600 dark:text-gray-200">
        <div className="grid grid-flow-row grid-cols-6 grid-rows-4 gap-4"></div>
      </div>
    </>
  );
};

export default experience;
