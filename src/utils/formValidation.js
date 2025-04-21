import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const bookingSchema = z.object({
  address: z.string().min(1, { message: "Address is required" }),
  phoneNumber: z.string().regex(/^\+380\d{9}$/, {
    message: "Phone should be in format +380XXXXXXXXX",
  }),
  childAge: z
    .string()
    .refine((val) => !isNaN(parseInt(val)), {
      message: "Age must be a number",
    })
    .transform((val) => parseInt(val))
    .refine((val) => val >= 1, { message: "Minimum age is 1 year" })
    .refine((val) => val <= 16, { message: "Maximum age is 16 years" }),
  appointmentTime: z.string().min(1, { message: "Time is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email format" }),
  parentName: z
    .string()
    .min(2, { message: "Parent's name must be at least 2 characters" }),
  additionalInfo: z
    .string()
    .max(500, { message: "Comment must not exceed 500 characters" })
    .optional(),
});
