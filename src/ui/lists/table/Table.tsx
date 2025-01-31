import React, { useState } from "react";
import cn from "classnames";
import styles from "./Table.module.css";

interface TableColumn {
  key: string;
  label: string;
}

interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    if (sortColumn === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} onClick={() => handleSort(column.key)} className={styles.th}>
              {column.label} {sortColumn === column.key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key} className={styles.td}>
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
