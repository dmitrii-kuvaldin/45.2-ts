import React, { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import cn from "classnames";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const animationStyles = useSpring({
    opacity: isOpen ? 1 : 0, // Плавное появление/исчезновение
    height: isOpen ? contentRef.current?.scrollHeight ?? 0 : 0, // Используем реальную высоту контента
    config: { tension: 200, friction: 26 }, // Настраиваем плавность
  });

  return (
    <div className={styles.accordion}>
      <button className={cn(styles.header, { [styles.open]: isOpen })} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={cn(styles.icon, { [styles.rotate]: isOpen })}>▼</span>
      </button>
      <animated.div style={{ ...animationStyles, overflow: "hidden" }} className={styles.content} ref={contentRef}>
        <div className={styles.inner}>{children}</div>
      </animated.div>
    </div>
  );
};

export default Accordion;
