import Layout from "./../components/layout";
export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 text-4xl font-bold md:text-6xl">Steven DeLeon</h1>
        <p className="mt-3 text-xl md:text-2xl text-gray-600 dark:text-green-500">
          Web Developer | Graphic Designer | <span className="">NY</span>
        </p>
      </div>
    </Layout>
  );
}
