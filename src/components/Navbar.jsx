import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-white font-semibold tracking-wider text-lg">
            <span className="text-cyan-400">AI/ML</span> Portfolio
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a href="mailto:you@example.com" aria-label="Email" className="text-white/80 hover:text-white"><Mail size={18} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 hover:text-white"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
            </div>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
