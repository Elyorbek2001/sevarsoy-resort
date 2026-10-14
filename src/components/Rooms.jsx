const ROOMS = [
  {
    img: 'room-standard',
    title: 'Стандартный номер',
    price: '2 300 000',
    period: 'за двоих',
    features: [
      'Комфортный номер со всеми необходимыми удобствами для приятного отдыха.',

      'Все необходимое для комфортного проживания',
    ],
  },
  {
    img: 'room-deluxe',
    title: 'Семейный номер',
    price: '3 450 000',
    period: 'за троих',
    features: [
      'Просторный номер для семьи',
      'Одна двуспальная кровать и одна односпальная кровать',
      'Идеальный выбор для вашего отдыха',
    ],
  },
  {
    img: 'room-lux',
    title: 'Номер «Люкс»',
    price: '4 450 000',
    period: 'за троих',
    features: [
      'Роскошный номер с повышенным комфортом и панорамным видом',
      'Повышенный комфорт',
      'Панорамный вид',
    ],
  },
]

const EXTRAS = [
  '3-х разовое питание',
  'Крытый бассейн',
  'Финская сауна',
  'Турецкий хаммам',
  'Тренажерный зал',
  'Соляная пещера',
  'Ингаляция',
  'Кедровая бочка',
  'Детская игровая зона',
  'Физиотерапия, лечение',
]

function Rooms() {
  return (
    <section id="rooms" className="bg-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Проживание</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-mist">
            Номера
          </h2>
          <p className="mt-5 text-mist/60 leading-relaxed">
            Стоимость указана за сутки. Заезд 12:00 · выезд 11:00.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ROOMS.map((room) => (
            <div key={room.title} className="bg-ink-light border border-mist/10 flex flex-col">
              <img
                src={`/img/${room.img}.jpg`}
                alt={`Номер ${room.title} SEVARSOY`}
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-mist">{room.title}</h3>

                <div className="mt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl text-gold">{room.price}</span>
                    <span className="text-sm text-mist/45">сум / сутки</span>
                  </div>
                  <p className="mt-1 text-2xl text-gold">{room.period}</p>
                </div>

                <ul className="mt-6 space-y-2 flex-1">
                  {room.features.map((f) => (
                    <li key={f} className="text-sm text-mist/65 flex gap-2">
                      <span className="text-gold">·</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className="mt-9 self-start inline-flex items-center px-6 py-3 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-ink transition-colors"
                >
                  Забронировать
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-mist/10 pt-8">
          <p className="eyebrow mb-5">В стоимость входит</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-3">
            {EXTRAS.map((e) => (
              <li key={e} className="text-sm text-mist/65 flex gap-2">
                <span className="text-gold">·</span>
                {e}
              </li>
            ))}
          </ul>
        </div>


      </div>
    </section>
  )
}

export default Rooms