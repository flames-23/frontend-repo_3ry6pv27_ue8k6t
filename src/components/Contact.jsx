import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Sent! I will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
          <p className="mt-3 text-white/80">Have a project in mind or want to collaborate? Drop a message.</p>
          <div className="mt-8 relative h-48 rounded-2xl border border-white/10 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10">
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-24 w-24 rounded-lg border border-cyan-400/50 animate-bounce" />
              <div className="absolute -bottom-6 right-6 h-16 w-16 rounded-full border border-purple-400/50 animate-pulse" />
            </div>
          </div>
          <div className="mt-4 text-sm text-white/60">A playful hologram interface watching over the inbox.</div>
        </div>
        <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="grid gap-4">
            <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Your name" className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400/50" required />
            <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" type="email" className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400/50" required />
            <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Message" rows={5} className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-cyan-400/50" required />
          </div>
          <button className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[.99] transition">
            <Send size={18} /> Send Message
          </button>
          {status && <p className="mt-3 text-sm text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}
