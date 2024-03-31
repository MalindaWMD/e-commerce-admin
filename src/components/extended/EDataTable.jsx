import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import DataTable from 'react-data-table-component';

const FilterComponent = ({ filterText, onFilter, className, filterComponents, loadDataFunction }) => (
  <div className="flex items-center justify-center"> 
    <div className="mr-3">
      <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        Quick Filter
      </label>
      <input
        id="search"
        type="text"
        placeholder="Filter..."
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
        className={className}
      />
    </div>
    {filterComponents ? filterComponents(loadDataFunction) : null}
  </div>
);

export default function EDataTables(props) {

  const [filterText, setFilterText] = useState('');

  const options = {
    includeScore: true,
    threshold: 0.35,
    keys: props.searchFields || []
  };

  const fuse = new Fuse(props.data, options)
  const filteredItems = filterText ? fuse.search(filterText) : props.data;
  
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <FilterComponent 
        filterComponents={props.filterComponents}
        loadDataFunction={props.loadDataFunction}
        className="block px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm" 
        onFilter={e => setFilterText(e.target.value)} 
        filterText={filterText} />
    );
  }, [filterText]);

  return (
  <div className={props.className}>
    <div className="flex items-center justify-between mb-3">
      {props.filterable && subHeaderComponentMemo}
    </div>

    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg ">
      <DataTable
        id="datatable"
        pagination
        columns={props.columns}
        data={filteredItems}
        paginationComponentOptions={{ noRowsPerPage: true }}
        persistTableHead
        conditionalRowStyles={props.conditionalRowStyles}
      />
    </div>
  </div>
  );
}