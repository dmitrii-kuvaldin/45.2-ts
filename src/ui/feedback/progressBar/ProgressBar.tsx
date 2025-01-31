import React from "react";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  value?: number; // 0-100
  type?: "line" | "circle";
  color?: string;
  size?: number;
  indeterminate?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  type = "line",
  color = "#4caf50",
  size = 40,
  indeterminate = false,
}) => {
  if (type === "circle") {
    const radius = (size - 6) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <svg
        className={styles.circle}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className={styles.background}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="6"
        />
        <circle
          className={styles.progress}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="6"
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    );
  }

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={`${styles.progressBar} ${indeterminate ? styles.indeterminate : ""}`}
        style={{ width: indeterminate ? "100%" : `${value}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
