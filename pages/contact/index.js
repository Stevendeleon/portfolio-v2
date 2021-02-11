import React from "react";
import Layout from "../../components/layout";
import ContactInformation from "../../components/contactInformation.js";
const contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 md:items-start">
        <h1 className="mx-auto mt-24 text-4xl font-bold text-center md:text-6xl">
          Let's get in touch
        </h1>
        <div className="flex flex-row mt-8">
          <p className="text-md md:text-xl">
            Whether you have questions or just want to say hi, feel free to
            shoot me an email my inbox is always open and I will do my best to
            get back to you as soon as I can!{" "}
          </p>
        </div>
        <ContactInformation />
      </div>
    </Layout>
  );
};

export default contact;
