"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export default async function login(values: z.infer<typeof LoginSchema>) {
  const sanitizedValues = LoginSchema.safeParse(values);

  if(!sanitizedValues.success) {
    return {
      error: "Invalid form data",
    }
  }
  return {
    success: "Successfully logged in",
  }
}