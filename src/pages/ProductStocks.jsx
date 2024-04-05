import { Link, useNavigation } from "react-router-dom";
import BasicTable from "../components/common/BasicTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const tableData = {
  headers: [
    "ID",
    "SKU",
    "QTY",
    "Buying price",
    "Selling price",
    "Discount price",
    "Updated at",
  ],
  rows: [
    {
      id: 123123123,
      sku: "sku-123123",
      qty: 44,
      buying_price: (200).toFixed(2),
      selling_price: (500).toFixed(2),
      discount_price: (300).toFixed(2),
      updated_at: "2023-05-19 12:12:17",
    },
    {
      id: 33422,
      sku: "sku-33422",
      qty: 10,
      buying_price: (150).toFixed(2),
      selling_price: (500).toFixed(2),
      discount_price: (300).toFixed(2),
      updated_at: "2022-001-19 09:12:17",
    },
  ],
};

const Header = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <PageHeader>
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          Stocks
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

export default function ProductStocks() {
  return (
    <Layout>
      <Header as="page-header" />

      <div className="mb-4 rounded-md bg-white px-5 py-4 shadow">
        <h3 className="mb-4 truncate text-xl font-bold text-gray-900">
          Garbage bags 30L
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <p className="text-xs font-medium">
            <span className="text-gray-500">Total Quantity:</span> 44
          </p>
          <p className="text-xs font-medium">
            <span className="text-gray-500">Buffer Level:</span> 10
          </p>
        </div>
      </div>

      <BasicTable data={tableData} />
    </Layout>
  );
}
