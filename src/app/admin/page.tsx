import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4 text-center text-blue-700">
          Admin Panel
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Welcome. You can perform your administrative tasks here.
        </p>
        <div className="text-center">
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
