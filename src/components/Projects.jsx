import { useState } from 'react'
import Reveal from './Reveal'

const SAMPLE_PROJECTS = [
  {
    title: 'RAG Chat Assistant',
    description: 'Domain‑aware LLM assistant with hybrid search and function calling.',
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Vision Inference Service',
    description: 'Real‑time object detection with TensorRT and WebRTC overlay.',
    tech: ['PyTorch', 'TensorRT', 'WebRTC'],
    github: '#',
    demo: '#'
  },
  {
    title: 'ML Pipeline Orchestrator',
    description: 'End‑to‑end MLOps with feature store, model registry, and CI/CD.',
    tech: ['Kubeflow', 'MLflow', 'Feast'],
    github: '#',
    demo: '#'
  }
]

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative group">
      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-white/70">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{t}</span>
              ))}
            </div>
          </div>
          <button onClick={() => setOpen(true)} className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm border border-white/15 hover:bg-white/15">Open</button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center p-6">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-lg p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-white/80">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a href={project.github} className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/15 hover:bg-white/15">GitHub</a>
              <a href={project.demo} className="px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500">Live Demo</a>
              <button onClick={() => setOpen(false)} className="ml-auto px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/15">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <p className="mt-3 text-white/80 max-w-2xl">Selected AI/ML work spanning research prototypes to production systems.</p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PROJECTS.map((p) => (
            <Reveal key={p.title}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
