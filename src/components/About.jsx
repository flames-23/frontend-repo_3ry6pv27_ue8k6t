export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-20 -right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-tr from-slate-800 to-slate-700 overflow-hidden">
            <div className="absolute inset-0 opacity-80" style={{background: 'radial-gradient(120% 120% at 0% 0%, rgba(59,130,246,.25) 0%, transparent 60%), radial-gradient(120% 120% at 100% 100%, rgba(168,85,247,.25) 0%, transparent 60%)'}} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-48 w-48 rounded-full border border-cyan-400/40 shadow-[0_0_80px_10px_rgba(34,211,238,.25)] animate-spin-slow" />
              <div className="absolute h-32 w-32 rounded-full border border-purple-400/40 animate-spin-slower" />
              <div className="absolute h-24 w-24 rounded-full border border-white/20" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-white/80">
            I'm an engineer specializing in AI, machine learning, and full‑stack development. I build data‑driven systems, deploy models to production, and craft delightful, immersive user experiences.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/80">
            {[
              'Deep Learning', 'LLM Apps', 'Computer Vision', 'NLP', 'MLOps', 'Retrieval & RAG', 'Realtime AI', 'Cloud & DevOps'
            ].map((s) => (
              <li key={s} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
