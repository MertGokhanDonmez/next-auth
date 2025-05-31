import Auth0Provider from "next-auth/providers/auth0";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: "https://" + process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
      client: {
        token_endpoint_auth_method: "client_secret_post",
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at! * 1000,
          user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  events: {
    async signOut() {
      const baseUrl = process.env.APP_BASE_URL || "http://localhost:3000";
      const logoutUrl = `${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${baseUrl}/login`;
      
      try {
        if (typeof window !== "undefined") {
          window.location.href = logoutUrl;
        }
      } catch (error) {
        console.error("Auth0 logout error:", error);
      }
    },
  },
};

export const adminEmails = ["mertgokhandonmez@gmail.com"]; // admin email list. Add yours to test.