import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./HomePage.module.css";
import Logo from "../../components/Logo/Logo";
import UserProfile from "../../components/Auth/UserProfile/UserProfile";
import Modal from "../../components/Modal/Modal";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import RegistrationForm from "../../components/Auth/RegistrationForm/RegistrationForm";
import sprite from "../../images/sprite.svg";

const HomePage = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleGetStarted = () => {
    navigate("/nannies");
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <Logo />
          </div>

          <div className={styles.headerRight}>
            <nav className={styles.navMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/nannies"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                Nannies
              </NavLink>
              {currentUser && (
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                >
                  Favorites
                </NavLink>
              )}
            </nav>

            {currentUser ? (
              <UserProfile />
            ) : (
              <div className={styles.authBtnGroup}>
                <button className={styles.loginBtn} onClick={openLoginModal}>
                  Log In
                </button>
                <button
                  className={styles.registerBtn}
                  onClick={openRegisterModal}
                >
                  Registration
                </button>
              </div>
            )}
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.textContent}>
              <h1 className={styles.title}>Make Life Easier for the Family:</h1>
              <p className={styles.subtitle}>
                Find Babysitters Online for All Occasions
              </p>
            </div>

            <button
              className={styles.getStartedButton}
              onClick={handleGetStarted}
            >
              <span>Get started</span>
              <svg className={styles.arrowIcon} height="17" width="15">
                <use href={`${sprite}#icon-arrow`} />
              </svg>
            </button>
          </div>

          <div className={styles.right}></div>

          <div className={styles.statsCard}>
            <div className={styles.statsIconContainer}>
              <svg height="30" width="30">
                <use href={`${sprite}#icon-check-arrow`} />
              </svg>
            </div>
            <div>
              <p className={styles.statsText}>Experienced caregivers</p>
              <p className={styles.statsNumber}>15,000</p>
            </div>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <Modal onClose={closeLoginModal}>
          <div className={styles.authContainer}>
            <h2 className={styles.authTitle}>Log In</h2>
            <p className={styles.authDescription}>
              Welcome back! Please enter your credentials to access your account
              and continue your babysitter search.
            </p>
            <LoginForm onSuccess={closeLoginModal} />
          </div>
        </Modal>
      )}

      {showRegisterModal && (
        <Modal onClose={closeRegisterModal}>
          <div className={styles.authContainer}>
            <h2 className={styles.authTitle}>Registration</h2>
            <p className={styles.authDescription}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              details.
            </p>
            <RegistrationForm onSuccess={closeRegisterModal} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
