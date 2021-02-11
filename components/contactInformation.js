import React from "react";

const contactInformation = () => {
  return (
    <div className="flex justify-between w-2/3 mx-auto mt-10 text-center ">
      <a
        href="mailto:sdells28@gmail.com"
        className="px-4 py-2 mx-auto font-semibold text-gray-700 duration-200 ease-out transform bg-gray-100 rounded-md cursor-pointer dark:text-gray-100 hover:scale-110 motion-reduce:transform-none dark:bg-gray-800 dark:hover:text-yellow-200 hover:text-red-600"
      >
        Email
      </a>
      <a
        className="px-4 py-2 mx-auto font-semibold text-gray-700 duration-200 ease-out transform bg-gray-100 rounded-md cursor-pointer dark:text-gray-100 hover:scale-110 motion-reduce:transform-none dark:bg-gray-800 dark:hover:text-yellow-200 hover:text-red-600"
        href="/Resume.pdf"
      >
        Resume
      </a>
    </div>
  );
};

export default contactInformation;
