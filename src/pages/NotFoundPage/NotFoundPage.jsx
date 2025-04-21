import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorDescription}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className={styles.errorActions}>
          <Link to="/" className={styles.homeLink}>
            Go to Home
          </Link>
          <Link to="/nannies" className={styles.caregiversLink}>
            Browse Caregivers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
