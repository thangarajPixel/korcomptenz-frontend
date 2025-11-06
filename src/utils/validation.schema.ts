import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Z\s]+$/i, "First name must contain only letters and spaces"),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Invalid email address")),
  phone: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number can't exceed 15 digits")
    .regex(/^\d+$/, "Mobile number must contain only digits"),
  message: z.string().min(1, "Message is required"),
  organization: z.string().min(1, "Organization is required"),
  caseStudyId: z.string().optional(),
});

export const bookADemoSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Invalid email address")),
  organization: z.string().min(1, "Organization is required"),
});

export const CareerNewLetterSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\d{1,3}$/, "Enter a valid mobile number"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
  department: z.union([
    z.number().min(1, "Department is required"),
    z.string().min(1, "Department is required"),
  ]),

  resume: z
    .any()
    .refine((files) => files && files.length > 0, "Resume is required")
    .refine(
      (files) => files?.[0]?.size <= 10 * 1024 * 1024, // 10MB
      "File must be smaller than 10MB"
    )
    .refine(
      (files) => files?.[0]?.type === "application/pdf",
      "Only PDF files are allowed"
    ),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type BookADemoFormData = z.infer<typeof bookADemoSchema>;
export type CareerNewLetterFormData = z.infer<typeof CareerNewLetterSchema>;
