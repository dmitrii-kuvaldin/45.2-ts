import { NavLink, Outlet } from "react-router-dom";
import styles from './layout.module.css'

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink className={({isActive}) => (isActive ? styles.linkActive : '')} to={'/'}>home</NavLink>
        <NavLink className={({isActive}) => (isActive ? styles.linkActive : '')} to={'fetch-fox'}>fox api</NavLink>
        <NavLink className={({isActive}) => (isActive ? styles.linkActive : '')} to={'lesson-5'}>fellowship</NavLink>
        <NavLink className={({isActive}) => (isActive ? styles.linkActive : '')} to={'gender-form'}>gender form</NavLink>
      </header>
      <main className={styles.main}>
        {/* за место компонента Outlet импортированного из React Router будут приходить компоненты из маршрутизации, которую мы описываем в App.tsx */}
        <Outlet/>
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </>
  )
}

