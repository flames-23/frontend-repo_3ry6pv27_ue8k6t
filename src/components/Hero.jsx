import Spline from '@splinetool/react-spline'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col items-start justify-center">
        <Reveal className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl animate-glow">
          <p className="text-cyan-400 text-xs tracking-widest uppercase mb-2">AI/ML Engineer</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Your Name</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            Building intelligent systems, scalable ML pipelines, and real-time AI experiences. Focused on LLMs, computer vision, and production-grade MLOps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume.pdf" className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[.98] transition-transform">Download Resume</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-colors">Contact Me</a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 text-xs tracking-widest">
        SCROLL
      </div>
    </section>
  )
}
