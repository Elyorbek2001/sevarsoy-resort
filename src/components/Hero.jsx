const STATS = [
  { value: '1600 м', label: 'Высота над морем' },
  { value: '3×', label: 'Питание в день' },
  { value: 'Крытый', label: 'бассейн · SPA · сауны · соляная пещера' },
  { value: 'Круглый год', label: 'Открыты в любой сезон' },
]

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/img/hero.jpg"
          alt="SEVARSOY resort — вид на горный комплекс в Чимгане"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      </div>

      {/* Signature: topographic contour line, echoing the 1600m altitude profile of Chimgan */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-64 contour-divider opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-32 pb-16 sm:pb-20">
        <p className="eyebrow mb-6">Чимган · Тянь-Шань · 1600 м над уровнем моря</p>

        <h1 className="font-display text-mist leading-[1.05] text-[2.4rem] sm:text-6xl lg:text-7xl max-w-3xl">
          Горный санаторий
          <br />
          <span className="italic text-gold-light">премиум-класса</span>
        </h1>

        <p className="mt-6 max-w-xl text-mist/75 text-base sm:text-lg leading-relaxed">
          Лечение, SPA и чистейший воздух Тянь-Шаня — там, где организм восстанавливается сам.
          Отдых, который лечит.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#book"
            className="inline-flex items-center px-7 py-3.5 bg-gold text-ink text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"
          >
            Забронировать отдых
          </a>
          <a
            href="#care"
            className="inline-flex items-center px-7 py-3.5 border border-mist/40 text-mist text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
          >
            Направления лечения
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-t border-mist/15 pt-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl sm:text-3xl text-mist">{stat.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-mist/55 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
