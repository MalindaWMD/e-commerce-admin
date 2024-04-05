import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import CommandPallete from "../../common/CommandPallete";

export default function SearchBar() {
  const [openPallete, setOpenPallete] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 190) {
        if (!openPallete) {
          setOpenPallete(true);
        }
      }
    });
  }, []);

  return (
    <div className="sm:-ml-3 flex items-center justify-start">
      <button
        className="flex items-center justify-start rounded-md px-3 py-2 text-sm text-gray-500 focus-within:text-gray-600 hover:bg-gray-100"
        onClick={() => setOpenPallete(!openPallete)}
      >
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        <span className="ml-2">Search anything...</span>
        <span className="ml-5 hidden sm:block">
          <kbd className="rounded-md border border-gray-300 px-0.5 font-sans">
            ⌘
          </kbd>
          <kbd className="ml-1 rounded-md border border-gray-300 px-1.5 font-sans text-sm">
            .
          </kbd>
        </span>
      </button>

      <CommandPallete open={openPallete} setOpen={setOpenPallete} />
    </div>
  );
}
