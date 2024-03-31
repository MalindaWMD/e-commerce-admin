import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import CommandPallete from "../../common/CommandPallete";

export default function SearchBar() {
  const [openPallete, setOpenPallete] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', function(e){
      if((e.ctrlKey || e.metaKey)  && e.keyCode === 190){
        if( ! openPallete){
          setOpenPallete(true);
        }
      }
    });
  }, []);

  return (
    <div className="-ml-6 flex justify-start items-center">
      <button 
        className="flex justify-start items-center px-3 py-2 rounded-md text-sm text-gray-400 focus-within:text-gray-600 hover:bg-gray-100"
        onClick={() => setOpenPallete( ! openPallete)}
      >
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        <span className="ml-2">
          Search anything...
        </span>
        <span className="ml-5">
          <kbd className="font-sans border border-gray-300 rounded-sm px-0.5">⌘</kbd>
          <kbd className="font-sans text-sm border border-gray-300 rounded-sm px-1.5 ml-1">.</kbd>
        </span>
      </button>
     
      <CommandPallete open={openPallete} setOpen={setOpenPallete} />
    </div>
  );
}
