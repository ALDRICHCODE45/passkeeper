"use server";
import { genSaltSync, hashSync } from "bcrypt";

import { db } from "@/lib/db";

interface Args {
  username: string;
  email: string;
  password: string;
}

export const createuser = async ({ email, password, username }: Args) => {
  console.log({ email, password, username });
  const salt = genSaltSync(10);
  const newUser = await db.user.create({
    data: {
      email,
      username,
      hashedPassword: hashSync(password, salt),
    },
  });
  console.log({ newUser });

  if (!newUser) {
    return {
      ok: false,
      error: "something went wrong",
    };
  }
  return {
    ok: true,
    msg: "user created",
  };
};
