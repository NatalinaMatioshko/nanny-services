import React from "react";
import styles from "./CaregiverFeature.module.css";

const CaregiverFeature = ({ title, value, isAge = false }) => {
  return (
    <div className={styles.tag}>
      <p className={styles.title}>
        {title}{" "}
        <span className={isAge ? styles.valueAge : styles.value}>{value}</span>
      </p>
    </div>
  );
};

export default CaregiverFeature;
