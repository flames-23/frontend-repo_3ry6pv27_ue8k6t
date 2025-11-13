import Reveal from './Reveal'

export default function Blog() {
  const posts = [
    { title: 'Scaling RAG Pipelines', tag: 'LLM', excerpt: 'Architectures and benchmarks for production-grade retrieval.' },
    { title: 'Vision Models in the Browser', tag: 'CV', excerpt: 'WebGPU + ONNX Runtime for efficient inference.' },
    { title: 'MLOps Observability', tag: 'MLOps', excerpt: 'Telemetry, data quality, and drift tracking strategies.' },
  ]
  return (
    <section id="blog" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">Blog & Research</h2>
          <p className="mt-3 text-white/80 max-w-2xl">Notes, experiments, and write‑ups from the lab.</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Reveal key={p.title}>
              <article className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-colors">
                <div className="text-xs uppercase tracking-widest text-purple-300">{p.tag}</div>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/80">{p.excerpt}</p>
                <button className="mt-4 text-sm text-cyan-300 hover:text-cyan-200">Read more →</button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
