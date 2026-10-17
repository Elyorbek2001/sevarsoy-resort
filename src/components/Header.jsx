import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'Санаторий' },
  { href: '#care', label: 'Лечение' },
  { href: '#spa', label: 'Инфраструктура' },
  { href: '#rooms', label: 'Номера' },
  { href: '#nature', label: 'Природа' },
  { href: '#restaurant', label: 'Ресторан и питание' },
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled || menuOpen ? 'bg-ink/95 backdrop-blur-sm shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto xl:mx-24 2xl:mx-56 w-full px-5 sm:px-8 flex items-center justify-between gap-4 xl:gap-8 h-16 sm:h-20 xl:h-24">
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl xl:text-4xl tracking-wide text-mist whitespace-nowrap shrink-0"
        >
          SEVARSOY <span className="text-gold">resort</span>
        </a>

        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg 2xl:text-xl text-mist/80 hover:text-gold transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-5 shrink-0">
          <a href="tel:+998952120220" className="text-xl text-mist/90 hover:text-gold transition-colors whitespace-nowrap">
            +998 95 212 02 20
          </a>
          <a
            href="#book"
            className="inline-flex items-center px-7 py-3.5 border border-gold text-gold text-xl tracking-wide hover:bg-gold hover:text-ink transition-colors whitespace-nowrap"
          >
            Забронировать
          </a>
        </div>

        <button
          className="xl:hidden text-mist p-2"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
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
        <div className="xl:hidden bg-ink/98 backdrop-blur-sm border-t border-mist/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col px-5 sm:px-8 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-mist/85 hover:text-gold transition-colors py-3 border-b border-mist/10 text-base sm:text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex justify-center items-center px-5 py-3 border border-gold text-gold text-base sm:text-lg hover:bg-gold hover:text-ink transition-colors"
            >
              Забронировать
            </a>
            <a href="tel:+998952120220" className="mt-3 mb-2 text-center text-base text-mist/80">
              +998 95 212 02 20
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header