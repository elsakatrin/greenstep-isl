import React from "react";
import styles from "./Backdrop.module.css";

export const Backdrop = () => {
  return (
    <div className={styles.backdropContainer}>
      <svg
        width="287"
        height="852"
        viewBox="0 0 287 852"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82.9676 852L67.8979 823.6C52.7437 795.2 22.6044 738.4 31.5785 681.6C40.6372 624.8 88.8938 568 108.958 511.2C128.938 454.4 120.811 397.6 98.8838 340.8C77.0413 284 41.4838 227.2 22.6891 170.4C3.97906 113.6 1.9472 56.8 1.01593 28.4L0 0H287V28.4C287 56.8 287 113.6 287 170.4C287 227.2 287 284 287 340.8C287 397.6 287 454.4 287 511.2C287 568 287 624.8 287 681.6C287 738.4 287 795.2 287 823.6V852H82.9676Z"
          fill="#CBD0CF"
        />
      </svg>
    </div>
  );
};
