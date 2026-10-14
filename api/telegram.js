
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed',
        })
    }

    try {
        const {
            name,
            phone,
            date,
            message,
        } = req.body

        if (!name || !phone) {
            return res.status(400).json({
                message: 'Ism va telefon majburiy',
            })
        }

        const BOT_TOKEN = process.env.BOT_TOKEN
        const CHAT_ID = process.env.CHAT_ID

        if (!BOT_TOKEN || !CHAT_ID) {
            return res.status(500).json({
                message: 'BOT_TOKEN yoki CHAT_ID topilmadi',
            })
        }

        const text =
            `🔔 <b>Yangi buyurtma!</b>\n\n` +
            `👤 <b>Ism:</b> ${name}\n` +
            `📞 <b>Tel:</b> ${phone}\n` +
            `📅 <b>Sana:</b> ${date || 'Ko‘rsatilmagan'}\n` +
            `💬 <b>Xabar:</b> ${message || '—'}`

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text,
                    parse_mode: 'HTML',
                }),
            }
        )

        const data = await telegramResponse.json()

        if (!telegramResponse.ok || !data.ok) {
            console.error('Telegram API xatosi:', data)

            return res.status(500).json({
                message: data.description || 'Telegramga yuborishda xatolik',
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Xabar Telegramga yuborildi',
        })
    } catch (error) {
        console.error('Server xatosi:', error)

        return res.status(500).json({
            message: 'Server xatosi',
        })
    }
}
