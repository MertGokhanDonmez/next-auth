import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4 text-center text-blue-700">
          Yönetici Paneli
        </h1>
        <p className="text-center text-gray-700 mb-2">
          Hoş geldiniz. Buradan yönetici işlemlerinizi gerçekleştirebilirsiniz.
        </p>
      </section>
    </main>
  );
}
