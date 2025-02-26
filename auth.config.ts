// Using this to eliminate the issues while running Prisma on edge.
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [Google, GitHub],
} satisfies NextAuthConfig;