import React, { useEffect, useState } from "react";
import styles from "./Alert.module.css";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  autoClose?: number; // Время закрытия (в мс)
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = "info", autoClose, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, autoClose);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  if (!visible) return null;

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <span className={styles.icon}>{type === "success" ? "✔️" : type === "error" ? "❌" : type === "warning" ? "⚠️" : "ℹ️"}</span>
      <span className={styles.message}>{message}</span>
      {onClose && (
        <button className={styles.closeButton} onClick={() => setVisible(false)}>
          ✖
        </button>
      )}
    </div>
  );
};

export default Alert;
