import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterOptions.module.css";
import { FILTER_LABELS, FILTER_OPTIONS } from "../../../utils/constants";
import { setFilter } from "../../../store/actions/caregiverReducer";
import sprite from "../../../images/sprite.svg";

const FilterOptions = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.caregivers.filter);
  const [showOptions, setShowOptions] = useState(false);

  const filterRef = useRef(null);

  const handleFilterChange = (filterValue) => {
    dispatch(setFilter(filterValue));
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={filterRef}>
      <p className={styles.label}>Filters</p>
      <div
        className={styles.selector}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span>{FILTER_LABELS[currentFilter]}</span>
        <svg height="20" width="20">
          <use href={`${sprite}#icon-chevron-down`} />
        </svg>
      </div>

      {showOptions && (
        <div className={styles.options}>
          {Object.entries(FILTER_LABELS).map(([value, label]) => (
            <div
              key={value}
              className={`${styles.option} ${
                currentFilter === value ? styles.selected : ""
              }`}
              onClick={() => handleFilterChange(value)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterOptions;
