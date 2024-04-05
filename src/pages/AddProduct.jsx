import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductForm from "../components/products/ProductForm";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          New product
        </h1>
      </div>
      <div className="sm:mt-6 flex space-x-3 md:ml-4 md:mt-0">
      <Link
          to="/products"
          className="sm:hidden inline-flex rounded-md bg-white p-2 sm:px-2.5 sm:py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
        </Link>
      </div>
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
