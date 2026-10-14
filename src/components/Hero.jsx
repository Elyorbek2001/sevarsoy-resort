const STATS = [
  { value: '1600 м', label: 'Высота над морем' },
  { value: '3×', label: 'Питание в день' },
  { value: 'Крытый', label: 'бассейн · SPA · сауны · соляная пещера' },
  { value: 'Круглый год', label: 'Открыты в любой сезон' },
]

function Hero() {
  return (
    <section id="top" className="relative bg-ink overflow-hidden">
      {/* Xira orqa fon */}
      <img
        src="/s.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-25 scale-110"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-28 pb-14 lg:pt-32 lg:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Matn */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-6">Чимган · Тянь-Шань · 1600 м над уровнем моря</p>

          <h1 className="font-display text-mist leading-[1.05] text-[2.4rem] sm:text-6xl lg:text-6xl xl:text-7xl">
            Горный санаторий
            <br />
            <span className="italic text-gold-light">премиум-класса</span>
          </h1>

          <p className="mt-6 max-w-xl text-mist/85 text-base sm:text-lg leading-relaxed">
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
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-mist/20 pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl text-mist">{stat.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-mist/70 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rasm: to'liq ko'rinadi, kesilmaydi */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src="/s.jpg"
            alt="SEVARSOY resort — вид на горный комплекс в Чимгане"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto max-h-[75vh] object-contain rounded-sm shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero