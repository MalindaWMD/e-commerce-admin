import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "../../styles/datepicker.css";

export default function OrderTableFilters() {
  const [startDate, setStartDate] = useState();

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Status
        </label>
        <div className="mt-2">
          <select
            name=""
            id=""
            className="focus:ring-primary-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          >
            <option value="">All</option>
            <option value="awaiting_payment">Awaiting payment</option>
            <option value="in_progress">In progress</option>
            <option value="shipped">Shipped</option>
            <option value="cancelled">Cancelled</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      <div className="">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date from
        </label>
        <div className="mt-2">
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="focus:ring-primary-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date to
        </label>
        <div className="mt-2">
        <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="focus:ring-primary-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="">
        <button className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 mt-8 items-center rounded-md border border-transparent px-4 py-1.5 text-sm font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
        <button className="ml-4 mt-8 items-center rounded-md border border-transparent bg-gray-500 px-4 py-1.5 text-sm font-medium text-white shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          <ArrowPathIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
