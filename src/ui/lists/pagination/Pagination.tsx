import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  basePath?: string;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, basePath = "" }) => {
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className={styles.pagination}>
      {currentPage > 1 && (
        <NavLink to={`${basePath}/${currentPage - 1}`} className={styles.page}>
          «
        </NavLink>
      )}

      {pages.map((page) => (
        <NavLink
          key={page}
          to={`${basePath}/${page}`}
          className={({ isActive }) => cn(styles.page, { [styles.active]: isActive })}
        >
          {page}
        </NavLink>
      ))}

      {currentPage < totalPages && (
        <NavLink to={`${basePath}/${currentPage + 1}`} className={styles.page}>
          »
        </NavLink>
      )}
    </nav>
  );
};

export default Pagination;
