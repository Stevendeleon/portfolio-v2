import React from "react";
import Layout from "../../components/layout";
import ContactInformation from "../../components/contactInformation.js";
import {CONTACT_ME_AVAILABILITY, CONTACT_ME_DESCRIPTION, CONTACT_SLOGAN} from "../../constants";
export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 md:items-start">
        <h1 className="mx-auto mt-24 text-4xl font-bold text-center md:text-6xl">
          {CONTACT_SLOGAN}
        </h1>
        <div className="flex flex-row mt-8">
          <p className="text-md md:text-xl">
            { CONTACT_ME_AVAILABILITY }
            <br/>
            <br/>
            {CONTACT_ME_DESCRIPTION}{" "}
          </p>
        </div>
        <ContactInformation />
      </div>
    </Layout>
  );
};
