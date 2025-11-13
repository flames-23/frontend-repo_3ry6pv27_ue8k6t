import { useEffect, useRef } from 'react'
import Reveal from './Reveal'

function Sphere({ label }) {
  const ref = useRef(null)
  useEffect(() => {
    let t = 0
    const el = ref.current
    let raf
    const tick = () => {
      t += 0.008
      const x = Math.cos(t) * 8
      const y = Math.sin(t * 1.2) * 6
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${t*30}deg)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <div ref={ref} className="relative h-28 w-28 rounded-full grid place-items-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 backdrop-blur-lg shadow-[0_0_60px_rgba(56,189,248,.25)] hover:shadow-[0_0_90px_rgba(168,85,247,.25)] transition-shadow">
      <span className="text-xs text-white/90 text-center px-3">{label}</span>
    </div>
  )
}

export default function Skills() {
  const skills = [
    'Machine Learning', 'Deep Learning', 'NLP', 'LLM Development', 'MLOps', 'Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js', 'REST APIs'
  ]
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="mt-3 text-white/80 max-w-2xl">A snapshot of the stack I use to build intelligent, production‑grade systems.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((s) => (
            <Reveal key={s}>
              <Sphere label={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
