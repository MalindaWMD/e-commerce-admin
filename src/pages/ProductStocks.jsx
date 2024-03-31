import BasicTable from "../components/common/BasicTable";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";

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
  return (
    <PageHeader>
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
          Stocks details
        </h1>
      </div>
      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4"></div>
    </PageHeader>
  );
};

export default function ProductStocks() {
  return (
    <Layout>
      <Header as="page-header" />

      <div className="px-5 py-4 bg-white rounded-md shadow mb-4">
        <h3 className="mb-4 text-xl font-bold text-gray-900 truncate">
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
