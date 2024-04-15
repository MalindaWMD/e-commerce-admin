import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  ArchiveBoxIcon,
  FolderIcon,
  HashtagIcon,
  InboxStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const suggestions = [
  { id: 1, name: "Users", url: "/users" },
  { id: 3, name: "Manage user roles", url: "/users/permissions" },
  { id: 4, name: "Completed orders", url: "/orders?status=delivered" },
  { id: 5, name: "Product details", url: "/products" },
  { id: 6, name: "Add product", url: "/products/add" },
  { id: 7, name: "Orders", url: "/orders" },
  { id: 8, name: "Customers", url: "/customers" },
  { id: 9, name: "Home/Dashboard", url: "/" },
  { id: 10, name: "Promotions", url: "/promotions" },
  { id: 11, name: "Analytics", url: "/analytics" },
];

export default function CommandPallete({ open = false, setOpen }) {
  const [query, setQuery] = useState("");

  const filteredSuggestions =
    query === ""
      ? []
      : suggestions.filter((suggestion) => {
          return suggestion.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-45 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <div>
                <div className="relative">
                  <input
                    className="h-12 w-full border-0 bg-transparent px-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search anything..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === "" || filteredSuggestions.length > 0) && (
                  <div className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto">
                      <ul className="text-sm text-gray-700">
                        {(query === "" ? [] : filteredSuggestions).map(
                          (suggestion) => (
                            <Link
                              to={suggestion.url}
                              key={suggestion.id}
                              className="hover:bg-denim-600 group flex cursor-pointer select-none items-center rounded-md px-3 py-2 hover:text-white"
                            >
                              <HashtagIcon
                                className="h-6 w-6 flex-none text-gray-400 group-hover:text-white"
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">
                                {suggestion.name}
                              </span>
                              <span className="text-denim-100 ml-3 hidden flex-none group-hover:block">
                                Jump to...
                              </span>
                            </Link>
                          ),
                        )}
                      </ul>
                  </div>
                )}

                {query !== "" && filteredSuggestions.length === 0 && (
                  <div className="px-6 py-14 text-center sm:px-14">
                    <FolderIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-900">
                      We couldn't find any suggestions with that term. Please
                      try again.
                    </p>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
