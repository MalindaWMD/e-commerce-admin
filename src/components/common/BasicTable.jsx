import { Link } from "react-router-dom";
import { classNames } from "../../utils/css";

const HeaderColumn = ({ header, actionCol = false }) => {
  if (actionCol) {
    return (
      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
        <span className="sr-only">Actions</span>
      </th>
    );
  }

  return (
    <th
      scope="col"
      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
    >
      {header.label || header}
    </th>
  );
};

const Row = ({ row }) => {
  return (
    <tr>
      {Object.keys(row).map((colName, idx) => {
        let col = row[colName];
        return (
          <td
            key={'row-'+ colName}
            className={classNames(
              colName === "actions" ? "relative text-right sm:pr-6" : "",
              "whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-gray-600 sm:pl-6"
            )}
          >
            {col.html ? col.html() : col}
          </td>
        );
      })}
    </tr>
  );
};

const Footer = ({ footer }) => {
  if( ! footer){
    return null;
  }

  return (
    <nav
      className="flex items-center justify-between px-4 py-4 border-t border-gray-200 bg-white sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        {footer.label && <p className="text-xs text-gray-700">{footer.label}</p>}
      </div>
      <div className="flex justify-between flex-1 sm:justify-end">
        {footer.action && (
          <Link
            to={footer.action.href}
            className="text-sm text-denim-500 hover:text-denim-700"
          >
            {footer.action.label}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default function BasicTable({ data }) {

  if( ! data){
    return null;
  }
  
  const rows = typeof data.rows === 'function' ? data.rows() : data.rows;
  const headers = data.headers;

  return (
    <div className="overflow-hidden shadow-md rounded-sm border">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, idx) => (
              <HeaderColumn key={'header-'+idx} header={header} />
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white font-medium">
          {rows.map((row, idx) => (
            <Row key={'row-'+idx} row={row} />
          ))}
        </tbody>
      </table>
      <Footer footer={data.footer} />
    </div>
  );
}
