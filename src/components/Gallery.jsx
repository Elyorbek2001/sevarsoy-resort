const IMAGES = [
  { img: 'gallery-1', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-2', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-3', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-4', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-5', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-6', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-7', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-8', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-9', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-10', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-11', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-12', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-13', alt: 'Атмосфера SEVARSOY' },
  { img: 'gallery-14', alt: 'Атмосфера SEVARSOY' },
]

function Gallery() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Галерея</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-mist">
            Атмосфера SEVARSOY
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {IMAGES.map((item, i) => (
            <div key={`${item.img}-${i}`} className="overflow-hidden group aspect-square">
              <img
                src={`/img/${item.img}.jpg`}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
