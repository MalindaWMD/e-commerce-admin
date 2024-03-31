import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import SearchBar from "./topbar/SearchBar";
import Profile from "./topbar/Profile";
import Notifications from "./topbar/Notifications";

export default function Topbar({ setSidebarOpen }) {
  return (
    <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Search bar */}
      <div className="flex flex-1 justify-between lg:mx-auto lg:max-w-6xl">
        <div className="flex flex-1">
          <SearchBar />
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <Notifications />

          {/* Profile dropdown */}
          <Profile />
        </div>
      </div>
    </div>
  );
}
