import React from "react";
import Layout from "../../components/layout";
import ProjectCard from "../../components/projectCard";

export default function projects() {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 text-3xl font-bold tracking-tight md:text-5xl ">
          {" "}
          View some of my work
        </h1>
      </div>
      <div className="flex items-center min-h-auto">
        <div className="flex-1 max-w-4xl p-2 mx-auto">
          <ProjectCard />
        </div>
      </div>
    </Layout>
  );
}
