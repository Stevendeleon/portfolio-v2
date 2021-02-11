import React from "react";
import Layout from "../../components/layout";
import RecentTechnologies from "../../components/recentTechnologies";
// import Experience from "../../components/experience";
// import Goals from "../../components/goals";
const about = () => {
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

        <p className="mb-2 font-bold text-red-700 dark:text-green-300">
          Recently Used Technologies
        </p>
        <RecentTechnologies />
      </div>
      {/* <Goals /> */}
      {/* <Experience /> */}
    </Layout>
  );
};

export default about;
