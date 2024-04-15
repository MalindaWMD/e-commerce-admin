export default function DeliveryInformation({ order }) {
  if (!order) {
    return null;
  }

  return (
    <div className="mb-8 rounded-md  bg-white p-4 shadow-md">
      <h2 className="mb-3 text-lg font-medium leading-6 text-gray-900">
        Delivery information
      </h2>

      <div className="mb-4 text-sm">
        <p className="text-gray-700">{order.customer}</p>
        <p className="text-denim-500 cursor-pointer font-medium">
          0912312312312312
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-2">
        <div className="text-sm text-gray-700">
          <p className="mb-2 font-medium text-gray-900">Shipping address</p>
          <p>Kristin Watson </p>
          <p>7363 Cynthia Pass</p>
          <p>Toronto, ON N3Y 4H8</p>
        </div>
        <div className="text-sm text-gray-700">
          <p className="mb-2 font-medium text-gray-900">Billing address</p>
          <p>Kristin Watson </p>
          <p>7363 Cynthia Pass</p>
          <p>Toronto, ON N3Y 4H8</p>
        </div>
      </div>
    </div>
  );
}
