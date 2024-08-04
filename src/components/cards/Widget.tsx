import React from "react";
import styles from "./Wiget.module.css";
export type noteType = "warning" | "error" | "info";
export interface CardProps {
  type: noteType;
  children: Array<React.ReactElement>;
}

const emojis = {
  warning: "⚠️",
  error: "❌",
  info: "ⓘ",
};

export function Card(props: CardProps) {
  const { type, children } = props;

  const classes = `${styles.widget} ${styles[type]} `;

  return (
    <div className={classes}>
      <span className={styles.widgetIcon}>{emojis[type]}</span>
      <div className={styles.widgetContent}>
        {children[0]}
        <hr></hr>
        {children?.map((child, index) => {
          if (index === 0) {
            return null;
          } else {
            return child;
          }
        })}

        <p></p>
      </div>
    </div>
  );
}
