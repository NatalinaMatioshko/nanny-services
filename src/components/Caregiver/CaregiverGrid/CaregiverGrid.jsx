import React, { useState } from "react";
import styles from "./CaregiverGrid.module.css";
import CaregiverCard from "../CaregiverCard/CaregiverCard";

const CaregiverGrid = ({ caregivers }) => {
  const [displayCount, setDisplayCount] = useState(3);
  const itemsPerPage = 4;

  const visibleCaregivers = caregivers.slice(0, displayCount);

  const loadMore = () => {
    setDisplayCount(displayCount + itemsPerPage);
  };

  return (
    <div>
      <div className={styles.grid}>
        {visibleCaregivers.map((caregiver, index) => (
          <CaregiverCard key={index} caregiverData={caregiver} />
        ))}
      </div>

      {displayCount < caregivers.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CaregiverGrid;
