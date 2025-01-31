import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  // описание поля ввода
  label?: string;
  // отмечен или нет
  checked: boolean;
  // событие на onChange
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // текст ошибки
  error?: string;
  // кнопка активная или нет
  disabled?: boolean;
  // ! а где же name... ?
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
  // по умолчанию кнопка не активная
  disabled = false,
}) => {
  return (
    <div className={`${styles.checkboxContainer} ${disabled ? styles.disabled : ""}`}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className={styles.checkboxCustom}></span>
        {label && <span className={styles.checkboxText}>{label}</span>}
      </label>
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default Checkbox;
