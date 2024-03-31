const statuses = {
  awaiting_payment: {
    label: "Awaiting payment",
    color: "gray",
  },
  in_progress: {
    label: "In progress",
    color: "pink",
  },
  shipped: {
    label: "Shipped",
    color: "purple",
  },
  delivered: {
    label: "Delivered",
    color: "green",
  },
  cancelled: {
    label: "Cancelled",
    color: "red",
  },
  refunded: {
    label: "Refunded",
    color: "red",
  },
};

export default function OrderStatusBadge({ status }) {
  let orderStatus = statuses[status];
  
  return (
    <span
      className={`inline-flex items-center gap-x-1.5 rounded-md bg-${orderStatus.color || "gray"}-100 px-1.5 py-0.5 text-xs font-medium text-${ orderStatus.color || "gray"}-600`}
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
