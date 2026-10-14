
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: null,
    message: '',
  })

  const [status, setStatus] = useState('idle')
  // idle | sending | sent | error | empty

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
      setStatus('empty')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          date: form.date
            ? new Date(form.date).toLocaleDateString('ru-RU')
            : '',
          message: form.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Xatolik yuz berdi')
      }

      setStatus('sent')

      setForm({
        name: '',
        phone: '',
        date: null,
        message: '',
      })
    } catch (error) {
      console.error('Yuborish xatosi:', error)
      setStatus('error')
    }
  }

  return (
    <section id="book" className="bg-mist">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-20">
        <p className="eyebrow mb-3">Бронирование</p>

        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-4">
          Забронируйте отдых в горах
        </h2>

        <p className="text-ink/70 leading-relaxed mb-6">
          Оставьте заявку — администратор перезвонит, подберёт номер и программу
          оздоровления.
          <br />
          Или позвоните напрямую:
        </p>

        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 mb-10">
          <p className="text-ink font-medium">+998 95 212 00 20</p>
          <p className="text-ink font-medium">+998 95 212 02 20</p>
        </div>

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
              htmlFor="date"
              className="block text-xs font-mono uppercase tracking-wide text-mist/50 mb-2"
            >
              Дата посещения
            </label>

            <DatePicker
              selected={form.date}
              onChange={(date) =>
                setForm((prev) => ({
                  ...prev,
                  date: date,
                }))
              }
              minDate={new Date()}
              dateFormat="dd.MM.yyyy"
              placeholderText="Выберите дату посещения"
              className="w-full bg-transparent border-b border-mist/25 text-mist py-3 focus:border-gold outline-none transition-colors"
            />
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

          {status === 'empty' && (
            <p className="mt-4 text-sm text-red-400">
              Пожалуйста, заполните имя и телефон.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-400">
              Произошла ошибка. Попробуйте еще раз.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Booking

