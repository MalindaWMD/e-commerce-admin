import { useState } from "react";
import SlideOver from "../common/SlideOver";
import SlideOverMessage from "../common/SlideOverMessage";
import UserGroupSelect from "./UserGroupSelect";

export default function AddUserModalSlideOver({ open, setOpen, user }) {
  const [displayMessage, setDisplayMessage] = useState(false);

  const closeAction = () => {
    setOpen(false);
    setDisplayMessage(false);
  };

  return (
    <SlideOver open={open} setOpen={closeAction} title="New user">
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Name
          </label>
          <input
            id="first_name"
            defaultValue={user?.name}
            className=" mt-1 block w-full rounded-sm border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-denim-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Email
          </label>
          <input
            id="first_name"
            defaultValue={user?.email}
            className=" mt-1 block w-full rounded-sm border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-denim-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Phone no
          </label>
          <input
            id="first_name"
            defaultValue={user?.phone_no}
            className=" mt-1 block w-full rounded-sm border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-denim-400 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Group
          </label>
          <UserGroupSelect
            defaultValue={user?.group}
            onChange={(value) => (user.group = value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Status
          </label>
          <select
            defaultValue={user?.status || "active"}
            className=" mt-1 block w-full rounded-sm border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-denim-400 sm:text-sm sm:leading-6"
          >
            <option value="">Select option</option>
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
      </div>

      <SlideOverMessage open={displayMessage} />

      <div className="flex flex-shrink-0 justify-between border-t px-4 py-4">
        <button
          type="button"
          className="rounded-sm bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-denim-500 hover:bg-denim-400 focus-visible:outline-denim-400 ml-4 inline-flex justify-center rounded-sm px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setDisplayMessage(true)}
        >
          Save
        </button>
      </div>
    </SlideOver>
  );
}
