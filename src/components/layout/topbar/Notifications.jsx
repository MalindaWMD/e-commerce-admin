import { BellIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Notifications() {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
          <span className="absolute -inset-1.5 lg:hidden" />
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right divide-y rounded-md bg-white pt-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <div className="flex flex-1 justify-between p-4">
              <div>
                <p className="text-sm font-medium leading-5 text-gray-900">
                  Successfully saved!
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Anyone with a link can now view this file.
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500">12mins ago</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex flex-1 justify-between p-4">
              <div>
                <p className="text-sm font-medium leading-5 text-gray-900">
                  Successfully saved!
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Anyone with a link can now view this file.
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500">12mins ago</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="flex flex-1 justify-between p-4">
              <div>
                <p className="text-sm font-medium leading-5 text-gray-900">
                  Successfully saved!
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Anyone with a link can now view this file.
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500">12mins ago</p>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="rounded-b-md bg-gray-100 px-4 py-1 text-right">
              <button className="text-xs font-medium leading-5 text-primary-600 hover:text-primary-500 focus:underline focus:outline-none">
                Read all
              </button>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
