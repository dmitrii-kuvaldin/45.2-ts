import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import cn from "classnames";
import styles from "./Tabs.module.css";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const animationStyles = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(10px)" },
    config: { tension: 250, friction: 20 },
  });

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={cn(styles.tab, { [styles.active]: index === activeIndex })}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <animated.div className={styles.tabContent} style={animationStyles}>
        {tabs[activeIndex].content}
      </animated.div>
    </div>
  );
};

export default Tabs;
