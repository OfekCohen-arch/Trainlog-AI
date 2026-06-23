import Link from 'next/link'

export default function LandingPage() {
  return (
    // משתנה אוטומטית מרקע לבן לרקע כהה עמוק
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-200">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-8 py-28 max-w-4xl mx-auto">
        {/* תגית AI עליונה */}
        <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-100 dark:border-transparent">
          מופעל על ידי GPT-4 ✨
        </span>
        
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          תעקוב אחרי האימונים שלך<br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">בעזרת AI</span>
        </h2>
        
        <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          תכנן אימונים, עקוב אחרי הפרוגרס, ותקבל תוכניות אימון מותאמות אישית מ-AI
        </p>
        
        <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-[0.98]">
          התחל עכשיו — בחינם
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-28 max-w-5xl mx-auto" dir="rtl">
        {[
          { icon: '📋', title: 'לוג אימונים', desc: 'תעד כל תרגיל, סט ומשקל בקלות' },
          { icon: '📈', title: 'עקוב אחרי פרוגרס', desc: 'גרפים ברורים של ה-PR וההתקדמות שלך' },
          { icon: '🤖', title: 'תוכנית AI', desc: 'קבל תוכנית אימון מותאמת אישית מ-GPT-4' },
        ].map((feature) => (
          <div 
            key={feature.title} 
            className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm dark:shadow-none hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-3xl mb-4 block">{feature.icon}</span>
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
