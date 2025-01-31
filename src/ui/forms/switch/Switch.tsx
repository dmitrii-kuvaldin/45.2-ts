import React from "react";
import styles from "./Switch.module.css";

interface SwitchProps {
  // on / off
  checked: boolean;
  // функция на изменение
  onChange: (checked: boolean) => void;
  // активна или нет
  disabled?: boolean;
  // подпись
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, disabled = false, label }) => {
  return (
    <div className={`${styles.switchContainer} ${disabled ? styles.disabled : ""}`}>
      {label && <span className={styles.label}>{label}</span>}
      <label className={styles.switch}>
        <input
          type="checkbox"
          className={styles.switchInput}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default Switch;
