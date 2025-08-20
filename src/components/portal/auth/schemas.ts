import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 6 characters long"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;