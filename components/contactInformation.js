import React from "react";
import {EMAIL_TEXT} from "../constants";

export default function contactInformation(){
  return (
    <div className="flex justify-between w-full mx-auto mt-10 text-center ">
      <a
        href="mailto:stevendeleon2892@gmail.com"
        className="w-auto px-12 py-2 mx-auto text-xl font-bold text-gray-700 duration-200 ease-out transform bg-gray-100 rounded-md cursor-pointer dark:text-gray-100 hover:scale-110 motion-reduce:transform-none dark:bg-gray-800 dark:hover:text-yellow-200 hover:text-red-600"
      >
        {EMAIL_TEXT}
      </a>
    </div>
  );
};
