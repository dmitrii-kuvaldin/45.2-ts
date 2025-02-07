import { NavLink, Outlet } from "react-router-dom";
import styles from './layout.module.css';
import { useCart } from "../context/CartContext";

export default function Layout() {
  const { cart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <header className={styles.header}>
        <nav>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'/'}>home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'fetch-fox'}>fox api</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'lesson-5'}>fellowship</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'gender-form'}>gender form</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'products'}>products</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={'cart'}>cart</NavLink>
        </nav>
        <span>Cart: €{getTotalPrice()}</span>
      </header>
      <main className={styles.main}>
        {/* за место компонента Outlet импортированного из React Router будут приходить компоненты из маршрутизации, которую мы описываем в App.tsx */}
        <Outlet />
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </>
  );
}

