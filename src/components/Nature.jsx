function Nature() {
  return (
    <section id="nature" className="relative bg-mist py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div className="relative order-2 lg:order-1">
            <img
              src="/img/nature-1.jpg"
              alt="Горы и природа вокруг SEVARSOY"
              className="w-full h-[380px] sm:h-[460px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">Не только лечение</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-ink">
              Горы, воздух
              <br />
              <span className="italic text-moss">и приключения</span>
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed max-w-md">
              Прогулки по горным тропам, полёт на воздушном шаре, зимний Чимган и захватывающие
              виды Тянь-Шаня. В SEVARSOY отдых наполнен не только тишиной, но и яркими эмоциями.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <img
            src="/img/nature-2.jpg"
            alt="Чимган — горный пейзаж"
            className="w-full h-40 sm:h-56 object-cover"
          />
          <img
            src="/img/nature-3.jpg"
            alt="Природа вокруг SEVARSOY"
            className="w-full h-40 sm:h-56 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Nature
