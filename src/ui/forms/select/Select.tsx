import React, { useRef, useState } from "react";
import styles from "./Select.module.css";

// отдельная типизация каждой опции
interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  // опции
  options: SelectOption[];
  // значение
  value?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  error?: string;
  helperText?: string;
  label?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Выберите значение",
  error,
  helperText,
  label,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.selectContainer} ${disabled ? styles.disabled : ""}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={`${styles.selectWrapper} ${error ? styles.error : ""}`}
        onClick={toggleOpen}
        ref={selectRef}
      >
        <div className={styles.selectedValue}>
          {options.find((option) => option.value === value)?.label || (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </div>
        <div className={styles.arrow}>{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${option.value === value ? styles.selected : ""
                }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {helperText && <p className={styles.helperText}>{helperText}</p>}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default Select;
