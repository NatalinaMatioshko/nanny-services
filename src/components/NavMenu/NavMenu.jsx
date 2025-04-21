import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./NavMenu.module.css";
import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";
import LoginForm from "../Auth/LoginForm/LoginForm";
import RegistrationForm from "../Auth/RegistrationForm/RegistrationForm";
import UserProfile from "../Auth/UserProfile/UserProfile";
import sprite from "../../images/sprite.svg";

const NavMenu = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const currentUser = useSelector((state) => state.auth.currentUser);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowMobileMenu(false);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setShowMobileMenu(false);
  };

  const closeLoginModal = () => setShowLoginModal(false);
  const closeRegisterModal = () => setShowRegisterModal(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Logo />
            <button className={styles.mobileButton} onClick={toggleMobileMenu}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-menu`} />
              </svg>
            </button>
          </div>

          <nav className={styles.center}>
            <div className={styles.navMenu}>
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
            </div>
          </nav>

          <div className={styles.right}>
            {currentUser ? (
              <UserProfile />
            ) : (
              <>
                <button className={styles.loginBtn} onClick={openLoginModal}>
                  Log In
                </button>
                <button
                  className={styles.registerBtn}
                  onClick={openRegisterModal}
                >
                  Registration
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {showMobileMenu && (
        <div className={styles.mobileOverlay} onClick={toggleMobileMenu}>
          <div
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.mobileClose} onClick={toggleMobileMenu}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-x`} />
              </svg>
            </button>

            <div className={styles.mobileContent}>
              <nav className={styles.mobileNav}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.mobileLink} ${styles.active}`
                      : styles.mobileLink
                  }
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/nannies"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.mobileLink} ${styles.active}`
                      : styles.mobileLink
                  }
                  onClick={toggleMobileMenu}
                >
                  Nannies
                </NavLink>
                {currentUser && (
                  <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.mobileLink} ${styles.active}`
                        : styles.mobileLink
                    }
                    onClick={toggleMobileMenu}
                  >
                    Favorites
                  </NavLink>
                )}
              </nav>

              <div className={styles.mobileAuth}>
                {currentUser ? (
                  <UserProfile />
                ) : (
                  <div className={styles.mobileButtons}>
                    <button
                      className={styles.loginBtn}
                      onClick={openLoginModal}
                    >
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
            </div>
          </div>
        </div>
      )}

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
    </>
  );
};

export default NavMenu;
