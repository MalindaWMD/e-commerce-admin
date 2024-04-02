import { useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import SlideOver from "../common/SlideOver";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { users } from "../../data/users";

const Message = ({ open }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="bg-green-300 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-800"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            Successfully uploaded
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md  p-1.5 text-green-800 hover:bg-green-200 focus:outline-none"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AddUserModalSlideOver({ open, setOpen, user }) {
  const [tags, setTags] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
      setTags(user?.groups || []);
  }, [user]);

  const closeAction = () => {
    setOpen(false);
    setTags([]);
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
            className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Groups
          </label>
          <TagsInput
            value={tags}
            onChange={(tags) => setTags(tags)}
            className="mt-1 block w-full  rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
            defaultValue={user?.status || 'active'}
            className="mt-1 block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="">Select option</option>
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>
      </div>

      <Message open={displayMessage} />

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
          className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => setDisplayMessage(true)}
        >
          Save
        </button>
      </div>
    </SlideOver>
  );
}
