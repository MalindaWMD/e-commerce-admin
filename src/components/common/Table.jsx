import {
  ArrowLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { flexRender } from "@tanstack/react-table";

const TableFooter = ({ table }) => {
  return (
    <tfoot>
      <tr>
        <td
          colSpan={table.getAllColumns().length}
          className="px-4 py-2 text-right"
        >
          <button
            className="rounded-md border border-gray-300 bg-white p-1.5 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-300  disabled:text-gray-400"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          </button>
          <button
            className="ml-2 rounded-md border border-gray-300 bg-white p-1.5 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            className="ml-2 rounded-md border border-gray-300 bg-white p-1.5 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-300  disabled:text-gray-400"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
          <button
            className="ml-2 rounded-md border border-gray-300 bg-white p-1.5 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </button>
        </td>
      </tr>
    </tfoot>
  );
};

export default function Table({ table, paginated = false }) {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  {header.isPlaceholder ? null : (
                    <>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    key={cell.id}
                    className="whitespace-nowrap px-3 py-4 text-sm text-gray-600"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <TableFooter table={table} />
    </table>
  );
}
