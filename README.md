# ksavi - كساوي

منصة كرة القدم العربية الأولى - مباريات مباشرة، نتائج، ترتيب، توقعات، وإحصائيات شاملة.

## 🚀 المميزات

- **مباريات مباشرة** مع بث متعدد الجودات (HLS)
- **ترتيب الدوريات** تفاعلي مع إحصائيات الفرق
- **الهدافين** مع صور اللاعبين والإحصائيات التفصيلية
- **توقعات المباريات** مع تصويت الجماهير الحي
- **أخبار وتحليلات** كرة القدم
- **لوحة تحكم إدارية** كاملة
- **PWA** جاهز للتثبيت
- **Dark Mode** افتراضي مع دعم Light Mode
- **RTL** دعم كامل للغة العربية
- **SEO محسن** وجاهز لـ Google AdSense

## 🛠 التقنيات

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Animation**: Framer Motion
- **Database**: PostgreSQL + Prisma ORM
- **Auth & Realtime**: Supabase
- **Video**: React Player + HLS.js
- **State**: TanStack Query + Zustand
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Deployment**: Vercel / Cloudflare Pages

## 📦 التثبيت

```bash
# استنساخ المشروع
git clone https://github.com/yourusername/ksavi.git
cd ksavi

# تثبيت التبعيات
pnpm install

# إعداد متغيرات البيئة
cp .env.example .env
# قم بتعديل .env مع قيمك

# إعداد قاعدة البيانات
pnpm db:generate
pnpm db:push
pnpm db:seed

# تشغيل التطوير
pnpm dev
```

## 🔧 متغيرات البيئة

| المتغير | مطلوب | الوصف |
|----------|-------|---------|
| `DATABASE_URL` | نعم | رابط PostgreSQL (Supabase) |
| `DIRECT_URL` | نعم | رابط مباشر لـ Prisma Migrate |
| `NEXT_PUBLIC_SUPABASE_URL` | نعم | رابط مشروع Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | نعم | مفتاح Supabase العام |
| `SUPABASE_SERVICE_ROLE_KEY` | نعم | مفتاح الخدمة للعمليات الإدارية |
| `NEXT_PUBLIC_APP_URL` | نعم | رابط الموقع |
| `API_FOOTBALL_KEY` | لا | مفتاح API-Football للبيانات الحقيقية |

## 🗄️ هيكل قاعدة البيانات

النماذج الرئيسية:
- **User** - المستخدمون والصلاحيات
- **League** - الدوريات
- **Team** - الفرق
- **Player** - اللاعبين
- **Match** - المباريات
- **Stream** - روابط البث
- **Standing** - الترتيب
- **TopScorer** - الهدافين
- **Prediction** - التوقعات
- **MatchEvent** - أحداث المباراة
- **MatchStat** - إحصائيات مباشرة
- **ChatMessage** - الشات المباشر
- **Article** - الأخبار والمقالات
- **AdSlot** - مواضع الإعلانات
- **SiteSetting** - إعدادات الموقع

## 📁 هيكل المشروع

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/          # المسارات العامة
│   ├── (auth)/            # مسارات المصادقة
│   ├── (admin)/           # لوحة التحكم
│   └── api/               # API Routes
├── components/
│   ├── ui/                # Shadcn/UI Components
│   ├── layout/            # Header, Footer, etc.
│   ├── home/              # مكونات الصفحة الرئيسية
│   ├── matches/           # مكونات المباريات
│   ├── live/              # مكونات البث المباشر
│   ├── standings/         # مكونات الترتيب
│   ├── top-scorers/       # مكونات الهدافين
│   ├── predictions/       # مكونات التوقعات
│   ├── streaming/         # مكونات البث
│   ├── news/              # مكونات الأخبار
│   ├── admin/             # مكونات الأدمن
│   ├── shared/            # مكونات مشتركة
│   └── providers/         # Context Providers
├── lib/
│   ├── supabase/          # Supabase Client/Server
│   ├── prisma.ts          # Prisma Client
│   ├── utils.ts           # دوال مساعدة
│   ├── validators.ts      # Zod Schemas
│   ├── constants.ts       # ثوابت
│   ├── date.ts            # تنسيق التواريخ
│   ├── seo.ts             # SEO Helpers
│   └── ads.ts             # إدارة الإعلانات
├── hooks/                 # Custom Hooks
├── store/                 # Zustand Stores
├── types/                 # TypeScript Types
└── styles/                # CSS Styles
```

## 🎨 نظام الألوان

```css
:root {
  --primary: #00D4FF;      /* أزرق سماوي كهربائي */
  --secondary: #FF2D55;    /* أحمر وردي ناري */
  --accent: #7CFF4E;       /* أخضر نيون */
  --background: #0B0F1A;   /* خلفية داكنة */
  --card: #111827;         /* بطاقات */
  --border: #1E293B;       /* حدود */
}
```

## 📱 PWA

الموقع يدعم التثبيت كتطبيق:
- `pnpm build` ينشئ manifest.json و Service Worker
- يعمل بدون اتصال للصفحات المحفوظة
- إشعارات Push (اختياري)

## 🧪 الاختبارات

```bash
# اختبارات الوحدة
pnpm test:run

# اختبارات E2E
pnpm e2e

# فحص الأنواع
pnpm typecheck

# فحص التنسيق
pnpm format:check
```

## 📊 لوحة التحكم الإدارية

الوصول: `/admin` (يتطلب دور ADMIN)

المميزات:
- إحصائيات شاملة (زوار، مباريات، مستخدمين)
- إدارة المباريات والنتائج المباشرة
- إدارة روابط البث (سيرفرات متعددة)
- إدارة الدوريات والفرق والترتيب
- إدارة الهدافين
- إدارة الأخبار والمقالات (محرر غني)
- إدارة الإعلانات (AdSense + مخصص)
- إدارة المستخدمين والتعليقات
- إعدادات الموقع العامة
- تحليلات مفصلة

## 🌐 النشر

### Vercel (موصى به)
1. اربط المستودع مع Vercel
2. أضف متغيرات البيئة
3. النشر التلقائي عند كل Push

### Cloudflare Pages
```bash
# بناء للـ Cloudflare
pnpm build
# ارفع مجلد .vercel/output/static
```

## 📝 الترخيص

MIT License - راجع ملف LICENSE للتفاصيل.

## 🤝 المساهمة

مرحب بالمساهمات! يرجى قراءة CONTRIBUTING.md أولاً.

## 📞 التواصل

- الموقع: [ksavi.com](https://ksavi.com)
- تليجرام: [@ksavi_official](https://t.me/ksavi_official)
- البريد: hello@ksavi.com

---

**تم تطويره بـ ❤️ للمجتمع العربي لكرة القدم**