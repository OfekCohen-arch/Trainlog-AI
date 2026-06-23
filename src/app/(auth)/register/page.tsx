'use client'

import { createClient } from "@/lib/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterPage(){
    const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [error,setError] = useState('')
        const [loading,setLoading] = useState(false)
        const router = useRouter()
        const supabase = createClient()

        const handleRegister = async()=>{
            setLoading(true)
            setError('')

            const {error} = await supabase.auth.signUp({email,password})
            if(error){
            setLoading(false)
            setError(error.message)
            return
            }

            router.push('/dashboard')
            router.refresh()
        }
         return(
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
     <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md flex flex-col items-center justify-center">
    <h1 className="text-2xl font-bold text-white mb-2"> צור חשבון</h1>
    <p className="text-gray-400 mb-8">הצטרף ל-TrainLog AI</p>

    <div className="space-y-4">
    <input
      type="email"
      placeholder="אימייל"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="password"
      placeholder="סיסמה"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
    />

    {error && <p className="text-red-400 text-sm">{error}</p>}
    <button
    onClick={handleRegister}
    disabled={loading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
    >
    {!loading ? 'הירשם':'נרשם...'}
    </button>
    </div>
    <p className="text-gray-400 text-center mt-6">
כבר יש לך חשבון? {' '} 
   <Link href="/login" className="text-blue-400 hover:underline">
   התחבר
   </Link>
    </p>
     </div>
    </div>
    )
}