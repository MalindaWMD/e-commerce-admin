import { useState } from "react";
import SlideOver from "../common/SlideOver";
import SlideOverMessage from "../common/SlideOverMessage";
import ReactDatePicker from "react-datepicker";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SelectedProducts = ({ products }) => {

  if( ! products || products.length === 0){
    return null;
  }

  return (
    <ul
      className="mt-4 divide-y  divide-gray-200 rounded-md border border-gray-200 px-3"
    >
      {products?.map((product) => (
        <li key={product.id} className="flex py-3">
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="h-12 w-12 rounded-md object-cover object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-center sm:ml-6">
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
                  <button className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none">
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default function PromotionFormSlideOver({ open, setOpen, promotion }) {
  const [displayMessage, setDisplayMessage] = useState(false);

  const [startDate, setStartDate] = useState(promotion?.start_date || null);
  const [startTime, setStartTime] = useState(promotion?.start_time || null);
  const [endDate, setEndDate] = useState(promotion?.end_date || null);
  const [endTime, setEndTime] = useState(promotion?.end_time || null);

  const closeAction = () => {
    setOpen(false);
    setDisplayMessage(false);
  };

  return (
    <SlideOver open={open} setOpen={closeAction} title="New promotion">
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Title
          </label>
          <input
            id="first_name"
            defaultValue={promotion?.title}
            className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="discount-type"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Discount type
            </label>
            <select
              id="discount-type"
              defaultValue={promotion?.discount_type}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value=""></option>
              <option value="percentage">Percentage</option>
              <option value="fixed_value">Fixed value</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="discount-value"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Value
            </label>
            <input
              id="discount-value"
              defaultValue={promotion?.discount_value}
              className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="minimum_requirement"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Minimum requirement
            </label>
            <select
              id="minimum_requirement"
              defaultValue={promotion?.minimum_requirement}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value=""></option>
              <option value="amount">Amount</option>
              <option value="qty">Quantity of items</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="minimum_requirement_value"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Value
            </label>
            <input
              id="minimum_requirement_value"
              defaultValue={promotion?.minimum_requirement_value}
              className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="minimum_requirement"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Method
            </label>
            <select
              id="minimum_requirement"
              defaultValue={promotion?.method}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value=""></option>
              <option value="automatic">Automatic</option>
              <option value="code">Code</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="minimum_requirement_value"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Value
            </label>
            <input
              id="minimum_requirement_value"
              defaultValue={promotion?.minimum_requirement_value}
              className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="minimum_requirement"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Start date
            </label>
            <ReactDatePicker
              value={startDate}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              onChange={(value) => setStartDate(value)}
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="minimum_requirement_value"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Start time
            </label>
            <ReactDatePicker
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              value={startTime}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              onChange={(value) => setStartTime(value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="minimum_requirement"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              End date
            </label>
            <ReactDatePicker
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              value={endDate}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              onChange={(value) => setEndDate(value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="minimum_requirement_value"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              End time
            </label>
            <ReactDatePicker
              value={endTime}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              onChange={(value) => setEndTime(value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="application_type"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Application type
            </label>
            <select
              id="application_type"
              defaultValue={promotion?.application_type}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value=""></option>
              <option value="specific_products">Specific products</option>
              <option value="specific_categories">Specific categories</option>
              <option value="specific_brands">Specific brands</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="purchase_type"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Purchase type
            </label>
            <select
              id="purchase_type"
              defaultValue={promotion?.purchase_type}
              className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value=""></option>
              <option value="one_time">One time</option>
              <option value="multiple_times">Multiple times</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Products
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="search"
              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              placeholder="Search products..."
            />
          </div>

          <SelectedProducts products={promotion?.products} />
        </div>
      </div>

      <SlideOverMessage open={displayMessage} />

      <div className="flex flex-shrink-0 justify-between border-t px-4 py-4">
        <button
          type="button"
          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-4 inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          onClick={() => setDisplayMessage(true)}
        >
          Save
        </button>
      </div>
    </SlideOver>
  );
}
