import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Z\s]+$/i, "First name must contain only letters and spaces"),
  Organization: z
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
export type ContactFormData = z.infer<typeof contactSchema>;
