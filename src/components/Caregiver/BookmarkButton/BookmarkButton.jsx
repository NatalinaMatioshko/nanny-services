import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./BookmarkButton.module.css";
import {
  addBookmark,
  removeBookmark,
} from "../../../store/actions/bookmarkActions";
import sprite from "../../../images/sprite.svg";

const BookmarkButton = ({ caregiverName }) => {
  const dispatch = useDispatch();
  const bookmarkedCaregivers = useSelector((state) => state.bookmarks.items);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setIsBookmarked(bookmarkedCaregivers.includes(caregiverName));
    } else {
      setIsBookmarked(false);
    }
  }, [bookmarkedCaregivers, caregiverName, currentUser]);

  const handleToggleBookmark = () => {
    if (!currentUser) {
      toast.error(
        "Only registered users can bookmark caregivers. Please register."
      );
      return;
    }

    if (isBookmarked) {
      dispatch(removeBookmark(caregiverName));
      toast.info(`${caregiverName} removed from bookmarks`);
    } else {
      dispatch(addBookmark(caregiverName));
      toast.success(`${caregiverName} added to bookmarks`);
    }
  };

  return (
    <button
      className={styles.button}
      onClick={handleToggleBookmark}
      aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
    >
      <svg
        className={`${styles.icon} ${isBookmarked ? styles.active : ""}`}
        width="26"
        height="26"
      >
        <use href={`${sprite}#icon-${isBookmarked ? "liked" : "like"}`} />
      </svg>
    </button>
  );
};

export default BookmarkButton;
