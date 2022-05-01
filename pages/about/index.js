import React from "react";
import Layout from "../../components/layout";
import RecentTechnologies from "../../components/recentTechnologies";
import {
  ABOUT_ME,
  ABOUT_ME_DESCRIPTION,
  FULL_TIME_JOB_COMPANY_NAME,
  PART_TIME_JOB_COMPANY_NAME,
  RECENT_TECH_USED_TITLE
} from "../../constants";
// import Experience from "../../components/experience";
// import Goals from "../../components/goals";
export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 mb-6 text-4xl font-bold md:text-6xl " data-testid="about-me">{ABOUT_ME}</h1>
        <p className="mb-4 text-lg">
          Currently I work full-time for{" "}
          <span className="font-bold dark:underline" data-testid="full-time">{FULL_TIME_JOB_COMPANY_NAME}</span> and part-time for <span className="font-bold dark:underline" data-testid="part-time">{PART_TIME_JOB_COMPANY_NAME}</span>.
        </p>
        <p className="mb-8 text-lg">
          {ABOUT_ME_DESCRIPTION}
        </p>

        <p data-testid="recent-technologies-title" className="mb-2 font-bold text-red-700 dark:text-green-300">
          {RECENT_TECH_USED_TITLE}
        </p>
        <RecentTechnologies data-testid="recent-technologies" />
      </div>
      {/* <Goals /> */}
      {/* <Experience /> */}
    </Layout>
  );
}
