'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { User } from '@supabase/supabase-js'

export default function AppHeaderClient({ user }: { user: User | null }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setLoading(true)
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
    setLoading(false)
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-xl font-bold text-blue-400">TrainLog AI 🏋️</h1>
        <div className="flex gap-4 items-center">
          {user ? (
            <button onClick={handleLogout} className="bg-indigo-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold transition">
              {loading ? 'מתנתק...' : 'התנתק'}
            </button>
          ) : (
            <>
              <Link href="/login" className="text-gray-400 hover:text-white transition">התחבר</Link>
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold transition">התחל בחינם</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}