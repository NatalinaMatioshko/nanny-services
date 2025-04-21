import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { loginSchema } from "../../../utils/formValidation";
import { loginUser } from "../../../store/reducers/authActions";
import FormField from "../../FormField/FormField";

const LoginForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
