import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookmarksPage.module.css";
import { fetchCaregivers } from "../../store/actions/caregiverActions";
import CaregiverGrid from "../../components/Caregiver/CaregiverGrid/CaregiverGrid";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const BookmarksPage = () => {
  const dispatch = useDispatch();
  const bookmarkedNames = useSelector((state) => state.bookmarks.items);
  const { data: allCaregivers, isLoading } = useSelector(
    (state) => state.caregivers
  );

  useEffect(() => {
    if (allCaregivers.length === 0) {
      dispatch(fetchCaregivers());
    }
  }, [dispatch, allCaregivers.length]);

  const bookmarkedCaregivers = allCaregivers.filter((caregiver) =>
    bookmarkedNames.includes(caregiver.name)
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      {bookmarkedCaregivers.length > 0 ? (
        <CaregiverGrid caregivers={bookmarkedCaregivers} />
      ) : (
        <p className={styles.emptyMessage}>
          You haven't bookmarked any babysitters yet. Browse our babysitters and
          click the heart icon to save your favorites.
        </p>
      )}
    </div>
  );
};

export default BookmarksPage;
