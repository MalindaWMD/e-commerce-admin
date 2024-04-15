import Layout from "../components/layout/Layout";

export default function Error404() {
  return (
    <Layout>
      <div className="h-full w-full">
        <h1 className="text-denim-600 text-lg font-medium">404</h1>
        <h2 className="text-2xl font-bold">Sorry, Page not found</h2>
      </div>
    </Layout>
  );
}
