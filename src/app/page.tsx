import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">
          Hoş geldin,{" "}
          <span className="text-blue-600">{session.user?.name}</span>!
        </h1>
        <div className="space-y-4">
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
