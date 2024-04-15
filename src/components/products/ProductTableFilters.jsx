import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
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
    <form className="hidden sm:grid mb-4 grid-cols-5 gap-4" ref={formRef}>
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
          className="mt-1 w-full block rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-denim-400 sm:text-sm sm:leading-6"
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
          className="mt-1 block  w-full  rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-denim-400 sm:text-sm sm:leading-6"
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
          className="mt-1 block  w-full  rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-denim-400 sm:text-sm sm:leading-6"
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
          className="mt-1 block  w-full  rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-denim-400"
          onChange={(e) => setFilterValue("brand", e.target.value)}
        >
          <option value=""></option>
          <option value="Common">Common</option>
        </select>
      </div>

      <div>
        <button
          type="button"
          className="mt-7 items-center rounded-sm border border-transparent bg-denim-400 px-4 py-1.5 text-sm font-medium text-white shadow-md hover:bg-denim-500 focus:outline-none"
          onClick={resetFilters}
        >
          <ArrowPathIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}
