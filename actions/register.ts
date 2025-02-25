"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export default async function register(values: z.infer<typeof RegisterSchema>) {
  const sanitizedValues = RegisterSchema.safeParse(values);

  if(!sanitizedValues.success) {
    return {
      error: "Invalid form data",
    }
  }

  const { email, name, password } = sanitizedValues.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    }
  });

  if(existingUser) {
    return {
      error: "Email already in use."
    }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    }
  });

  // TODO: Send varificaton token email

  return {
    success: "Account created",
  }
}