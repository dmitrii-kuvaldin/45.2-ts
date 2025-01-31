import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Navbar.module.css";


const navItems = [
  { label: "Input Forms", path: "/" },
  { label: "Buttons", path: "/buttons" },
  { label: "Feedback", path: "/feedback" },
  { label: "Cards", path: "/cards" },
  { label: "Products", path: "/products" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={cn(styles.navLinks, { [styles.open]: menuOpen })}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}
            onClick={() => setMenuOpen(false)} // Закрываем меню при клике
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
