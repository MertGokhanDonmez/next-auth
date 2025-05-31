"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = async () => {
    // firstly log out from nextauth
    await signOut({ redirect: false });
    // then log out from auth0
    const auth0Domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
    const auth0ClientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    if (!auth0Domain || !auth0ClientId) {
      console.error("Auth0 environment variables are not set.");
      return;
    }
    // redirect to auth0 logout page
    window.location.href = `https://${auth0Domain}/v2/logout?client_id=${auth0ClientId}&returnTo=${baseUrl}`;
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
    >
      Çıkış Yap
    </button>
  );
}
