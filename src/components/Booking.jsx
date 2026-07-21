import { useState } from 'react'

function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Xatolik')
      }

      setStatus('sent')

      setForm({
        name: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section>
      <div>
        <h2>Бронирование</h2>

        <h3>Забронируйте отдых в горах</h3>

        <p>
          Оставьте заявку — администратор перезвонит, подберёт номер и программу
          оздоровления.
          <br />
          Или позвоните напрямую:
        </p>

        <p>+998 95 001 11 44</p>

        <p>+998 95 001 11 88</p>

        <form
          onSubmit={handleSubmit}
          className="bg-ink p-6 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wide text-mist/50 mb-2"
              >
                Ваше имя
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-mist/25 text-mist py-3 focus:border-gold outline-none transition-colors"
                placeholder="Азиз Каримов"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-mono uppercase tracking-wide text-mist/50 mb-2"
              >
                Телефон
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-mist/25 text-mist py-3 focus:border-gold outline-none transition-colors"
                placeholder="+998 90 123 45 67"
                required
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-wide text-mist/50 mb-2"
            >
              Даты / пожелания
            </label>

            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-mist/25 text-mist py-3 focus:border-gold outline-none transition-colors resize-none"
              placeholder="Например: 3 ночи, 2 взрослых, программа реабилитации"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-8 w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-gold text-ink text-sm font-medium tracking-wide hover:bg-gold-light transition-colors disabled:opacity-60"
          >
            {status === 'sending'
              ? 'Отправка...'
              : 'Отправить заявку'}
          </button>

          {status === 'sent' && (
            <p className="mt-4 text-sm text-moss-light">
              Спасибо! Мы свяжемся с вами в ближайшее время.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-400">
              Пожалуйста, заполните имя и телефон.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Booking