import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`${styles.logo} ${className}`}>
      Nanny.Services
    </Link>
  );
};

export default Logo;
