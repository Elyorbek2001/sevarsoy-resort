const DIRECTIONS = [
  {
    n: '01',
    title: 'Органы дыхания и ЛОР',
    text: 'Климатотерапия, ингаляции, галокамера — сила горного воздуха',
  },
  {
    n: '02',
    title: 'Нервная система',
    text: 'Снятие стресса, восстановление сна, релакс-программы',
  },
  {
    n: '03',
    title: 'Реабилитация',
    text: 'Восстановление после болезней и нагрузок, ЛФК',
  },
  {
    n: '04',
    title: 'Физиотерапия',
    text: 'Современные аппаратные процедуры под контролем специалистов',
  },
  {
    n: '05',
    title: 'Галотерапия',
    text: 'Соляная пещера с лечебным микроклиматом',
  },
  {
    n: '06',
    title: 'SPA & массаж',
    text: 'Оздоровительный и расслабляющий уход, кедровая бочка',
  },
]

function Care() {
  return (
    <section id="care" className="bg-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Направления</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-mist">
            Медицина и восстановление
          </h2>
          <p className="mt-5 text-mist/60 leading-relaxed">
            Программы подбираются индивидуально. Ниже — ключевые направления, с которыми работает
            санаторий.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist/10">
          {DIRECTIONS.map((item) => (
            <a
              key={item.n}
              href="#book"
              className="group bg-ink p-8 hover:bg-ink-light transition-colors flex flex-col justify-between min-h-[220px]"
            >
              <span className="font-mono text-sm text-gold/70">{item.n}</span>
              <div>
                <h3 className="font-display text-xl text-mist mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-mist/55 leading-relaxed">{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Care
