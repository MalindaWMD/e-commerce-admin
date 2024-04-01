import { classNames } from "../../utils/css";

const statuses = {
  awaiting_payment: {
    label: "Awaiting payment",
    color: "bg-gray-100 text-gray-600",
  },
  in_progress: {
    label: "In progress",
    color: "bg-pink-100 text-pink-600",
  },
  shipped: {
    label: "Shipped",
    color: "bg-purple-100 text-purple-600",
  },
  delivered: {
    label: "Delivered",
    color: "bg-green-100 text-green-600",
  },
  cancelled: {
    label: "Cancelled",
    color: "bg-red-100 text-red-600",
  },
  refunded: {
    label: "Refunded",
    color: "bg-red-100 text-red-600",
  },
};

export default function OrderStatusBadge({ status }) {
  let orderStatus = statuses[status];
  
  return (
    <span
      className={ classNames('inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-xs font-medium', orderStatus.color)}
    >
      <svg
        className="h-1.5 w-1.5 fill-gray-400"
        viewBox="0 0 6 6"
        aria-hidden="true"
      >
        <circle cx={3} cy={3} r={3} />
      </svg>
      {orderStatus.label}
    </span>
  );
}
