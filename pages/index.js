import Layout from "./../components/layout";
import { JOB_TITLE, MY_NAME } from "../constants";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 text-4xl font-bold md:text-6xl" data-testid="my-name">{ MY_NAME }</h1>
        <p className="mt-3 text-gray-600 text-md md:text-2xl dark:text-green-500" data-testid="job-title">
          { JOB_TITLE }
        </p>
      </div>
    </Layout>
  );
}
