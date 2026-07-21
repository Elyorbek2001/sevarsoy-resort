import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'Санаторий' },
  { href: '#care', label: 'Лечение' },
  { href: '#spa', label: 'Инфраструктура' },
  { href: '#rooms', label: 'Номера' },
  { href: '#nature', label: 'Природа' },
  { href: '#contacts', label: 'Контакты' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="font-display text-lg sm:text-xl tracking-wide text-mist">
          SEVARSOY <span className="text-gold">resort</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+998950011144" className="text-sm text-mist/90 hover:text-gold transition-colors">
            +998 95 001 11 44
          </a>
          <a
            href="#book"
            className="inline-flex items-center px-5 py-2.5 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-ink transition-colors"
          >
            Забронировать
          </a>
        </div>

        <button
          className="lg:hidden text-mist p-2"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {menuOpen ? (
              <path d="M6 6L20 20M20 6L6 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 8H22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M4 13H22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M4 18H22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-ink/98 backdrop-blur-sm border-t border-mist/10">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-mist/85 hover:text-gold transition-colors py-3 border-b border-mist/10 text-[15px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex justify-center items-center px-5 py-3 border border-gold text-gold hover:bg-gold hover:text-ink transition-colors"
            >
              Забронировать
            </a>
            <a href="tel:+998950011144" className="mt-3 text-center text-sm text-mist/70">
              +998 95 001 11 44
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
