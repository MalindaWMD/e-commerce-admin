import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductForm from "../components/products/ProductForm";

const Header = () => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          New product
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0"></div>
    </PageHeader>
  );
};

export default function AddProduct() {
  return (
    <Layout>
      <Header as="page-header" />
      <div className="relative flex flex-col">
        <ProductForm />
      </div>
    </Layout>
  );
}
