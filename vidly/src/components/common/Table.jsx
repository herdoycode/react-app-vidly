import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ onSort, columns, data, sortColumn }) => {
  return (
    <table className="table">
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
