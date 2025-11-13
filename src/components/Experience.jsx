export default function Experience() {
  const items = [
    { year: '2024', title: 'Senior AI/ML Engineer', desc: 'Led LLM platform initiatives and productionized multimodal pipelines.' },
    { year: '2022', title: 'Machine Learning Engineer', desc: 'Scaled training workflows and observability across teams.' },
    { year: '2020', title: 'Research Engineer', desc: 'Prototyped NLP and vision systems with cutting-edge models.' },
  ]
  return (
    <section id="experience" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/60 to-purple-500/60" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div key={it.year} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className={`md:col-start-${i % 2 ? 2 : 1}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-cyan-300 text-sm">{it.year}</div>
                    <div className="text-lg font-semibold mt-1">{it.title}</div>
                    <p className="text-white/80 mt-2">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
