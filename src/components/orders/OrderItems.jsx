import { Link } from "react-router-dom";

export default function OrderItems({ items }) {
    return (
      <div className="mb-8 rounded-md  bg-white p-4 shadow-md">
        <h2 className="mb-3 text-lg font-medium leading-6 text-gray-900">
          Items
        </h2>
        <ul role="list" className="divide-y divide-gray-200  border-gray-200">
          {items.map((product) => (
            <li key={product.id} className="flex py-2">
              <div className="flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded-md object-cover object-center"
                />
              </div>
  
              <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-sm">
                      <Link
                        to={"/products/" + product.id}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {product.name}
                      </Link>
                    </h4>
                    <p className="ml-4 text-sm font-medium text-gray-900">
                      ${product.price} x 1
                    </p>
                    <p className="ml-4 text-sm font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{product.attribute}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 rounded-md p-4 text-sm mt-2">
          <dl className="divide-y divide-gray-200 text-sm lg:col-span-7">
            <div className="flex items-center justify-between pb-2">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="font-medium text-gray-900">$72</dd>
              </div>
              <div className="flex items-center justify-between py-2">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="font-medium text-gray-900">$5</dd>
            </div>
            <div className="flex items-center justify-between py-2">
              <dt className="text-gray-600">Tax</dt>
              <dd className="font-medium text-gray-900">$6.16</dd>
            </div>
            <div className="flex items-center justify-between pt-2">
              <dt className="font-medium text-gray-900">Order total</dt>
              <dd className="font-medium text-indigo-600">$83.16</dd>
            </div>
          </dl>
        </div>
      </div>
    );
  };