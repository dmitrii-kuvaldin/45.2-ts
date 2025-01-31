import React from "react";
import styles from "./IconButton.module.css";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={`${styles.iconButton} ${styles[variant]} ${styles[size]} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span className={styles.loader}></span> : icon}
    </button>
  );
};

export default IconButton;
