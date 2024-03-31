import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductForm from "../components/products/ProductForm";


const Header = () => {
  return (
    <PageHeader>
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
          Edit product information
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
        <a
          href="/products"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-500"
        >
          Back to products list
        </a>
      </div>
    </PageHeader>
  );
};

export default function AddProduct() {
  return (
    <Layout>
      <Header as="page-header"/>
      <div className="relative flex flex-col">
        <ProductForm />
      </div>
    </Layout>
  );
}
