import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";
import { bookingSchema } from "../../utils/formValidation";
import FormField from "../FormField/FormField";
import sprite from "../../images/sprite.svg";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ onClose, caregiverImage, caregiverName }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      address: "",
      phoneNumber: "",
      childAge: "",
      appointmentTime: "",
      email: "",
      parentName: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data) => {
    toast.success("Appointment request sent successfully!");
    onClose();
  };

  const datePickerRef = useRef(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Make an appointment with a babysitter</h2>
      <p className={styles.description}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>

      <div className={styles.caregiverInfo}>
        <img
          src={caregiverImage}
          alt={caregiverName}
          className={styles.caregiverImage}
        />
        <div className={styles.caregiverDetails}>
          <p className={styles.caregiverRole}>Your caregiver</p>
          <p className={styles.caregiverName}>{caregiverName}</p>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <FormField
            name="address"
            register={register}
            placeholder="Address"
            error={errors.address?.message}
          />

          <FormField
            name="phoneNumber"
            register={register}
            placeholder="+380"
            error={errors.phoneNumber?.message}
          />

          <FormField
            name="childAge"
            type="number"
            register={register}
            placeholder="Child's age"
            error={errors.childAge?.message}
          />

          <div
            className={`${styles.formGroup} ${
              errors.appointmentTime ? styles.hasError : ""
            }`}
          >
            <div className={styles.timePickerWrapper}>
              <Controller
                control={control}
                name="appointmentTime"
                render={({ field }) => {
                  return (
                    <>
                      <DatePicker
                        ref={datePickerRef}
                        selected={
                          field.value
                            ? new Date(`2023-01-01T${field.value}`)
                            : null
                        }
                        onChange={(date) => {
                          if (date) {
                            const hours = date
                              .getHours()
                              .toString()
                              .padStart(2, "0");
                            const minutes = date
                              .getMinutes()
                              .toString()
                              .padStart(2, "0");
                            field.onChange(`${hours}:${minutes}`);
                            setTimeout(() => {
                              if (datePickerRef.current) {
                                datePickerRef.current.setOpen(false);
                              }
                            }, 50);
                          } else {
                            field.onChange("");
                          }
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="HH:mm"
                        timeFormat="HH:mm"
                        timeCaption="Meeting time"
                        placeholderText="00:00"
                        className={styles.timePicker}
                      />
                      <svg
                        className={styles.timePickerIcon}
                        width="24"
                        height="24"
                      >
                        <use href={`${sprite}#icon-clock`} />
                      </svg>
                    </>
                  );
                }}
              />
            </div>
            {errors.appointmentTime && (
              <p className={styles.error}>{errors.appointmentTime.message}</p>
            )}
          </div>
        </div>

        <FormField
          name="email"
          type="email"
          register={register}
          placeholder="Email"
          error={errors.email?.message}
        />

        <FormField
          name="parentName"
          register={register}
          placeholder="Father's or mother's name"
          error={errors.parentName?.message}
        />

        <div
          className={`${styles.formGroup} ${
            errors.additionalInfo ? styles.hasError : ""
          }`}
        >
          <textarea
            {...register("additionalInfo")}
            className={styles.textArea}
            placeholder="Comment"
          />
          {errors.additionalInfo && (
            <p className={styles.error}>{errors.additionalInfo.message}</p>
          )}
        </div>

        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
