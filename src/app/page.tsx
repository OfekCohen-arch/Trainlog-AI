import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="flex flex-col items-center text-center px-8 py-28">
        <span className="bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1 rounded-full mb-6">
          מופעל על ידי GPT-4 ✨
        </span>
        <h2 className="text-5xl font-extrabold leading-tight mb-6">
          תעקוב אחרי האימונים שלך<br />
          <span className="text-blue-400">בעזרת AI</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mb-10">
          תכנן אימונים, עקוב אחרי הפרוגרס, ותקבל תוכניות אימון מותאמות אישית מ-AI
        </p>
        <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl text-lg transition">
          התחל עכשיו — בחינם
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-28 max-w-5xl mx-auto">
        {[
          { icon: '📋', title: 'לוג אימונים', desc: 'תעד כל תרגיל, סט ומשקל בקלות' },
          { icon: '📈', title: 'עקוב אחרי פרוגרס', desc: 'גרפים ברורים של ה-PR וההתקדמות שלך' },
          { icon: '🤖', title: 'תוכנית AI', desc: 'קבל תוכנית אימון מותאמת אישית מ-GPT-4' },
        ].map((feature) => (
          <div key={feature.title} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <span className="text-3xl mb-4 block">{feature.icon}</span>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}