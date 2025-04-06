"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export default async function login(values: z.infer<typeof LoginSchema>) {
  const sanitizedValues = LoginSchema.safeParse(values);

  if(!sanitizedValues.success) {
    return {
      error: "Invalid form data",
    }
  }

  const { email, password } = sanitizedValues.data;

  try {
    await signIn("credentials", {
      email,
      password,
      //redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if(error instanceof AuthError) {
      switch(error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials."
          }
        default: {
          return {
            error: "Something went wrong."
          }
        }
      }
    }
  }
}