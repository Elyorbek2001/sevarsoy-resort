const TAGS = ['Лечение & реабилитация', 'SPA & wellness', 'Горный отдых']

function About() {
  return (
    <section id="about" className="bg-mist py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="eyebrow mb-4">О курорте</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-ink">
            Иногда нужны не лекарства,
            <br />
            <span className="italic text-moss">а чистый горный воздух</span>
          </h2>

          <p className="mt-6 text-ink/70 leading-relaxed">
            SEVARSOY расположен в живописном Чимгане, в предгорьях Тянь-Шаня. Уникальный
            микроклимат, разреженный горный воздух и тишина делают своё дело — тело отдыхает, а
            нервная система приходит в баланс.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Это не просто отель. Это санаторно-курортный комплекс премиум-класса: современная
            медицина, реабилитация и SPA сочетаются здесь с настоящей природой и заботливым
            сервисом.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono uppercase tracking-wide px-3.5 py-2 border border-ink/15 text-ink/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm text-ink/45 font-mono">Бостанлыкский р-н</p>
        </div>

        <div className="relative">
          <img
            src="/img/about.jpg"
            alt="Интерьер SEVARSOY с панорамными окнами на горы"
            className="w-full h-[420px] sm:h-[520px] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden sm:block w-32 h-32 border border-gold/60" />
        </div>
      </div>
    </section>
  )
}

export default About
