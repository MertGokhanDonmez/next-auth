"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Hesabınıza giriş yapın
          </h2>
          {error && (
            <div className="mt-2 text-center text-sm text-red-600">
              {error === "AccessDenied" &&
                "Giriş reddedildi. Lütfen tekrar deneyin."}
              {error === "Configuration" && "Sunucu yapılandırma hatası."}
              {error === "Verification" && "Doğrulama hatası."}
            </div>
          )}
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => signIn("auth0", { callbackUrl: "/dashboard" })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Auth0 ile Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}
