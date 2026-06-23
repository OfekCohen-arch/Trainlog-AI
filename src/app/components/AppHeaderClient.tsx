"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { User } from "@supabase/supabase-js";

export default function AppHeaderClient({ user }: { user: User | null }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
    setLoading(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-800 px-6 py-4">
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-xl font-bold text-blue-400">TrainLog AI 🏋️</h1>
        <div className="flex gap-4 items-center">
          {user ? (
            <button
              onClick={handleLogout}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 shadow-sm shadow-blue-600/10"
            >
              {loading ? "מתנתק..." : "התנתק"}
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white  transition"
              >
                התחבר
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold transition dark:text-white"
              >
                התחל בחינם
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
