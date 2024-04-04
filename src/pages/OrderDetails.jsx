import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon, PrinterIcon } from "@heroicons/react/24/outline";
import Layout from "../components/layout/Layout";
import PageHeader from "../components/layout/PageHeader";
import DeliveryInformation from "../components/orders/DeliveryInformation";
import OrderItems from "../components/orders/OrderItems";
import OrderNotes from "../components/orders/OrderNotes";
import OrderStatusBadge from "../components/orders/OrderStatusBadge";
import OrderTimeline from "../components/orders/OrderTimeline";
import TrackingInformation from "../components/orders/TrackingInformation";
import { order_activity } from "../data/order_activity";
import { orders } from "../data/orders";
import { products } from "../data/products";

const Header = ({ order }) => {
  if (!order) {
    return;
  }

  return (
    <PageHeader>
      <div className="flex min-w-0 flex-1 items-center justify-start">
        <Link to="/orders" className="mr-3 rounded-md p-1 hover:bg-gray-300">
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <h1 className="mr-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
          #{order.id}
        </h1>
        <OrderStatusBadge status={order.status} />
      </div>
      <div className="mt-6 flex space-x-3 md:ml-4 md:mt-0">
        <button
          type="button"
          className="rounded-md bg-cyan-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Remind payment
        </button>
        <button
          type="button"
          className="rounded-md bg-cyan-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Refund
        </button>
        <button
          type="button"
          className="rounded-md bg-cyan-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
          Return
        </button>

        <button
          type="button"
          className="inline-flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PrinterIcon className="mr-2 h-5 w-5 text-gray-600" />
          Print invoice
        </button>
        <button
          type="button"
          className="inline-flex rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PrinterIcon className="mr-2 h-5 w-5 text-gray-600" />
          Print packing slips
        </button>
      </div>
    </PageHeader>
  );
};

export default function OrderDetails(props) {
  const { id } = useParams();

  const [order, setOrder] = useState();

  useEffect(() => {
    setOrder(getOrder(id));
  }, []);

  const getOrder = (id) => {
    return orders.filter((order) => {
      return order.id === id;
    })[0];
  };

  return (
    <Layout>
      <Header as="page-header" order={order} />

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <OrderItems items={products} />
          <DeliveryInformation order={order} />
          <OrderTimeline timeline={order_activity} />
        </div>
        <div>
          <TrackingInformation order={order} />
          <OrderNotes />
        </div>
      </div>
    </Layout>
  );
}
