import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CaregiversPage.module.css";
import { fetchCaregivers } from "../../store/actions/caregiverActions";
import CaregiverGrid from "../../components/Caregiver/CaregiverGrid/CaregiverGrid";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import FilterOptions from "../../components/Caregiver/FilterOptions/FilterOptions";

const CaregiversPage = () => {
  const dispatch = useDispatch();
  const {
    data: caregivers,
    isLoading,
    error,
    filter,
  } = useSelector((state) => state.caregivers);

  useEffect(() => {
    dispatch(fetchCaregivers());
  }, [dispatch]);

  // Apply filtering to caregivers
  const getFilteredCaregivers = () => {
    switch (filter) {
      case "a-to-z":
        return [...caregivers].sort((a, b) => a.name.localeCompare(b.name));
      case "z-to-a":
        return [...caregivers].sort((a, b) => b.name.localeCompare(a.name));
      case "price-low":
        return caregivers.filter((caregiver) => caregiver.price_per_hour <= 10);
      case "price-high":
        return caregivers.filter((caregiver) => caregiver.price_per_hour > 10);
      case "top-rated":
        return [...caregivers].filter((caregiver) => caregiver.rating >= 4.7);
      case "new-caregivers":
        return [...caregivers].filter((caregiver) => caregiver.rating < 4.7);
      default:
        return caregivers;
    }
  };

  const filteredCaregivers = getFilteredCaregivers();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      {error ? (
        <div className={styles.errorContainer}>
          <h3 className={styles.errorMessage}>
            Something went wrong, please try again.
          </h3>
          <button
            className={styles.reloadButton}
            onClick={() => dispatch(fetchCaregivers())}
          >
            Reload
          </button>
        </div>
      ) : (
        <>
          <FilterOptions />
          {filteredCaregivers.length > 0 ? (
            <CaregiverGrid caregivers={filteredCaregivers} />
          ) : (
            <p className={styles.emptyMessage}>
              No caregivers found with these filter settings.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default CaregiversPage;
