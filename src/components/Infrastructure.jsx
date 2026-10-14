const ITEMS = [
  { img: 'spa-pool', tag: 'Wellness', title: 'Крытый бассейн', span: 'lg:col-span-2 lg:row-span-2' },
  { img: 'spa-sauna', tag: '', title: 'Хаммам & сауны', span: '' },
  { img: 'spa-salt-cave', tag: '', title: 'Соляная пещера', span: '' },
  { img: 'spa-gym', tag: '', title: 'Тренажерный зал', span: '' },
  { img: 'spa-cedar-barrel', tag: '', title: 'Кедровая бочка', span: '' },
]

function Infrastructure() {
  return (
    <section id="spa" className="bg-mist py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Инфраструктура</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-ink">
            Всё для отдыха и здоровья
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 lg:h-[560px]">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className={`relative overflow-hidden group ${item.span} min-h-[220px] lg:min-h-0`}
            >
              <img
                src={`/img/${item.img}.jpg`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                {item.tag && (
                  <p className="text-xs font-mono uppercase tracking-wide text-gold mb-1">
                    {item.tag}
                  </p>
                )}
                <p className="font-display text-lg sm:text-xl text-mist">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Infrastructure
