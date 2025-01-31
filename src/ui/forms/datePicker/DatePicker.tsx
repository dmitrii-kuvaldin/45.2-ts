import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <DatePicker
        selected={value} // Ожидает Date | null
        onChange={(date) => onChange(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Выберите дату"
        className={styles.input}
      />
    </div>
  );
};

export default DatePickerComponent;
