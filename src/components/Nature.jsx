function Nature() {
  return (
    <section id="nature" className="relative bg-mist py-14 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 sm:mb-14">
          <div>
            <p className="eyebrow mb-4">Не только лечение</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-ink">
              Горы, воздух
              <br />
              <span className="italic text-moss">и приключения</span>
            </h2>
          </div>
          <p className="text-ink/70 leading-relaxed max-w-md lg:ml-auto">
            Прогулки по горным тропам, полёт на воздушном шаре, зимний Чимган и захватывающие
            виды Тянь-Шаня. В SEVARSOY отдых наполнен не только тишиной, но и яркими эмоциями.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <img
            src="/img/nature-1.jpg"
            alt="Горы и природа вокруг SEVARSOY"
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src="/img/nature-2.jpg"
            alt="Чимган — горный пейзаж"
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src="/img/nature-3.jpg"
            alt="Природа вокруг SEVARSOY"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Nature