import React, { useState } from "react";
import styles from "./CaregiverCard.module.css";
import { calculateAge, formatList, formatRating } from "../../../utils/helpers";
import CaregiverFeature from "../CaregiverFeature/CaregiverFeature";
import ReviewsList from "../ReviewsList/ReviewsList";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import Modal from "../../Modal/Modal";
import BookingForm from "../../BookingForm/BookingForm";
import sprite from "../../../images/sprite.svg";

const CaregiverCard = ({ caregiverData }) => {
  const [showReviews, setShowReviews] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  const age = calculateAge(caregiverData.birthday);
  const charactersList = formatList(caregiverData.characters);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={caregiverData.avatar_url}
          alt={caregiverData.name}
          className={styles.image}
        />
        <svg className={styles.status} width="14" height="14">
          <use href={`${sprite}#icon-status-online`} />
        </svg>
      </div>

      <div className={styles.bookmarkButton}>
        <BookmarkButton caregiverName={caregiverData.name} />
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <div>
            <p className={styles.position}>Babysitter</p>
            <h3 className={styles.name}>{caregiverData.name}</h3>
          </div>

          <div className={styles.meta}>
            <p className={styles.metaItem}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-location`} />
              </svg>
              {caregiverData.location}
            </p>
            <p className={styles.metaItem}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-star`} />
              </svg>
              Rating: {formatRating(caregiverData.rating)}
            </p>
            <p className={styles.metaItem}>
              Price / 1 hour:
              <span className={styles.priceHighlight}>
                {" "}
                {caregiverData.price_per_hour}$
              </span>
            </p>
          </div>
        </div>

        <div className={styles.features}>
          <CaregiverFeature title="Age:" value={age} isAge={true} />
          <CaregiverFeature
            title="Experience:"
            value={caregiverData.experience}
          />
          <CaregiverFeature title="Kids Age:" value={caregiverData.kids_age} />
          <CaregiverFeature title="Characters:" value={charactersList} />
          <CaregiverFeature
            title="Education:"
            value={caregiverData.education}
          />
        </div>

        <p className={styles.about}>{caregiverData.about}</p>

        {!showReviews ? (
          <button className={styles.readMoreButton} onClick={toggleReviews}>
            Read more
          </button>
        ) : (
          <>
            <ReviewsList reviews={caregiverData.reviews} />
            <div className={styles.actionButtons}>
              <button className={styles.bookButton} onClick={openBookingModal}>
                Make an appointment
              </button>
            </div>
          </>
        )}
      </div>

      {showBookingModal && (
        <Modal
          onClose={closeBookingModal}
          width="599px"
          height={window.innerWidth >= 1440 ? "900px" : "90vh"}
          scrollable={true}
        >
          <BookingForm
            onClose={closeBookingModal}
            caregiverImage={caregiverData.avatar_url}
            caregiverName={caregiverData.name}
          />
        </Modal>
      )}
    </div>
  );
};

export default CaregiverCard;
