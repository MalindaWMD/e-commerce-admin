import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function OrderNotes() {
  return (
    <div className="mb-4 rounded-md bg-white p-4 shadow-md">
      <div className="mb-3 inline-flex w-full justify-between">
        <h3 className="text-md font-medium leading-6 text-gray-900">Notes</h3>

        <button className="transparent">
          <PencilSquareIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <div>
        <p className="text-sm text-gray-500">No notes</p>
      </div>
    </div>
  );
}
