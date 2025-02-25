"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export default async function register(values: z.infer<typeof RegisterSchema>) {
  const sanitizedValues = RegisterSchema.safeParse(values);

  if(!sanitizedValues.success) {
    return {
      error: "Invalid form data",
    }
  }
  return {
    success: "Successfully logged in",
  }
}