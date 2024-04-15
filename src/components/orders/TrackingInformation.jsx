export default function TrackingInformation({order}) {
  return (
    <div className="mb-4 rounded-md bg-white p-4 shadow-md">
      <h3 className="text-md mb-3 font-medium leading-6 text-gray-900">
        Tracking information
      </h3>

      <div className="mb-4 flex items-center justify-start text-sm font-medium text-blue-600">
        <svg
          className="mr-2 h-1.5 w-1.5 fill-blue-300"
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
        <span>51547878755545848512</span>
      </div>

      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Add another tracking number"
          className="focus:ring-denim-600 block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:mr-3 sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          className="rounded-md bg-denim-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-denim-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-denim-600"
        >
          Update
        </button>
      </div>
    </div>
  );
}
