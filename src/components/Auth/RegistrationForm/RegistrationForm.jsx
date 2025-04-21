import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import styles from "./RegistrationForm.module.css";
import { registrationSchema } from "../../../utils/formValidation";
import {
  registerUser,
  fetchUserProfile,
} from "../../../store/reducers/authActions";
import FormField from "../../FormField/FormField";

const RegistrationForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(registerUser(data)).unwrap();

      setTimeout(() => {
        dispatch(fetchUserProfile());
      }, 1000);

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="fullName"
        placeholder="Full Name"
        register={register}
        error={errors.fullName?.message}
      />

      <FormField
        name="email"
        type="email"
        placeholder="Email"
        register={register}
        error={errors.email?.message}
      />

      <FormField
        name="password"
        type="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />

      <div className={styles.submitContainer}>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
