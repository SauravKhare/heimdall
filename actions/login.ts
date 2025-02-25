"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export default async function login(values: z.infer<typeof LoginSchema>) {
  console.log("Login action", values);
}