import React from "react";
import styles from "./ReviewsList.module.css";
import ReviewItem from "../ReviewItem/ReviewItem";

const ReviewsList = ({ reviews }) => {
  return (
    <div className={styles.list}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsList;
