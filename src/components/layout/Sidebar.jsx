import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  CogIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  RectangleGroupIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { classNames } from "../../utils/css";
import { isCurrentUrl } from "../../utils/url";

const secondaryNavigation = [
  { name: "Settings", href: "/settings", icon: CogIcon },
];

const supportNavigation = [
  {
    name: "Documentation",
    href: "/documentation",
    icon: QuestionMarkCircleIcon,
  },
];

const Navigation = () => {
  let sortedRoutes = routes.sort((a, b) => {
    a = a.ordinal;
    b = b.ordinal;
    
    if(!a || !b || a === b) { return 0; }
    if(a < b){ return -1; }
    if(a > b){ return 1; }

    return 0;
  });

  sortedRoutes = sortedRoutes.filter(route => {
    return route.path === '/' || !route.hidden;
  });

  return sortedRoutes.map((item) => {
    return <Link
      key={item.path}
      to={item.path}
      className={classNames(
        isCurrentUrl(item.path)
          ? "bg-smoke bg-opacity-10"
          : "hover:bg-smoke hover:bg-opacity-5",
        "text-smoke group flex items-center rounded-md px-2 py-2 text-sm font-medium"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      <item.icon
        className="mr-4 h-5 w-5 flex-shrink-0 text-smoke"
        aria-hidden="true"
      />
      {item.display_name}
    </Link>
  })
}

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-night pb-4 pt-5">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="/images/logo-full-light.svg"
                    alt="Easywire logo"
                  />
                </div>
                <nav
                  className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="space-y-1 px-2">
                    <Navigation />
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="space-y-1 px-2">
                      {secondaryNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            isCurrentUrl(item.href)
                              ? "bg-cyan-800 text-white"
                              : "text-cyan-100",
                            "group flex items-center rounded-md px-2 py-2 text-sm font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white",
                          )}
                        >
                          <item.icon
                            className="mr-4 h-5 w-5 text-cyan-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-night pb-4 pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto"
              src="/images/logo-full-light.svg"
              alt="Easywire logo"
            />
          </div>
          <nav
            className="mt-5 flex flex-1 flex-col overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="space-y-1 px-2">
              <Navigation />
            </div>
            <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      isCurrentUrl(item.href)
                        ? "bg-cyan-800 text-white"
                        : "text-cyan-100",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium text-smoke hover:bg-opacity-5",
                    )}
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 text-smoke"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Documentation routes */}
            <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
              {supportNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      isCurrentUrl(item.href)
                        ? "bg-cyan-800 text-white"
                        : "text-smoke",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium text-smoke hover:bg-cyan-600 hover:text-white",
                    )}
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
