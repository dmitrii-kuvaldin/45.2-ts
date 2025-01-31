import React from "react";
import styles from "./Spinner.module.css";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "medium", color }) => {
  return (
    <div
      className={`${styles.spinner} ${styles[size]}`}
      style={color ? { borderColor: `${color} transparent ${color} transparent` } : {}}
    ></div>
  );
};

export default Spinner;
