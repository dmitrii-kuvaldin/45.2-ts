import React from "react";
import styles from "./RadioGroup.module.css";

// тип одной опции
interface RadioOption {
  label: string;
  value: string | number;
}

interface RadioGroupProps {
  // опция из которых нужно выбрать одну
  options: RadioOption[];
  // значение
  value?: string | number;
  // что происходит на onChange
  onChange: (value: string | number) => void;
  // имя input
  name: string;
  // ошибка
  error?: string;
  // активен ли?
  disabled?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  error,
  disabled = false,
}) => {
  return (
    <div className={`${styles.radioGroupContainer} ${disabled ? styles.disabled : ""}`}>
      {options.map((option) => (
        <label
          key={option.value}
          // если значение соответствует выбранному
          className={`${styles.radioLabel} ${
            value === option.value ? styles.selected : ""
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            disabled={disabled}
            className={styles.radioInput}
          />
          <span className={styles.radioCustom}></span>
          {option.label}
        </label>
      ))}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default RadioGroup;
