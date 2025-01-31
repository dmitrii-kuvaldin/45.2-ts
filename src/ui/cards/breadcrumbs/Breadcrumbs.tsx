import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  basePath?: string; // Например, "/admin" или "/shop"
  labels?: Record<string, string>; // Позволяет кастомизировать текст хлебных крошек
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ basePath = "", labels = {} }) => {
  const location = useLocation();
  const fullPath = location.pathname.replace(basePath, ""); // Убираем basePath, если он указан
  const pathSegments = fullPath.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `${basePath}/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return {
      label: labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1), // Позволяет менять текст
      path,
      isLast,
    };
  });

  return (
    <nav className={styles.breadcrumbs}>
      <NavLink to="/" className={styles.link}>
        Главная
      </NavLink>
      {breadcrumbs.map((item, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          <span className={styles.separator}>{">"}</span>
          {item.isLast ? (
            <span className={styles.current}>{item.label}</span>
          ) : (
            <NavLink to={item.path} className={styles.link}>
              {item.label}
            </NavLink>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
