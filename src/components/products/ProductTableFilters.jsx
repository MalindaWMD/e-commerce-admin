import { useRef } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "../../styles/datepicker.css";

export default function ProductTableFilters({
  filters,
  setFilters,
  globalFilter,
  setGlobalFilter,
}) {
  const formRef = useRef();

  const setFilterValue = (key, value) => {
    setFilters([
      ...filters,
      {
        id: key,
        value: value,
      },
    ]);
  };

  const resetFilters = (e) => {
    e.preventDefault();

    setFilters([]);
    formRef.current.reset();
  };

  return (
    <form className="mb-4 grid grid-cols-5 gap-4" ref={formRef}>
      <div>
        <label
          htmlFor="search-all"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Search
        </label>
        <input
          id="search-all"
          type="text"
          value={globalFilter}
          className="mt-1 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="filter-status"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Product Status
        </label>
        <select
          id="filter-status"
          className="mt-1 block  w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => setFilterValue("status", e.target.value)}
        >
          <option value=""></option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="filter-category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <select
          id="filter-status"
          className="mt-1 block  w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => setFilterValue("category", e.target.value)}
        >
          <option value=""></option>
          <option value="Other cleaning items">Other cleaning items</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="filter-brand"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Brand
        </label>
        <select
          id="filter-status"
          className="mt-1 block  w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => setFilterValue("brand", e.target.value)}
        >
          <option value=""></option>
          <option value="Common">Common</option>
        </select>
      </div>

      <div>
        <button
          type="button"
          className="mt-7 items-center rounded-md border border-transparent bg-gray-500 px-4 py-1.5 text-sm font-medium text-white shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          onClick={resetFilters}
        >
          <ArrowPathIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
