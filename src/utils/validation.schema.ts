import { z } from "zod";
const essential = z
  .object({
    connect: z.array(
      z.object({
        id: z.number(),
        documentId: z.string().optional(),
        isTempory: z.boolean().optional(),
      }),
    ),
  })
  .nullable();
export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Z\s]+$/i, "First name must contain only letters and spaces"),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Invalid email address")),
  phone: z.string().optional(),

  message: z.string().optional(),
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

  phone: z
    .string()
    .min(1, "Phone number is")
    .refine((val) => !val || /^\d{10,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
  department: essential,

  resume: z
    .any()
    .refine((files) => files && files.length > 0, "Resume is required")
    .refine(
      (files) => files?.[0]?.size <= 10 * 1024 * 1024, // 10MB
      "File must be smaller than 10MB",
    )
    .refine(
      (files) => files?.[0]?.type === "application/pdf",
      "Only PDF files are allowed",
    ),
});

export const ContactUsFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\s]+$/, "First name must contain only letters and spaces"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z\s]+$/, "Last name must contain only letters and spaces"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  company: z.string().min(1, "Company name is required"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't exceed 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),

  service: z.any(),

  technology: z.any(),

  message: z.string().min(1, "Message is required"),
});

export const DemoRequestFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\d{1,3}$/, "Enter a valid mobile number")
    .optional(),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
  company: z.string().min(1, "company is required"),
});

export const freeConsultationLeadSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  location: z.string().min(1, "Location is required"),
  message: z.string().min(1, "Message is required"),
  insight: essential,
  organization: z.string().min(1, "Organization is required"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
});

export const webinarReserveFormSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\d{1,3}$/, "Enter a valid mobile number")
    .optional(),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10,15}$/.test(val), {
      message: "Enter a valid phone number",
    }),
  organization: z.string().min(1, "company is required"),
});

export const newsRoomFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export const fabconDecisionLeadSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),

  email: z.string().min(1, "Email is required").email("Invalid email address"),

  timeSlot: z.string().min(1, "Preferred time slot is required"),

  company: z.string().min(1, "Company is required"),

  message: z.string().min(1, "Message is required"),
  buttonText: z.string().optional(),
});

export const blogFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Z\s]+$/i, "Name must contain only letters and spaces"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  organization: z.string().min(1, "company is required"),
  blogId: z.string().optional(),
});

export type ContactUsFormSchema = z.infer<typeof ContactUsFormSchema>;
export type FreeConsultationLeadSchema = z.infer<
  typeof freeConsultationLeadSchema
>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type BookADemoFormData = z.infer<typeof bookADemoSchema>;
export type CareerNewLetterFormData = z.infer<typeof CareerNewLetterSchema>;
export type DemoRequestFormSchema = z.infer<typeof DemoRequestFormSchema>;
export type WebinarReserveFormSchema = z.infer<typeof webinarReserveFormSchema>;
export type NewsRoomFormSchema = z.infer<typeof newsRoomFormSchema>;

export type FabconDecisionLeadSchema = z.infer<typeof fabconDecisionLeadSchema>;
export type BlogFormSchema = z.infer<typeof blogFormSchema>;
