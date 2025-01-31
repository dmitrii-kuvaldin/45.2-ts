import React, { useState } from "react";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = "top", children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && <div className={`${styles.tooltip} ${styles[position]}`}>{text}</div>}
    </div>
  );
};

export default Tooltip;
