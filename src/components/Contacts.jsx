function Contacts() {
  return (
    <section id="contacts" className="bg-ink py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="eyebrow mb-4">Контакты</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-tight text-mist mb-14">
          Мы ждём вас в Чимгане
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 text-left max-w-2xl mx-auto">
          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-mist/45 mb-2">Адрес</p>
            <p className="text-mist/80 leading-relaxed">
              Ташкентская область, Бостанлыкский район,
              <br />
              посёлок Чимган
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-mist/45 mb-2">Телефоны</p>
            <p className="space-x-4">
              <a href="tel:+998950011144" className="text-mist/80 hover:text-gold transition-colors">
                +998 95 001 11 44
              </a>
              <a href="tel:+998950011188" className="text-mist/80 hover:text-gold transition-colors">
                +998 95 001 11 88
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-mist/45 mb-2">Заезд</p>
            <p className="text-mist/80">12:00 · выезд 11:00 · 3-разовое питание</p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-mist/45 mb-2">Соцсети</p>
            <p className="space-x-4">
              <a
                href="https://www.instagram.com/sevarsoyresort/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/80 hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://t.me/sevarsoyresort"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/80 hover:text-gold transition-colors"
              >
                Telegram
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
