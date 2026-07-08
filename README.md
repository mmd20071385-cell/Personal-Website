# محمدحسین گودرزی — پرتفولیوی شخصی

سایت شخصی/رزومه ساخته‌شده با **Next.js 14 (App Router) + React + Tailwind CSS**.

## اجرا روی سیستم خودت

```bash
npm install
npm run dev
```

بعد آدرس `http://localhost:3000` رو تو مرورگر باز کن.

برای گرفتن نسخه‌ی نهایی برای هاست:

```bash
npm run build
npm run start
```

## چیزهایی که باید خودت تکمیل کنی

1. **لینک نمونه‌کارها** — تو فایل `components/ProjectCard.jsx` و `app/portfolio/page.js`
   لینک هر پروژه فعلاً `href="#"` هست؛ وقتی نمونه‌کارهاتو آماده کردی، لینک واقعی رو
   جایگزین کن. متن و عنوان هر پروژه هم تو `lib/translations.js` (بخش `portfolio.projects`)
   قابل ویرایش‌ـه.
2. **شبکه‌های اجتماعی** — تو `app/contact/page.js` لینک گیت‌هاب فعلاً `href="#"` هست،
   با آدرس واقعی پروفایلت جایگزینش کن.
3. **متن‌ها** — همه‌ی متن‌های فارسی و انگلیسی سایت تو یک فایل جمع شدن:
   `lib/translations.js`. هر بخشی رو خواستی عوض کنی، همونجا دنبالش بگرد.

## ساختار پروژه

```
app/
  layout.js        ← لایوت اصلی، فونت، هدر و فوتر
  page.js          ← صفحه‌ی اصلی
  about/page.js    ← درباره‌ی من
  portfolio/page.js← نمونه‌کارها
  contact/page.js  ← تماس با من
components/        ← کامپوننت‌های قابل استفاده‌ی مجدد
lib/
  translations.js  ← تمام متن‌های فارسی/انگلیسی
  LanguageContext.jsx
  ThemeContext.jsx
```

## تکنولوژی‌ها

- Next.js 14 / App Router
- React 18
- Tailwind CSS (حالت تاریک با استراتژی `class`)
- فونت Vazirmatn (فارسی + انگلیسی، از طریق `next/font/google`)
- بدون هیچ دیتابیس یا بک‌اندی؛ فرم تماس با `mailto:` کار می‌کنه.
