import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function SlideOverMessage({ open }) {
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
            Successfully updated
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
}
