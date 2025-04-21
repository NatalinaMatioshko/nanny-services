import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ size = 50, color = "#103931" }) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderTop: `3px solid ${color}`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.spinner} style={spinnerStyle}></div>
    </div>
  );
};

export default LoadingSpinner;
