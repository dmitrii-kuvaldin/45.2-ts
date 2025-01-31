import React from "react";
import styles from "./Slider.module.css";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider: React.FC<SliderProps> = ({ value, onChange, min = 0, max = 100, step = 1 }) => {
  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.slider}
      />
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default Slider;
