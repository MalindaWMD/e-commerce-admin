import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductForm from "../components/products/ProductForm";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Header = ({ id }) => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          #{id}
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

export default function EditProduct() {
  const product = {
    id: 101,
    name: "Garbage Bags 10L",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category_id: 3,
    brand_id: 3,
    tags: ["top-products", "household"],
    stocks: {
      sku: "product-123123123",
      barcode: "13123123123123",
      qty: 10,
      buffer_level: 20,
      buying_price: 200.0,
      selling_price: 500.0,
      discount_price: 300.0,
    },
    status: "active",
  };

  return (
    <Layout>
      <Header as="page-header" id={product.id}/>
      <div className="relative flex flex-col">
        <ProductForm product={product} />
      </div>
    </Layout>
  );
}
