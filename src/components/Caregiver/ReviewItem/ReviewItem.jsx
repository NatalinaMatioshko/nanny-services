import React from "react";
import styles from "./ReviewItem.module.css";
import { getInitials } from "../../../utils/helpers";
import sprite from "../../../images/sprite.svg";

const ReviewItem = ({ review }) => {
  const { comment, rating, reviewer } = review;

  return (
    <div className={styles.item}>
      <div className={styles.reviewer}>
        <div className={styles.avatar}>{getInitials(reviewer)}</div>
        <div className={styles.meta}>
          <p className={styles.name}>{reviewer}</p>
          <div className={styles.rating}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-star`} />
            </svg>
            {rating}
          </div>
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default ReviewItem;
