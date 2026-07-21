# SEVARSOY resort — sayt

React + Vite + Tailwind CSS asosida tayyorlangan sayt.

## Ishga tushirish

```bash
npm install
npm run dev
```

Brauzerda `http://localhost:5173` manzilini oching.

## Production build

```bash
npm run build
```

Natija `dist/` papkasida bo'ladi — uni istalgan hosting (Cloudflare Pages, Vercel, Netlify va h.k.) ga yuklashingiz mumkin.

## Telegram botga ulash

Bron qilish formasi `src/components/Booking.jsx` faylida joylashgan.
`handleSubmit` funksiyasi ichida katta izoh (`/* ... */`) bilan
belgilangan blok bor — o'sha yerda:

1. `YOUR_BOT_TOKEN` o'rniga o'z bot tokeningizni,
2. `YOUR_CHAT_ID` o'rniga xabar boradigan chat/guruh ID sini qo'ying.

**Muhim:** Bot tokenni to'g'ridan-to'g'ri frontend kodida saqlash xavfsiz emas
(har kim ko'ra oladi). Shuning uchun tavsiya: so'rovni birinchi o'z serveringiz
yoki serverless funksiyangizga (masalan Cloudflare Pages Function) yuboring,
u esa Telegram API ga yuboradi.

Izohni ochib, kodni faollashtirgach, pastdagi vaqtinchalik `setTimeout` bloki
(soxta "muvaffaqiyatli yuborildi" effekti beruvchi) ni olib tashlang.

## Papka tuzilishi

```
src/
  components/
    Header.jsx        — navigatsiya
    Hero.jsx           — bosh ekran
    About.jsx          — kurort haqida
    Care.jsx           — davolash yo'nalishlari
    Infrastructure.jsx — bassein, sauna, tuz g'ori va h.k.
    Rooms.jsx           — xonalar va narxlar
    Nature.jsx          — tabiat va sarguzashtlar
    Gallery.jsx         — rasmlar galereyasi
    Booking.jsx         — bron qilish formasi (Telegram bot shu yerda)
    Contacts.jsx        — kontaktlar va xarita
    Footer.jsx
  App.jsx
  index.css
public/
  contour.svg — fon uchun tog' relyefi chizig'i (dizayn elementi)
```
