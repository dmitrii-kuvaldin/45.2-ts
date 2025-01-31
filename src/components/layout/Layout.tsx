import { NavLink, Outlet } from "react-router-dom";
import cn from "classnames";
import styles from './Layout.module.css'

const navItems = [
  { label: "Input Forms", path: "/" },
  { label: "Buttons", path: "/buttons" },
  { label: "Feedback", path: "/feedback" },
  { label: "Cards", path: "/cards" },
  { label: "Products", path: "/products" },
];

export default function Layout() {
  return (
    <>
      {/* <header className={styles.header}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => cn(styles.link, { [styles.linkActive]: isActive })}
        >
          {item.label}
        </NavLink>
      ))}
      </header> */}
      <main>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </>
  );
}
