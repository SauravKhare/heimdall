// Using this to eliminate the issues while running Prisma on edge.
import Creddentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";

import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Creddentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if(validatedFields.success) {
          const {email, password} = validatedFields.data;

          const user = await getUserByEmail(email);
          if(!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if(passwordMatch) return user;
        }
        return null;
      }
    })
  ],
} satisfies NextAuthConfig;