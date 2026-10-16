const DIRECTIONS = [
  {
    n: '01',
    img: 'care-respiratory',
    title: 'Дыхательные пути иневрологические системы',
    text: 'Климатотерапия, ингаляции и галотерапия для здоровья дыхательных путей',
  },
  {
    n: '02',
    img: 'care-nervous',
    title: 'Нервная система',
    text: 'Снятие стресса, восстановление сна, релакс-программы',
  },
  {
    n: '03',
    img: 'care-rehab',
    title: 'Реабилитация',
    text: 'Восстановление после болезней и нагрузок, ЛФК',
  },
  {
    n: '04',
    img: 'care-physio',
    title: 'Физиотерапия',
    text: 'Современные аппаратные процедуры под контролем специалистов',
  },
  {
    n: '05',
    img: 'care-halotherapy',
    title: 'Галотерапия',
    text: 'Соляная пещера с лечебным микроклиматом',
  },
  {
    n: '06',
    img: 'care-spa',
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
            Дыхательные пути и
            неврологические системы
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
              className="group bg-ink hover:bg-ink-light transition-colors flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={`/img/${item.img}.jpg`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-5 font-mono text-sm text-gold">{item.n}</span>
              </div>
              <div className="p-8 flex-1">
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