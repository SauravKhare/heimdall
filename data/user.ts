import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
  try {
    const user = db.user.findUnique({
      where: {
        email
      }
    });
    return user;
  } catch {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = db.user.findUnique({
      where: {
        id
      }
    });
  } catch {
    return null;
  }
}