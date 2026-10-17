

const MEALS = [
    { name: 'Завтрак', time: '08:00–09:00' },
    { name: 'Обед', time: '13:00–14:00' },
    { name: 'Ужин', time: '18:00–19:00' },
]

const DISHES = [
    { img: 'food-porridge', title: 'Салаты и холодные закуски' },
    { img: 'food-bakery', title: 'Свежие фрукты' },
    { img: 'food-fruits', title: 'Овощные салаты' },
    { img: 'food-salads', title: 'Десерты и сладости' },
    { img: 'food-soups', title: 'Фрукты и десерты' },
    { img: 'food-meat', title: 'Уютная атмосфера ресторана' },

]

function Restaurant() {
    return (
        <section id="restaurant" className="bg-mist py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="max-w-2xl mb-12">
                    <p className="eyebrow mb-4">Ресторан и питание</p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight text-ink">
                        Вкусная кухня с видом на горы
                    </h2>
                    <p className="mt-5 text-ink/65 leading-relaxed">
                        В SEVARSOY resort работают два ресторана, расположенные на первом и втором этажах.
                        Из ресторанов открывается красивый вид на горы, а просторные залы подходят как для
                        ежедневного питания гостей, так и для семейного отдыха.
                    </p>
                </div>

                {/* Залы */}


                {/* Питание */}
                <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div>
                        <h3 className="font-display text-2xl sm:text-3xl text-ink">Питание</h3>
                        <p className="mt-4 text-ink/65 leading-relaxed">
                            Питание организовано по системе «Шведский стол» с разнообразным меню, которое
                            меняется каждый день. Также предусмотрено диетическое питание.
                        </p>
                        <p className="mt-4 text-ink/65 leading-relaxed">
                            В меню представлены блюда домашней и национальной кухни, свежие овощи и фрукты,
                            салаты, супы, горячие блюда, выпечка, десерты, напитки и кисломолочные продукты.
                        </p>
                    </div>

                    <ul className="border-t border-ink/10">
                        {MEALS.map((m) => (
                            <li
                                key={m.name}
                                className="flex items-baseline justify-between py-5 border-b border-ink/10"
                            >
                                <span className="font-display text-xl text-ink">{m.name}</span>
                                <span className="font-display text-2xl text-gold">{m.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Блюда */}
                <div className="mt-16">
                    <p className="eyebrow mb-6">Примеры блюд</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {DISHES.map((dish) => (
                            <div key={dish.title} className="relative overflow-hidden group h-48 sm:h-60">
                                <img
                                    src={`/img/${dish.img}.jpg`}
                                    alt={dish.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/0 to-transparent" />
                                <p className="absolute bottom-0 left-0 p-4 font-display text-base sm:text-lg text-mist">
                                    {dish.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Restaurant