import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { countries } from "../../data/countries";
import { currencies } from "../../data/currencies";
import { timezones } from "../../data/timezones";

export default function StoreNotifications() {
  return (
    <form
      className="relative divide-y divide-gray-200 lg:col-span-9"
      action="#"
      method="POST"
    >
      <div className="px-4 py-6 sm:p-6 lg:pb-8">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Notifications
          </h2>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Sender email
            </label>
            <input
              type="email"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="focus:border-primary-500 text-sm focus:ring-primary-500 mt-2 block w-full rounded-md border border-gray-300 px-1.5 py-1.5 shadow-sm sm:text-sm"
            />
          </div>
          <div className="hidden col-span-12 sm:col-span-6"></div>
        </div>
      </div>

      <div className="sm:mb-16 px-4 py-6 sm:p-6 lg:pb-8">
        <div className="divide-y divide-gray-200 rounded-md border">
          <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm hover:bg-gray-50">
            <div>
              <p className="font-medium">Order notifications</p>
              <p className="text-gray-500">
                Orders related notifications sended to customers
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm hover:bg-gray-50">
            <div>
              <p className="font-medium">Admin notifications</p>
              <p className="text-gray-500">
                Notifications sended to admins
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="sm:absolute sm:bottom-0 w-full bg-gray-100 px-4 py-3 text-right">
        <button
          type="button"
          className="ml-4 inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
