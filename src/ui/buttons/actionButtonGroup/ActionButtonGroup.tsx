import React from "react";
import styles from "./ActionButtonGroup.module.css";
import Button from "../button/Button";

export interface ButtonItem {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

interface ActionButtonGroupProps {
  buttons: ButtonItem[];
  orientation?: "horizontal" | "vertical";
  align?: "left" | "center" | "right";
}

const ActionButtonGroup: React.FC<ActionButtonGroupProps> = ({
  buttons,
  orientation = "horizontal",
  align = "left",
}) => {
  return (
    <div className={`${styles.group} ${styles[orientation]} ${styles[align]}`}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          onClick={button.onClick}
          variant={button.variant || "primary"}
          size={button.size || "medium"}
          disabled={button.disabled}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default ActionButtonGroup;
