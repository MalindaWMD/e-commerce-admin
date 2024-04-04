import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import ProductForm from "../components/products/ProductForm";

const Header = () => {
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Edit product information
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <Link
          to={"/products/" + 101 + "/stocks"}
          className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Stocks
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
      <Header as="page-header" />
      <div className="relative flex flex-col">
        <ProductForm product={product} />
      </div>
    </Layout>
  );
}
