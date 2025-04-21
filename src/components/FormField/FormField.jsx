import React, { useState } from "react";
import styles from "./FormField.module.css";
import sprite from "../../images/sprite.svg";

const FormField = ({
  label,
  type = "text",
  name,
  id,
  value,
  placeholder,
  error,
  register,
  required = false,
  disabled = false,
  className = "",
  icon,
  togglePassword,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`${styles.formGroup} ${className}`}>
      {label && (
        <label htmlFor={id || name} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          type={inputType}
          id={id || name}
          name={name}
          className={`${styles.input} ${error ? styles.hasError : ""}`}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          {...(register && register(name))}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className={styles.passwordToggle}
          >
            {showPassword ? (
              <svg width="20" height="20">
                <use href={`${sprite}#icon-show-eye`} />
              </svg>
            ) : (
              <svg width="20" height="20">
                <use href={`${sprite}#icon-not-show-eye`} />
              </svg>
            )}
          </button>
        )}

        {icon && !togglePassword && <span className={styles.icon}>{icon}</span>}
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default FormField;
