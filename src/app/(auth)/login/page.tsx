'use client'

import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async () => {
        setLoading(true)
        setError('')
        const { error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
            setError(error.message)
            setLoading(false)
            return
        }

        router.push('/dashboard')
        router.refresh()
    }

    return (
        // הווסף bg-white למצב בהיר כדי שלא יישאר שקוף
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-200 p-4">
            {/* הוספת shadow-md למצב בהיר ו-border עדין במצב כהה לשיפור העומק */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl w-full max-w-md flex flex-col items-center justify-center shadow-md dark:shadow-none">
                
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">ברוך הבא</h1>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-sm">התחבר ל-TrainLog AI</p>

                <div className="space-y-4 w-full" dir="rtl">
                    <input
                        type="email"
                        placeholder="אימייל"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 px-4 py-3 rounded-xl outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                    />
                    <input
                        type="password"
                        placeholder="סיסמה"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 px-4 py-3 rounded-xl outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                    />

                    {error && <p className="text-red-500 text-sm font-medium mt-1 text-right">{error}</p>}
                    
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 disabled:opacity-50 active:scale-[0.99] mt-2 shadow-sm shadow-blue-600/10"
                    >
                        {!loading ? 'התחבר' : 'מתחבר...'}
                    </button>
                </div>
                
                <p className="text-neutral-500 dark:text-neutral-400 text-center mt-6 text-sm">
                    אין לך חשבון?{' '}
                    <Link href="/register" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        הירשם
                    </Link>
                </p>
            </div>
        </div>
    )
}
