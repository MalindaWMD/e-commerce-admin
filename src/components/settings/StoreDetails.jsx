import { countries } from "../../data/countries";
import { currencies } from "../../data/currencies";
import { timezones } from "../../data/timezones";

export default function StoreDetails() {
  return (
    <form
      className="relative divide-y divide-gray-200 lg:col-span-9"
      action="#"
      method="POST"
    >
      <div className="px-4 py-6 sm:p-6 lg:pb-8">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Store details
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Store name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-12 sm:col-span-6"></div>

          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Store phone
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Store email
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-12">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Time zone
            </label>
            <select
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            >
              <option value=""></option>
              {Object.keys(timezones).map((key) => {
                return (
                  <option key={"country-" + key} value={key}>
                    {timezones[key]}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Unit system
            </label>
            <select
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            >
              <option value="metric">Metric system</option>
              <option value="imperial">Imperial system</option>
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Default weight unit
            </label>
            <select
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            >
              <option value="metric">Kilogram (kg)</option>
              <option value="imperial">Gram (g)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="lb:pb-8 px-4 py-6 sm:p-6">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Billing information
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-8">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Legal business name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-12 sm:col-span-4"></div>

          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country/region
            </label>
            <select
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            >
              <option value=""></option>
              {Object.keys(countries).map((key) => {
                return (
                  <option key={"country-" + key} value={key}>
                    {countries[key]}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-span-12 sm:col-span-6"></div>

          <div className="col-span-12 sm:col-span-8">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-12 sm:col-span-4"></div>

          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Postal code
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="lb:pb-8 mb-16 px-4 py-6 sm:p-6">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Store currency
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Currency
            </label>
            <select
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            >
              <option value=""></option>
              {Object.keys(currencies).map((key) => {
                return (
                  <option key={"country-" + key} value={key}>
                    {currencies[key]}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-gray-100 px-6 py-3 text-right">
        <button
          type="button"
          className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
