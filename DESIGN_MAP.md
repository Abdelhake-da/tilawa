# DESIGN_MAP — منصة تلاوة

> آخر تحديث: 7 يوليو 2026
> الحالة: التخطيط الجمالي — بانتظار الموافقة

---

## [DESIGN_SYSTEM]

### الألوان (Colors)

#### Primary — Emerald (الأخضر الإسلامي)

| Name | HEX | Usage |
|------|-----|-------|
| Emerald-900 | #064E3B | خلفية الـ Sidebar، العناوين الرئيسية |
| Emerald-800 | #065F46 | Hover على الأزرار الأساسية |
| Emerald-700 | #047857 | الأزرار الأساسية (Primary)، الروابط النشطة |
| Emerald-600 | #059669 | Active states |
| Emerald-500 | #10B981 | Accents، مؤشرات التقدم، الروابط |
| Emerald-100 | #D1FAE5 | خلفيات فاتحة للبطاقات المميزة |
| Emerald-50 | #ECFDF5 | خلفيات فاتحة جداً، تدرجات |

#### Secondary — Amber (الذهبي)

| Name | HEX | Usage |
|------|-----|-------|
| Amber-500 | #F59E0B | لمسات ذهبية، الشهادات، الأيقونات المميزة |
| Amber-400 | #FBBF24 | Hover على العناصر الذهبية |
| Amber-100 | #FEF3C7 | خلفية تحذيرات فاتحة |
| Amber-50 | #FFFBEB | خلفيات فاتحة جداً |

#### Neutral — Slate

| Name | HEX | Usage |
|------|-----|-------|
| Slate-900 | #0F172A | النص الأساسي الداكن |
| Slate-800 | #1E293B | النص الأساسي |
| Slate-700 | #334155 | عناوين فرعية |
| Slate-600 | #475569 | نص ثانوي |
| Slate-500 | #64748B | نص مساعد، placeholders |
| Slate-400 | #94A3B8 | أيقونات معطلة، حدود فاتحة |
| Slate-300 | #CBD5E1 | حدود، فواصل |
| Slate-200 | #E2E8F0 | حدود بطاقات، فواصل صفوف |
| Slate-100 | #F1F5F9 | خلفية صف بديل في الجداول |
| Slate-50 | #F8FAFC | خلفية الصفحة |
| White | #FFFFFF | خلفية البطاقات، الـ Surfaces |

#### Semantic — ألوان الحالات

| Name | HEX | Usage |
|------|-----|-------|
| Green-500 | #22C55E | نجاح، مسدد، حضور |
| Green-100 | #DCFCE7 | خلفية نجاح فاتحة |
| Red-500 | #EF4444 | خطأ، غير مسدد، متأخر |
| Red-100 | #FEE2E2 | خلفية خطأ فاتحة |
| Yellow-500 | #EAB308 | معلق، تحذير |
| Yellow-100 | #FEF9C3 | خلفية تحذير فاتحة |
| Blue-500 | #3B82F6 | معلومات، روابط خارجية |
| Blue-100 | #DBEAFE | خلفية معلومات فاتحة |

### التايبوجرافي (Typography)

#### الخطوط

| الاستخدام | الخط | الأوزان | المصدر |
|-----------|------|---------|--------|
| النص العربي | Cairo | 400, 600, 700 | Google Fonts |
| الأرقام واللاتيني | Inter | 400, 500, 600 | Google Fonts |

#### مقاييس الخط

| Element | Font | Size | Weight | Line Height | Color |
|---------|------|------|--------|-------------|-------|
| Page Title | Cairo | 1.875rem (30px) | 700 | 1.3 | Slate-900 |
| Section Title | Cairo | 1.25rem (20px) | 700 | 1.4 | Slate-800 |
| Card Title | Cairo | 1.125rem (18px) | 600 | 1.4 | Slate-800 |
| Body Text | Cairo | 1rem (16px) | 400 | 1.6 | Slate-700 |
| Small Text | Cairo | 0.875rem (14px) | 400 | 1.5 | Slate-600 |
| Caption | Cairo | 0.75rem (12px) | 400 | 1.4 | Slate-500 |
| Number/Stat | Inter | 2rem (32px) | 600 | 1.2 | Emerald-700 |
| Button Text | Cairo | 0.9375rem (15px) | 600 | 1.4 | White / Slate-800 |
| Input Label | Cairo | 0.875rem (14px) | 600 | 1.4 | Slate-700 |
| Input Text | Cairo | 1rem (16px) | 400 | 1.5 | Slate-800 |

#### مقاييس الخط حسب الجهاز (Responsive Typography)

| Element | Mobile (<640px) | Tablet (640-1024px) | Desktop (>1024px) |
|---------|-----------------|---------------------|-------------------|
| Page Title | 1.5rem (24px) | 1.75rem (28px) | 1.875rem (30px) |
| Section Title | 1.125rem (18px) | 1.25rem (20px) | 1.25rem (20px) |
| Stat Number | 1.5rem (24px) | 1.75rem (28px) | 2rem (32px) |
| Body Text | 0.9375rem (15px) | 1rem (16px) | 1rem (16px) |

### المسافات (Spacing Scale)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | فجوات صغيرة بين أيقونة ونص |
| `space-2` | 8px | فجوات بين عناصر صغيرة، padding أزرار |
| `space-3` | 12px | فجوات بين حقول نموذج |
| `space-4` | 16px | padding بطاقات صغير، فجوات بين أقسام |
| `space-6` | 24px | padding بطاقات أساسي |
| `space-8` | 32px | padding الصفحة، فجوات بين الأقسام |
| `space-12` | 48px | فجوات كبيرة بين الأقسام الرئيسية |
| `space-16` | 64px | فجوات كبيرة جداً |

#### المسافات حسب الجهاز (Responsive Spacing)

| Token | Mobile | Desktop |
|-------|--------|---------|
| Page Padding | 16px | 32px |
| Card Padding | 16px | 24px |
| Section Gap | 24px | 32px |
| Element Gap | 12px | 16px |

### الظلال (Shadows)

| Name | Value | Usage |
|------|-------|-------|
| shadow-sm | 0 1px 2px rgba(0,0,0,0.05) | Badges، عناصر صغيرة |
| shadow | 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06) | البطاقات الأساسية |
| shadow-md | 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06) | البطاقات عند Hover |
| shadow-lg | 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05) | Modals، Dropdowns |
| shadow-xl | 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04) | Modals كبيرة |

### الحدود والزوايا (Borders & Radius)

| Name | Value | Usage |
|------|-------|-------|
| radius-sm | 6px | أزرار، حقول إدخال |
| radius-md | 8px | بطاقات صغيرة، badges |
| radius-lg | 12px | بطاقات رئيسية، modals |
| radius-full | 9999px | Avatars، أيقونات دائرية |
| border-default | 1px solid #E2E8F0 (Slate-200) | حدود البطاقات، فواصل |
| border-focus | 2px solid #10B981 (Emerald-500) | حدود عند Focus |

---

## [RESPONSIVE_RULES]

### نقاط التوقف (Breakpoints)

| Name | Width | Target Device |
|------|-------|---------------|
| `xs` | <640px | هاتف ذكي (عمودي) |
| `sm` | ≥640px | هاتف ذكي (أفقي) / كمبيوتر لوحي صغير |
| `md` | ≥768px | كمبيوتر لوحي (عمودي) |
| `lg` | ≥1024px | كمبيوتر لوحي (أفقي) / كمبيوتر مكتبي |
| `xl` | ≥1280px | كمبيوتر مكتبي بشاشة واسعة |

### استراتيجية التجاوب (Responsive Strategy)

| الدور | الاستراتيجية | السبب |
|------|-------------|-------|
| المدير | Desktop-first | يستخدم كمبيوتر مكتبي في المكتب |
| المعلم | Desktop-first + Tablet | يستخدم كمبيوتر لوحي أو مكتبي |
| ولي الأمر | Mobile-first | يستخدم هاتف ذكي بشكل أساسي |

### قواعد التحول بين الأجهزة (Layout Transformation Rules)

#### Sidebar

| الجهاز | السلوك |
|--------|--------|
| Desktop (≥1024px) | Sidebar ثابت على اليمين، عرض 256px، المحتوى يأخذ باقي العرض |
| Tablet (768-1023px) | Sidebar قابل للطي، يفتح بزر هامبرغر، يُ overlay على المحتوى |
| Mobile (<768px) | Sidebar مخفي افتراضياً، يفتح كـ Drawer من اليمين، يُ overlay بظلام شفاف |

#### Header

| الجهاز | السلوك |
|--------|--------|
| Desktop | Header ثابت في الأعلى، يحتوي: الشعار + بحث + إشعارات + المستخدم |
| Tablet | نفس Desktop لكن أصغر |
| Mobile | Header مختصر: زر هامبرغر + الشعار + أيقونة إشعارات فقط |

#### الجداول (DataTable)

| الجهاز | السلوك |
|--------|--------|
| Desktop | جدول كامل بكل الأعمدة، قابل للفرز، pagination في الأسفل |
| Tablet | جدول بأعمدة مختصرة (إخفاء الأعمدة الأقل أهمية) |
| Mobile | تحويل لقائمة بطاقات (Card List) — كل صف يصبح بطاقة بمعلومات أساسية |

#### النماذج (Forms)

| الجهاز | السلوك |
|--------|--------|
| Desktop | عمودين (2-column grid) للحقول القصيرة، عمود واحد للحقول الطويلة |
| Tablet | عمود واحد لكل الحقول |
| Mobile | عمود واحد لكل الحقول، أزرار بعرض كامل (w-full) |

#### البطاقات (Cards Grid)

| الجهاز | الأعمدة |
|--------|---------|
| Mobile (<640px) | 1 عمود |
| Tablet (640-1023px) | 2 أعمدة |
| Desktop (1024-1279px) | 3 أعمدة |
| Wide Desktop (≥1280px) | 4 أعمدة |

#### لوحة التحكم (Dashboard Stats)

| الجهاز | الأعمدة |
|--------|---------|
| Mobile (<640px) | 1 عمود (مكدسة عمودياً) |
| Tablet (640-1023px) | 2 أعمدة |
| Desktop (≥1024px) | 4 أعمدة |

### أولوية المحتوى الحرج (Content Priority)

| الصفحة | Mobile Priority | ما يُخفى على Mobile |
|--------|----------------|---------------------|
| Manager Dashboard | Stats (عدد الطلاب، المدفوعات) | الرسوم البيانية المعقدة |
| Teacher Student List | أسماء الطلاب + حالة الحضور | تاريخ التسجيل، العمر |
| Teacher Student Detail | الحضور اليوم + الحفظ اليوم | السجل التاريخي الكامل (يفتح بزر) |
| Guardian Dashboard | بطاقات الأطفال + آخر إشعار | السجل التفصيلي |
| Guardian Child Detail | الحضور + الحفظ + الاشتراك | المراجعة التفصيلية (يفتح بزر) |
| Payments | المبلغ + الحالة (مسدد/لا) | التاريخ، اسم المستلم |

### قواعد RTL (Right-to-Left)

| العنصر | القاعدة |
|--------|---------|
| اتجاه الصفحة | `dir="rtl"` على `<html>` |
| Sidebar | يظهر على اليمين |
| النصوص | محاذاة لليمين افتراضياً |
| الأيقونات | قبل النص (على اليمين) |
| Flexbox | `flex-row-reverse` غير مطلوب (RTL طبيعي) |
| Margins | استخدام `ms-` (margin-start) و `me-` (margin-end) بدلاً من `ml-` و `mr-` |
| Padding | استخدام `ps-` (padding-start) و `pe-` (padding-end) |
| Scrollbar | على اليسار في RTL |

### أحجام اللمس (Touch Targets)

| الجهاز | الحد الأدنى | التطبيق |
|--------|-------------|---------|
| Mobile | 44×44px | جميع الأزرار والروابط قابلة للنقر بإصبع |
| Tablet | 44×44px | نفس Mobile |
| Desktop | 32×32px | أحجام أصغر مقبولة (ماوس) |

---

## [PAGE_INVENTORY]

### صفحات المدير (Desktop-first)

| Name | Route | Purpose | Layout | Responsive Priority |
|------|-------|---------|--------|---------------------|
| Login | /login | المصادقة | AuthLayout (مركزي) | Mobile-first |
| Manager Dashboard | /manager/dashboard | إحصائيات المدرسة | ManagerLayout | Desktop-first |
| Teachers | /manager/teachers | إدارة المعلمين (CRUD) | ManagerLayout | Desktop-first |
| Students | /manager/students | إدارة الطلاب (CRUD + ربط) | ManagerLayout | Desktop-first |
| Payments | /manager/payments | كل المدفوعات + فلترة | ManagerLayout | Desktop-first |
| Transfers | /manager/transfers | طلبات النقل (موافقة/رفض) | ManagerLayout | Desktop-first |
| Certificates | /manager/certificates | موافقة على الشهادات | ManagerLayout | Desktop-first |

### صفحات المعلم (Desktop + Tablet)

| Name | Route | Purpose | Layout | Responsive Priority |
|------|-------|---------|--------|---------------------|
| Teacher Dashboard | /teacher/dashboard | نظرة عامة على الطلاب | TeacherLayout | Desktop-first |
| Student List | /teacher/students | قائمة الطلاب + بحث | TeacherLayout | Desktop-first |
| Student Detail | /teacher/students/:id | تسجيل حضور/حفظ/مراجعة/ملاحظة | TeacherLayout | Desktop-first |
| Teacher Payments | /teacher/payments | تسجيل مدفوعات | TeacherLayout | Desktop-first |

### صفحات ولي الأمر (Mobile-first)

| Name | Route | Purpose | Layout | Responsive Priority |
|------|-------|---------|--------|---------------------|
| Guardian Dashboard | /guardian/dashboard | أطفالي + إشعارات | GuardianLayout | Mobile-first |
| Child Detail | /guardian/children/:id | تفاصيل الطفل الكاملة | GuardianLayout | Mobile-first |
| Guardian Certificates | /guardian/certificates | شهادات أطفالي (PDF) | GuardianLayout | Mobile-first |

---

## [COMPONENT_LIBRARY]

### Layout Components

#### Sidebar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navItems` | array | — | عناصر القائمة [{label, icon, path}] |
| `activePath` | string | — | المسار الحالي لتحديد العنصر النشط |
| `onClose` | function | — | يُستدعى عند الإغلاق (Mobile/Tablet) |

**Responsive Behavior:**
- Desktop (≥1024px): `fixed right-0 w-64 h-screen` — ثابت دائماً
- Tablet/Mobile: `fixed right-0 w-64 h-screen transform transition-transform` — `translate-x-0` عند الفتح، `translate-x-full` عند الإغلاق
- Overlay: `fixed inset-0 bg-black/50 z-40` — خلفية شفافة عند فتح Sidebar على Mobile

#### Header

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | — | عنوان الصفحة |
| `onMenuClick` | function | — | فتح Sidebar (Mobile/Tablet) |
| `showSearch` | boolean | false | إظهار حقل البحث |

**Responsive Behavior:**
- Desktop: عرض كامل مع بحث + إشعارات + قائمة مستخدم
- Mobile: `h-14` مختصر، زر هامبرغر + عنوان + أيقونة إشعارات فقط

#### ManagerLayout / TeacherLayout / GuardianLayout

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | — | محتوى الصفحة |

**Structure:**
```
<div class="flex min-h-screen bg-slate-50">
  <Sidebar />
  <div class="flex-1 flex flex-col">
    <Header />
    <main class="flex-1 p-4 md:p-6 lg:p-8">
      {children}
    </main>
  </div>
</div>
```

### Form Components

#### Button

| Variant | Classes (Desktop) | Classes (Mobile) |
|---------|-------------------|-------------------|
| primary | `bg-emerald-700 text-white hover:bg-emerald-800 px-4 py-2` | `w-full px-4 py-3 text-base` |
| secondary | `bg-slate-100 text-slate-800 hover:bg-slate-200 px-4 py-2` | `w-full px-4 py-3` |
| danger | `bg-red-500 text-white hover:bg-red-600 px-4 py-2` | `w-full px-4 py-3` |
| ghost | `text-slate-600 hover:bg-slate-100 px-3 py-2` | `px-4 py-3` |

**Sizes:**

| Size | Desktop | Mobile |
|------|---------|--------|
| sm | `text-sm px-3 py-1.5` | `text-sm px-3 py-2` |
| md | `text-sm px-4 py-2` | `text-base px-4 py-3` |
| lg | `text-base px-6 py-3` | `text-base px-6 py-3.5` |

**States:**

| State | Style |
|-------|-------|
| Default | حسب Variant |
| Hover | لون أغمق + `shadow-md` |
| Active | لون أغمق + `scale(0.98)` |
| Focus | `ring-2 ring-emerald-500 ring-offset-2` |
| Disabled | `opacity-50 cursor-not-allowed` |
| Loading | `disabled` + Spinner بدل النص |

#### Input

| Prop | Type | Description |
|------|------|-------------|
| `label` | string | تسمية الحقل |
| `error` | string | رسالة الخطأ |
| `type` | string | text / number / date / time / email / password |
| `required` | boolean | حقل مطلوب |

**Responsive:**
- Desktop: `w-full px-3 py-2 text-sm`
- Mobile: `w-full px-4 py-3 text-base` (منع zoom على iOS — 16px минимум)

**States:**

| State | Style |
|-------|-------|
| Default | `bg-white border border-slate-200 rounded-md` |
| Focus | `border-emerald-500 ring-2 ring-emerald-500/20` |
| Error | `border-red-500 ring-2 ring-red-500/20` + نص أحمر |
| Disabled | `bg-slate-50 text-slate-400 cursor-not-allowed` |

#### Select

نفس Input لكن مع `appearance-none` + أيقونة سهم مخصصة (Lucide ChevronDown).

#### Modal

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | boolean | حالة الفتح |
| `onClose` | function | إغلاق |
| `title` | string | العنوان |
| `size` | string | sm / md / lg / full |

**Responsive:**

| Size | Desktop | Mobile |
|------|---------|--------|
| sm | `max-w-md` | `max-w-full` |
| md | `max-w-lg` | `max-w-full` |
| lg | `max-w-2xl` | `max-w-full` |
| full | `max-w-4xl` | `max-w-full` |

- Desktop: `rounded-xl shadow-xl` مركز
- Mobile: `rounded-t-xl` يفتح من الأسفل (Bottom Sheet style)، `h-[90vh] overflow-y-auto`

### Feedback Components

#### LoadingSpinner

```jsx
<LoadingSpinner size="md" />
```

| Size | Dimensions |
|------|------------|
| sm | 16×16px |
| md | 24×24px |
| lg | 40×40px |

- لون: Emerald-500
- `animate-spin`

#### EmptyState

| Prop | Type | Description |
|------|------|-------------|
| `icon` | LucideIcon | أيقونة |
| `title` | string | العنوان |
| `description` | string | الوصف |
| `action` | ReactNode | زر اختياري |

**Layout:** مركز أفقي وعمودي، padding كبير `py-16`

#### Badge

| Variant | Classes |
|---------|---------|
| success | `bg-green-100 text-green-700` |
| warning | `bg-yellow-100 text-yellow-700` |
| danger | `bg-red-100 text-red-700` |
| info | `bg-blue-100 text-blue-700` |
| neutral | `bg-slate-100 text-slate-600` |

- `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold`

### Navigation Components

#### ProtectedRoute

| Prop | Type | Description |
|------|------|-------------|
| `allowedRoles` | array | الأدوار المسموح لها |
| `children` | ReactNode | المحتوى |

- إذا لم يكن المستخدم مسجل دخول → redirect إلى `/login`
- إذا كان الدور غير مسموح → redirect إلى لوحة تحكمه

#### NotificationBell

- أيقونة جرس (Lucide Bell)
- Badge أحمر بعدد غير المقروء (إن > 0)
- Dropdown بقائمة آخر 5 إشعارات
- على Mobile: يفتح صفحة كاملة بدلاً من Dropdown

### Data Display Components

#### Card

```jsx
<Card className="p-4 md:p-6">
  {children}
</Card>
```

- `bg-white rounded-lg shadow border border-slate-200`
- Responsive padding: `p-4` على Mobile، `p-6` على Desktop

#### StatCard

| Prop | Type | Description |
|------|------|-------------|
| `icon` | LucideIcon | أيقونة |
| `label` | string | التسمية |
| `value` | string/number | القيمة |
| `color` | string | لون الأيقونة (emerald/amber/red/blue) |

**Layout:**
```
<Card>
  <div class="flex items-center gap-3 md:gap-4">
    <div class="icon-wrapper">  // دائرة ملوّنة
      <Icon />
    </div>
    <div>
      <p class="text-xs md:text-sm text-slate-500">{label}</p>
      <p class="text-xl md:text-2xl font-semibold">{value}</p>
    </div>
  </div>
</Card>
```

#### DataTable

| Prop | Type | Description |
|------|------|-------------|
| `columns` | array | تعريف الأعمدة [{key, label, render, hideOnMobile}] |
| `data` | array | البيانات |
| `loading` | boolean | حالة تحميل |
| `emptyMessage` | string | رسالة الفراغ |

**Responsive Behavior:**
- Desktop (≥1024px): جدول HTML كامل `<table>` بكل الأعمدة
- Tablet (768-1023px): جدول بأعمدة مختصرة (إخفاء `hideOnMobile: true`)
- Mobile (<768px): تحويل لقائمة بطاقات

**Desktop:**
```html
<table class="w-full">
  <thead class="bg-slate-50 text-slate-600 text-sm">
    <tr>
      <th class="text-right p-3">{label}</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-slate-200">
    <tr class="hover:bg-slate-50">
      <td class="p-3">{value}</td>
    </tr>
  </tbody>
</table>
```

**Mobile (Card List):**
```html
<div class="space-y-3">
  {data.map(item => (
    <Card class="p-4">
      <div class="space-y-2">
        {columns.map(col => (
          <div class="flex justify-between">
            <span class="text-slate-500 text-sm">{col.label}</span>
            <span class="text-slate-800 text-sm font-medium">{col.render(item)}</span>
          </div>
        ))}
      </div>
    </Card>
  ))}
</div>
```

#### StudentCard

| Prop | Type | Description |
|------|------|-------------|
| `student` | object | بيانات الطالب |
| `onClick` | function | النقر |

**Layout (Mobile-first):**
```
<Card class="p-4 cursor-pointer active:bg-slate-50">
  <div class="flex items-center gap-3">
    <Avatar />  // دائرة بأول حرف من الاسم
    <div class="flex-1">
      <p class="font-semibold text-slate-800">{student.name}</p>
      <p class="text-sm text-slate-500">{student.teacher.name}</p>
    </div>
    <Badge variant="success">حاضر</Badge>
  </div>
</Card>
```

---

## [INTERACTION_STATES]

### الأزرار (Button)

| State | Visual |
|-------|--------|
| Default | لون أساسي، ظل خفيف |
| Hover | لون أغمق + `shadow-md` + `transition-colors duration-150` |
| Active | لون أغمق + `scale(0.98)` |
| Focus | `ring-2 ring-emerald-500 ring-offset-2` |
| Disabled | `opacity-50 cursor-not-allowed` |
| Loading | `disabled` + Spinner (animate-spin) بدل النص |

### حقول الإدخال (Input)

| State | Visual |
|-------|--------|
| Default | `bg-white border-slate-200` |
| Hover | `border-slate-300` |
| Focus | `border-emerald-500 ring-2 ring-emerald-500/20` |
| Error | `border-red-500 ring-2 ring-red-500/20` + نص خطأ أحمر أسفل الحقل |
| Disabled | `bg-slate-50 text-slate-400 cursor-not-allowed` |

### البطاقات (Card)

| State | Visual |
|-------|--------|
| Default | `bg-white shadow border-slate-200` |
| Hover (interactive) | `shadow-md border-slate-300 transition-shadow duration-200` |
| Active (interactive) | `shadow-sm scale(0.99)` |
| Selected | `border-emerald-500 ring-2 ring-emerald-500/20` |

### الروابط (NavLink)

| State | Visual |
|-------|--------|
| Default | `text-slate-600 hover:text-emerald-700` |
| Active | `text-emerald-700 font-semibold bg-emerald-50` |
| Disabled | `text-slate-400 cursor-not-allowed` |

### الإشعارات (Notification)

| State | Visual |
|-------|--------|
| Unread | `bg-emerald-50 border-r-4 border-emerald-500` |
| Read | `bg-white border-slate-200` |
| Hover | `bg-slate-50` |

### الجداول (DataTable Rows)

| State | Visual |
|-------|--------|
| Default | `bg-white` |
| Hover | `bg-slate-50` |
| Selected | `bg-emerald-50` |
| Striped (alt) | `bg-slate-50/50` |

---

## [ASSETS_MAP]

### الأيقونات (Icons — Lucide React)

| الاستخدام | الأيقونة (Lucide) | الحجم |
|-----------|-------------------|-------|
| لوحة التحكم | LayoutDashboard | 20px |
| الطلاب | Users | 20px |
| المعلمون | GraduationCap | 20px |
| المدفوعات | Wallet | 20px |
| الحضور | CalendarCheck | 20px |
| الحفظ | BookOpen | 20px |
| المراجعة | RefreshCw | 20px |
| الملاحظات | MessageSquare | 20px |
| النقل | ArrowLeftRight | 20px |
| الشهادات | Award | 20px |
| الإشعارات | Bell | 20px |
| البحث | Search | 20px |
| إضافة | Plus | 20px |
| تعديل | Pencil | 16px |
| حذف | Trash2 | 16px |
| موافقة | Check | 20px |
| رفض | X | 20px |
| تحميل | Download | 20px |
| تسجيل خروج | LogOut | 20px |
| قائمة (هامبرغر) | Menu | 24px |
| إغلاق | X | 24px |
| تحميل (loading) | Loader2 (animate-spin) | 20px |
| نجاح | CheckCircle | 20px |
| خطأ | AlertCircle | 20px |
| تحذير | AlertTriangle | 20px |
| معلومات | Info | 20px |
| الساعة | Clock | 16px |
| الهاتف | Phone | 16px |
| الموقع | MapPin | 16px |
| المستخدم | User | 20px |
| ولي الأمر | Heart | 20px |
| الشهادة | ScrollText | 20px |

### الخطوط (Fonts)

| الخط | المصدر | الاستخدام |
|------|--------|-----------|
| Cairo | Google Fonts (`@import`) | كل النصوص العربية |
| Inter | Google Fonts (`@import`) | الأرقام والإحصائيات |

**تحميل في CSS:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
```

### الشعار (Logo)

| العنصر | التفاصيل |
|--------|---------|
| النوع | SVG مخصص |
| الشكل | دائرة خضراء (Emerald-700) بداخلها كتاب مفتوح + هلال |
| النص | "تلاوة" بخط Cairo 700 |
| الألوان | Emerald-700 + Amber-500 (للهلال) |
| الحجم | 40×40px (Header)، 80×80px (Login) |

### الزخارف (Patterns)

| العنصر | التفاصيل |
|--------|---------|
| خلفية Login | نمط هندسي إسلامي خفيف (SVG) بلون Emerald-50 |
| خلفية الشهادات | إطار زخرفي إسلامي (SVG) بلون Amber-500 |

---

## [PAGE_LAYOUTS_DETAIL]

### Login Page

```
┌─────────────────────────────────────────┐
│                                         │
│         [نمط زخرفي خفيف]                │
│                                         │
│         ┌───────────────────┐           │
│         │     [شعار]        │           │
│         │                   │           │
│         │   مرحباً بك في    │           │
│         │     منصة تلاوة     │           │
│         │                   │           │
│         │  [حقل: اسم المستخدم] │           │
│         │  [حقل: كلمة المرور] │           │
│         │                   │           │
│         │  [زر: تسجيل الدخول] │           │
│         │                   │           │
│         └───────────────────┘           │
│                                         │
└─────────────────────────────────────────┘
```

- مركز أفقي وعمودي
- بطاقة بيضاء بظل
- Mobile: `w-full max-w-sm p-6`
- Desktop: `w-full max-w-md p-8`

### Manager Dashboard (Desktop)

```
┌──────────────────────────────────────────────────────┐
│ [Sidebar]  │  [Header: عنوان + بحث + إشعارات + مستخدم] │
│            ├──────────────────────────────────────────┤
│  - لوحة    │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│  - المعلمون│  │طلاب:45 │ │معلمين:5│ │حضور:92%│ │مسدد:38 │
│  - الطلاب  │  └────────┘ └────────┘ └────────┘ └────────┘
│  - مدفوعات │                                          │
│  - نقل     │  ┌──────────────────┐ ┌──────────────────┐
│  - شهادات │  │  المدفوعات الشهرية │ │  أكثر الطلاب تقدماً│
│            │  │  [رسم بياني]      │ │  [قائمة top 5]   │
│            │  └──────────────────┘ └──────────────────┘
│            │                                          │
│            │  ┌────────────────────────────────────────┐
│            │  │  آخر طلبات النقل                       │
│            │  │  [جدول: طالب | من | إلى | حالة | إجراء] │
│            │  └────────────────────────────────────────┘
└────────────┴──────────────────────────────────────────┘
```

### Manager Dashboard (Mobile)

```
┌──────────────────────┐
│ [≡] تلاوة  [🔔]     │ ← Header مختصر
├──────────────────────┤
│ ┌──────────────────┐ │
│ │طلاب: 45          │ │ ← StatCard (عمودي)
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │معلمين: 5         │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │حضور: 92%         │ │
│ └──────────────────┘ │
│ ┌──────────────────┐ │
│ │مسدد: 38 من 45   │ │
│ └──────────────────┘ │
│                      │
│ ┌──────────────────┐ │
│ │آخر طلبات النقل    │ │
│ │ ┌──────────────┐ │ │
│ │ │محمد | موافق  │ │ │ ← Card list
│ │ └──────────────┘ │ │
│ │ ┌──────────────┐ │ │
│ │ │أحمد | معلق   │ │ │
│ │ └──────────────┘ │ │
│ └──────────────────┘ │
└──────────────────────┘
```

### Guardian Dashboard (Mobile-first)

```
┌──────────────────────┐
│ [≡] تلاوة  [🔔 ٣]   │ ← Header مع عداد إشعارات
├──────────────────────┤
│  أطفالي              │
│                      │
│  ┌──────────────────┐│
│  │ 👤 محمد           ││ ← StudentCard
│  │ المعلم: شيخ خالد  ││
│  │ ✅ حاضر اليوم     ││
│  │ 💰 مسدد لشهر يوليو││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │ 👤 فاطمة          ││
│  │ المعلم: شيخ خالد  ││
│  │ ✅ حاضر اليوم     ││
│  │ ⚠️ غير مسدد      ││
│  └──────────────────┘│
│                      │
│  ── آخر الإشعارات ──  │
│                      │
│  ┌──────────────────┐│
│  │ 📖 حفظ جديد       ││ ← Notification card
│  │ حفظ اليوم من النور││
│  │ آية 12 إلى 18     ││
│  │ قبل 30 دقيقة      ││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │ 📝 ملاحظة جديدة   ││
│  │ "أحسن اليوم..."   ││
│  │ قبل ساعة          ││
│  └──────────────────┘│
└──────────────────────┘
```

### Guardian Child Detail (Mobile-first)

```
┌──────────────────────┐
│ [←] محمد  [🔔]      │
├──────────────────────┤
│                      │
│  ── اليوم ──         │
│                      │
│  ┌──────────────────┐│
│  │ 📅 الحضور         ││
│  │ دخل: 4:30 م       ││
│  │ خرج: 6:10 م       ││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │ 📖 الحفظ          ││
│  │ سورة النور        ││
│  │ آية 12 إلى 18     ││
│  │ الجودة: ممتاز ✅   ││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │ 🔄 المراجعة       ││
│  │ الجزء 30          ││
│  │ الجودة: جيد        ││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │ 📝 ملاحظة المعلم  ││
│  │ "أحسن اليوم في    ││
│  │  التجويد"         ││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │ 💰 الاشتراك        ││
│  │ ✅ مسدد لشهر يوليو││
│  └──────────────────┘│
│                      │
│  [عرض السجل الكامل ↓]│ ← زر يفتح صفحة منفصلة
└──────────────────────┘
```

### Teacher Student Detail (Desktop)

```
┌──────────────────────────────────────────────────────┐
│ [Sidebar]  │ [← محمد أحمد]                            │
│            ├──────────────────────────────────────────┤
│            │                                          │
│            │ ┌──────────────────────────────────────┐ │
│            │ │  تسجيل اليوم                          │ │
│            │ │  [دخول 🕐] [خروج 🕐] [حفظ 📖]         │ │
│            │ │  [مراجعة 🔄] [ملاحظة 📝] [دفعة 💰]    │ │
│            │ └──────────────────────────────────────┘ │
│            │                                          │
│            │ ┌──────────────────┐ ┌──────────────────┐│
│            │ │  حضور اليوم       │ │  حفظ اليوم        ││
│            │ │  دخل: 4:30 م      │ │  سورة النور       ││
│            │ │  خرج: —           │ │  آية 12-18        ││
│            │ └──────────────────┘ └──────────────────┘│
│            │                                          │
│            │ ┌──────────────────────────────────────┐ │
│            │ │  السجل التاريخي                       │ │
│            │ │  [تبويبات: حضور | حفظ | مراجعة | ملاحظات]│
│            │ │  ┌────────────────────────────────┐  │ │
│            │ │  │ التاريخ | النوع | التفاصيل      │  │ │
│            │ │  │ 7/7    | حفظ  | النور 12-18    │  │ │
│            │ │  │ 6/7    | حفظ  | النور 1-11     │  │ │
│            │ │  │ 6/7    | حضور | 4:30 - 6:00    │  │ │
│            │ │  └────────────────────────────────┘  │ │
│            │ └──────────────────────────────────────┘ │
└────────────┴──────────────────────────────────────────┘
```

---

## [CSS_SETUP]

### TailwindCSS 4 Configuration

```css
/* src/index.css */
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');

@theme {
  --font-sans: "Cairo", "Inter", sans-serif;
  --font-mono: "Inter", monospace;

  --color-primary-50: #ECFDF5;
  --color-primary-100: #D1FAE5;
  --color-primary-500: #10B981;
  --color-primary-600: #059669;
  --color-primary-700: #047857;
  --color-primary-800: #065F46;
  --color-primary-900: #064E3B;

  --color-secondary-400: #FBBF24;
  --color-secondary-500: #F59E0B;
  --color-secondary-100: #FEF3C7;
  --color-secondary-50: #FFFBEB;
}

/* RTL Base */
html {
  direction: rtl;
}

body {
  font-family: "Cairo", "Inter", sans-serif;
  background-color: #F8FAFC;
  color: #1E293B;
}

/* أرقام بخط Inter */
.font-number {
  font-family: "Inter", sans-serif;
}

/* Scrollbar مخصص */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #F1F5F9;
}
::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
}

/* منع zoom على iOS عند التركيز على input */
@media (max-width: 640px) {
  input, select, textarea {
    font-size: 16px !important;
  }
}

/* Smooth transitions */
* {
  -webkit-tap-highlight-color: transparent;
}
