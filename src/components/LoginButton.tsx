"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("auth0")}
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded inline-block"
    >
      Auth0 ile Giriş Yap
    </button>
  );
}
