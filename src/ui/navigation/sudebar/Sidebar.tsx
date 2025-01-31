import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Sidebar.module.css";

const navItems = [
  { label: "Input Forms", path: "/" },
  { label: "Buttons", path: "/buttons" },
  { label: "Feedback", path: "/feedback" },
  { label: "Cards", path: "/cards" },
  { label: "Products", path: "/products" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(styles.sidebar, { [styles.open]: isOpen })}>
      <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
