import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserProfile.module.css";
import { logoutUser } from "../../../store/reducers/authActions";
import sprite from "../../../images/sprite.svg";

const UserProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.profile}>
      <div className={styles.userBox}>
        <div className={styles.avatar}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-avatar`} />
          </svg>
        </div>
        <p className={styles.name}>{currentUser}</p>
      </div>

      <button className={styles.logoutButton} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserProfile;
