export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950 text-white/70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
