import React, { useState } from "react";
import cn from "classnames";
import styles from "./DataList.module.css";

interface DataListProps {
  data: Record<string, any>[];
  columns: { key: string; label: string }[];
}

const DataList: React.FC<DataListProps> = ({ data, columns }) => {
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.search}
      />

      <ul className={styles.list}>
        {sortedData.map((item, index) => (
          <li key={index} className={styles.item}>
            {columns.map((column) => (
              <span key={column.key} className={styles.field}>
                <strong>{column.label}:</strong> {item[column.key]}
              </span>
            ))}
          </li>
        ))}
      </ul>

      <div className={styles.sortButtons}>
        {columns.map((column) => (
          <button key={column.key} onClick={() => handleSort(column.key)} className={styles.sortButton}>
            {column.label} {sortColumn === column.key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataList;
