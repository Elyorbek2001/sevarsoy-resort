const ROOMS = [
  {
    img: 'room-standard',
    title: 'Стандарт',
    subtitle: 'Уютный номер с видом на горы',
    price: '2 300 000',
    features: [
      '3-разовое питание включено',
      'Телевизор, санузел, Wi-Fi',
      'Доступ к бассейну и SPA-зоне',
    ],
  },
  {
    img: 'room-deluxe',
    title: 'Делюкс',
    subtitle: 'Просторный номер повышенной комфортности',
    price: '3 000 000',
    features: [
      '3-разовое питание включено',
      'Увеличенная площадь, зона отдыха',
      'Премиальная отделка, доступ к SPA',
    ],
  },
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
            Стоимость указана за сутки, 3-разовое питание включено. Заезд 12:00 · выезд 11:00.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {ROOMS.map((room) => (
            <div key={room.title} className="bg-ink-light border border-mist/10">
              <img
                src={`/img/${room.img}.jpg`}
                alt={`Номер ${room.title} SEVARSOY`}
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-7 sm:p-8">
                <h3 className="font-display text-2xl text-mist">{room.title}</h3>
                <p className="mt-1 text-sm text-mist/55">{room.subtitle}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-xs text-mist/45 font-mono">от</span>
                  <span className="font-display text-3xl text-gold">{room.price}</span>
                  <span className="text-sm text-mist/45">сум / сутки</span>
                </div>

                <ul className="mt-6 space-y-2">
                  {room.features.map((f) => (
                    <li key={f} className="text-sm text-mist/65 flex gap-2">
                      <span className="text-gold">·</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className="mt-8 inline-flex items-center px-6 py-3 border border-gold text-gold text-sm tracking-wide hover:bg-gold hover:text-ink transition-colors"
                >
                  Забронировать
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-mist/45">
          Семейные номера и люксы — уточняйте наличие и стоимость у администратора.
        </p>
      </div>
    </section>
  )
}

export default Rooms
