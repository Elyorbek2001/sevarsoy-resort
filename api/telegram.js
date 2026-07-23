export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
        });
    }

    try {
        const { name, phone, date, message } = req.body;

        if (!name || !phone) {
            return res.status(400).json({
                message: "Ism va telefon majburiy",
            });
        }

        const BOT_TOKEN = process.env.BOT_TOKEN;
        const CHAT_ID = process.env.CHAT_ID;

        const text =
            `🔔 Новая заявка на бронирование\n` +
            `👤 Имя: ${name}\n` +
            `📞 Телефон: ${phone}\n` +
            `📅 Дата посещения: ${date || "не указана"}\n` +
            `📝 Xabar: ${message || "—"}`;

        const response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Telegramga yuborishda xatolik");
        }

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}