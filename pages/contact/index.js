import React from "react";
import Layout from "../../components/layout";
const contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:items-start items-center justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 text-4xl font-bold text-center md:text-6xl">
          Let's get in touch
        </h1>
        <div className="flex flex-row mt-8">
          <p className="text-md md:text-xl">
            Whether you have questions or just want to say hi, feel free to
            shoot me an email my inbox is always open and I will do my best to
            get back to you as soon as I can!{" "}
          </p>
        </div>
        <div className="mt-10 mx-auto flex justify-between text-center">
          <a
            href="mailto:sdells28@gmail.com"
            className="p-2 m-2 px-4 py-2 font-semibold text-gray-700 dark:text-gray-100 duration-200 ease-out transform rounded-md cursor-pointer hover:scale-110 motion-reduce:transform-none dark:bg-gray-800 bg-gray-100"
          >
            <span>Email</span>
          </a>
          <a
            className="p-2 m-2 px-4 py-2 font-semibold text-gray-700 dark:text-gray-100 duration-200 ease-out transform rounded-md cursor-pointer hover:scale-110 motion-reduce:transform-none dark:bg-gray-800 bg-gray-100"
            href="/Resume.pdf"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
