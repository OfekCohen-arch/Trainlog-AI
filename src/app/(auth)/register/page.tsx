'use client'

import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleRegister = async () => {
        setLoading(true)
        setError('')

        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
            setLoading(false)
            setError(error.message)
            return
        }

        router.push('/dashboard')
        router.refresh()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 transition-colors duration-200">
            {/* כרטיסיית הטופס המשתנה אוטומטית בין בהיר לכהה */}
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl w-full max-w-md flex flex-col items-center justify-center shadow-sm dark:shadow-xl">
                
                <h1 className="text-2xl font-bold text-neutral-950 dark:text-white mb-1">צור חשבון</h1>
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 text-sm">הצטרף ל-TrainLog AI</p>

                {/* תיבת הטופס - רוחב מלא */}
                <div className="w-full space-y-4">
                    <input
                        type="email"
                        placeholder="אימייל"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white px-4 py-3 rounded-xl outline-none placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-blue-500 dark:focus:border-blue-500 transition"
                    />
                    
                    <input
                        type="password"
                        placeholder="סיסמה"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white px-4 py-3 rounded-xl outline-none placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-blue-500 dark:focus:border-blue-500 transition"
                    />

                    {error && <p className="text-red-500 dark:text-red-400 text-sm text-center">{error}</p>}
                    
                    <button
                        onClick={handleRegister}
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50 shadow-sm"
                    >
                        {!loading ? 'הירשם' : 'נרשם...'}
                    </button>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-center text-sm mt-6">
                    כבר יש לך חשבון?{' '}
                    <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                        התחבר
                    </Link>
                </p>
            </div>
        </div>
    )
}
