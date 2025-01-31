import React, { useEffect, useState } from "react";
import styles from "./Toast.module.css";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  autoClose?: number; // Время закрытия (в мс)
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = "info", autoClose = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, autoClose);

    return () => clearTimeout(timer);
  }, [autoClose, onClose]);

  if (!visible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span className={styles.icon}>
        {type === "success" ? "✔️" : type === "error" ? "❌" : type === "warning" ? "⚠️" : "ℹ️"}
      </span>
      <span className={styles.message}>{message}</span>
      <button className={styles.closeButton} onClick={() => setVisible(false)}>✖</button>
    </div>
  );
};

export default Toast;
