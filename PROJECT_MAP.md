# PROJECT_MAP — منصة تلاوة

> آخر تحديث: 7 يوليو 2026 الحالة: التخطيط المعماري — بانتظار الموافقة

---

## \[PROJECT_VISION\]

### الفكرة

منصة ويب متكاملة لإدارة مدارس تحفيظ القرآن الكريم، تربط ثلاثة أطراف في منظومة واحدة: **المدير** (صاحب المدرسة)، **المعلم** (محفظ القرآن)، و**ولي الأمر** (الأب/الأم).

### المشكلة التي تحلها

مدارس التحفيظ تعتمد حالياً على السجلات الورقية والاتصالات الهاتفية، مما يؤدي إلى:

- ضياع سجلات الحفظ والمراجعة
- صعوبة متابعة أولياء الأمور لأبنائهم يومياً
- فقدان تتبع المدفوعات الشهرية
- عدم وجود آلية منظمة لإصدار الشهادات
- صعوبة نقل الطلاب بين الحلقات مع حفظ سجلاتهم

### الحل

منصة رقمية مركزية توفر:

- تسجيل لحظي للحضور والخروج
- تتبع يومي للحفظ والمراجعة مع تقييم الجودة
- تواصل مباشر بين المعلم وولي الأمر عبر الملاحظات
- نظام مدفوعات شفاف مع تذكير تلقائي
- شهادات إلكترونية PDF تُصدر عند الإنجاز
- نظام إشعارات لحظي لولي الأمر

### الجمهور المستهدف

| المستخدم | الجهاز الأساسي | تكرر الاستخدام |
| --- | --- | --- |
| المدير | كمبيوتر مكتبي | يومياً + مراجعة أسبوعية |
| المعلم | كمبيوتر لوحي / كمبيوتر | يومياً (كل حلقة) |
| ولي الأمر | هاتف ذكي | يومياً (استلام إشعارات + متابعة) |

---

## \[USER_STORIES\]

### المدير

| \# | القصة | الأولوية |
| --- | --- | --- |
| M-01 | كمدير، أريد إضافة معلمين جدد وتعيينهم في مدرستي | عالية |
| M-02 | كمدير، أريد إضافة طلاب وربطهم بولي أمرهم ومعلمهم | عالية |
| M-03 | كمدير، أريد توزيع الطلاب على المعلمين | عالية |
| M-04 | كمدير، أريد رؤية جميع المدفوعات (مسدد/غير مسدد) | عالية |
| M-05 | كمدير، أريد رؤية إحصائيات المدرسة (عدد الطلاب، المعلمين، نسب الحضور) | متوسطة |
| M-06 | كمدير، أريد الموافقة/رفض طلبات نقل الطلاب بين الحلقات | عالية |
| M-07 | كمدير، أريد الموافقة/رفض الشهادات المقترحة | متوسطة |
| M-08 | كمدير، أريد تحديد قيمة الاشتراك الشهري | عالية |

### المعلم

| \# | القصة | الأولوية |
| --- | --- | --- |
| T-01 | كمعلم، أريد رؤية طلابي فقط (لا أرى طلاب معلمين آخرين) | عالية |
| T-02 | كمعلم، أريد تسجيل دخول وخروج الطالب | عالية |
| T-03 | كمعلم، أريد تسجيل ما حفظه الطالب (السورة والآية) | عالية |
| T-04 | كمعلم، أريد تسجيل المراجعة وتقييم جودتها | عالية |
| T-05 | كمعلم، أريد كتابة ملاحظات لولي الأمر | عالية |
| T-06 | كمعلم، أريد تسجيل الدفعة التي استلمتها من ولي الأمر | عالية |
| T-07 | كمعلم، أريد طلب نقل طالب لحلقة أخرى | متوسطة |
| T-08 | كمعلم، أريد اقتراح شهادة لطالب يستحقها | متوسطة |

### ولي الأمر

| \# | القصة | الأولوية |
| --- | --- | --- |
| G-01 | كولي أمر، أريد رؤية أطفالي فقط | عالية |
| G-02 | كولي أمر، أريد معرفة متى دخل وخرج طفلي اليوم | عالية |
| G-03 | كولي أمر، أريد معرفة ما حفظه طفلي اليوم | عالية |
| G-04 | كولي أمر، أريد قراءة ملاحظات المعلم | عالية |
| G-05 | كولي أمر، أريد معرفة حالة الاشتراك (مسدد/غير مسدد) | عالية |
| G-06 | كولي أمر، أريد استلام إشعارات لحظية بكل ما يخص طفلي | عالية |
| G-07 | كولي أمر، أريد استلام تذكير قبل استحقاق الاشتراك بـ 3 أيام | متوسطة |
| G-08 | كولي أمر، أريد استلام شهادة طفلي إلكترونياً (PDF) | متوسطة |
| G-09 | كولي أمر، أريد استلام إشعار بنقل طفلي لحلقة أخرى | متوسطة |

---

## \[FEATURES_BREAKDOWN\]

### 1. نظام الحسابات والمصادقة

| الميزة | التفاصيل |
| --- | --- |
| ثلاثة أدوار | مدير، معلم، ولي أمر — كل دور له صلاحياته |
| تسجيل دخول | JWT (Access + Refresh tokens) |
| حماية المسارات | ProtectedRoute في Frontend + Permission classes في Backend |
| عزل البيانات | كل مستخدم يرى بيانات مدرسته فقط، المعلم يرى طلابه، ولي الأمر يرى أطفاله |

### 2. إدارة الطلاب

| الميزة | التفاصيل |
| --- | --- |
| إضافة طالب | المدير يضيف: الاسم، تاريخ الميلاد، ولي الأمر، المعلم |
| ربط الطلاب | كل طالب مرتبط بولي أمر واحد ومعلم واحد |
| قائمة الطلاب | المدير يرى الكل، المعلم يرى طلابه فقط |
| نقل الطالب | طلب نقل → موافقة المدير → انتقال مع السجل الكامل → إشعار لولي الأمر |

### 3. الحضور والانصراف

| الميزة | التفاصيل |
| --- | --- |
| تسجيل الدخول | المعلم يسجل وقت دخول الطالب |
| تسجيل الخروج | المعلم يسجل وقت خروج الطالب |
| السجل اليومي | ولي أمر يرى: "دخل 4:30 م — خرج 6:10 م" |
| إشعار لحظي | إشعار لولي الأمر عند الدخول وعند الخروج |

### 4. الحفظ

| الميزة | التفاصيل |
| --- | --- |
| تسجيل الحفظ | المعلم يحدد: السورة، من آية، إلى آية |
| تقييم الجودة | ممتاز / جيد / يحتاج تكرار |
| السجل اليومي | ولي أمر يرى: "حفظ اليوم: سورة النور (آية 12 إلى 18)" |
| إشعار | إشعار لولي الأمر عند تسجيل حفظ جديد |

### 5. المراجعة

| الميزة | التفاصيل |
| --- | --- |
| جدول المراجعة | المعلم يحدد: يومي (جزء)، أسبوعي (سورة)، شهري (جزء كامل) |
| تسجيل المراجعة | المعلم يسجل ما راجع الطالب ويقيّم الجودة |
| متابعة ولي الأمر | يرى: هل راجع اليوم؟ + جودة المراجعة |
| تنبيه | تنبيه إذا لم يراجع الطالب |

### 6. الملاحظات

| الميزة | التفاصيل |
| --- | --- |
| كتابة ملاحظة | المعلم يكتب ملاحظة لولي الأمر |
| قراءة الملاحظة | ولي أمر يقرأ ويعلّم كمقروء |
| إشعار | إشعار لولي الأمر عند وجود ملاحظة جديدة |

### 7. المدفوعات

| الميزة | التفاصيل |
| --- | --- |
| تحديد المبلغ | المدير يحدد قيمة الاشتراك الشهري |
| تسجيل الدفعة | المعلم يستلم المبلغ نقداً ويسجله في المنصة |
| إشعار الدفع | ولي أمر يستلم: "تم تسجيل دفعتك 200 ريال" |
| حالة الاشتراك | ولي أمر يرى: "مسدد لشهر يوليو" أو "غير مسدد" |
| تذكير تلقائي | قبل نهاية الشهر بـ 3 أيام → إشعار تذكير لولي الأمر |
| تقرير المدير | المدير يرى كل المدفوعات (مسدد/غير مسدد لكل الطلاب) |

### 8. الشهادات

| الميزة | التفاصيل |
| --- | --- |
| أنواع الشهادات | إتمام ختمة، إنجاز سورة كبيرة، تقدم شهري، حضور مثالي |
| اقتراح الشهادة | النظام ينبه المعلم عندما الطالب على وشك الإتمام |
| الموافقة | المعلم يقترح → المدير يوافق |
| الإصدار | شهادة PDF إلكترونية تُرسل لولي الأمر |
| تنبيه ذكي | النظام يحسب تقدم الطالب وينبه المعلم |

### 9. الإشعارات

| الحدث | المستلم | الرسالة |
| --- | --- | --- |
| دخول الطفل | ولي أمر | "دخل محمد الساعة 4:30" |
| خروج الطفل | ولي أمر | "خرج محمد الساعة 6:10" |
| حفظ جديد | ولي أمر | "حفظ اليوم من النور آية 12 إلى 18" |
| ملاحظة جديدة | ولي أمر | "ملاحظة جديدة من المعلم" |
| تسجيل دفعة | ولي أمر | "تم تسجيل دفعتك 200 ريال" |
| تذكير دفع | ولي أمر | "اشتراك أغسطس مستحق خلال 3 أيام" |
| نقل طالب | ولي أمر | "تم نقل محمد إلى حلقة أخرى" |
| شهادة جديدة | ولي أمر | "شهادة جديدة لطفلك" |

### 10. لوحة تحكم المدير (الإحصائيات)

| الميزة | التفاصيل |
| --- | --- |
| عدد الطلاب | إجمالي الطلاب النشطين |
| عدد المعلمين | إجمالي المعلمين |
| نسبة الحضور | متوسط الحضور هذا الشهر |
| المدفوعات | إجمالي المسدد vs غير المسدد |
| أفضل الطلاب | ترتيب الطلاب حسب تقدم الحفظ |

---

## \[TECH_STACK\]

### البروتوكول الأول: الوعي الزمني وموثوقية التبعيات

**تاريخ التحقق:** 7 يوليو 2026

#### Backend

| التقنية | الإصدار | تاريخ الإصدار | الغرض | ملاحظة التوافق |  |
| --- | --- | --- | --- | --- | --- |
| Python | 3.14.6 | 10 يونيو 2026 | لغة البرمجة | أحدث مستقر |  |
| Poetry | 2.3.0 | 18 يناير 2026 | إدارة الحزم والتبعيات | يدعم Python 3.14 |  |
| Django | 6.0.6 | 3 يونيو 2026 | إطار عمل الويب | يدعم Python 3.14 |  |
| Django REST Framework | 3.17.1 | 18 مارس 2026 | بناء REST APIs | دعم رسمي لـ Django 6.0 |  |
| djangorestframework-simplejwt | 5.5.1 | 21 يوليو 2025 | مصادقة JWT | يعمل عبر DRF 3.17+ |  |
| django-cors-headers |  | 4.9.0 | 18 سبتمبر 2025 | CORS للـ SPA | دعم رسمي لـ Django 6.0 |
| django-filter | 25.2 | 2026 | فلترة الاستعلامات | متوافق مع Django 6.0 |  |
| psycopg2-binary | 2.9.12 | 20 أبريل 2026 | محرك PostgreSQL | يدعم Python 3.14 |  |
| whitenoise | 6.12.0 | 14 يونيو 2026 | الملفات الثابتة في الإنتاج | دعم Django 6.0 |  |
| gunicorn | 23.x | 5 مايو 2026 | خادم WSGI للإنتاج | مستقر |  |
| weasyprint | latest | 2026 | توليد PDF للشهادات | HTML/CSS → PDF |  |

#### Frontend

| التقنية | الإصدار | تاريخ الإصدار | الغرض | ملاحظة التوافق |
| --- | --- | --- | --- | --- |
| React | 19.2.7 | 1 يونيو 2026 | مكتبة واجهة المستخدم | React Compiler مدمج |
| Vite | 8.1.3 | 2 يوليو 2026 | أداة البناء + خادم التطوير | Rolldown bundler |
| TailwindCSS | 4.3.2 | 29 يونيو 2026 | إطار CSS (utility-first) | v4 — أداء محسّن |
| React Router | 8.1.0 | 17 يونيو 2026 | التوجيه من جانب العميل | v8 — مستقر |
| Axios | 1.18.1 | 22 يونيو 2026 | عميل HTTP | interceptors للـ JWT |
| TanStack Query | latest | 2026 | إدارة حالة الخادم | caching + invalidation |
| Lucide React | 1.17.0 | 28 مايو 2026 | مكتبة الأيقونات | v1.0 — stable |

#### لماذا هذه التقنيات؟

| التقنية | لماذا وليس بديل؟ |
| --- | --- |
| Django 6.0 | أقوى من Flask للمشاريع الإدارية (ORM مدمج، admin، permissions) |
| DRF | أبسط من GraphQL للعلاقات الهرمية الواضحة |
| SimpleJWT | أنسب من Session auth للـ SPA (لا cookies، لا CSRF) |
| Poetry | أدق من pip+requirements.txt (lock file، virtualenv مدمج) |
| React 19 | أداء أفضل من Vue للمشاريع المعقدة، مجتمع أكبر |
| Vite 8 | أسرع من Webpack بعشر مرات في التطوير |
| TailwindCSS 4 | أسرع في التطوير من CSS يدوي، حجم أصغر في الإنتاج |
| TanStack Query | يحل مشكلة caching وinvalidation بدون Redux overhead |
| PostgreSQL | أنسب من SQLite للإنتاج (تزامن، أداء، توسع) |

---

## \[SYSTEM_FLOW\]

### تدفق البيانات العام

```
[ولي الأمر / معلم / مدير]
        │
        ▼
[React SPA — Vite + TailwindCSS]
        │
        ▼ (Axios + JWT Bearer Token)
[Django REST Framework API]
        │
        ├──→ ViewSet (Controller) — صلاحيات + توجيه
        │        │
        │        ▼
        ├──→ Serializer — تحقق + تحويل
        │        │
        │        ▼
        ├──→ ORM → PostgreSQL
        │        │
        │        ▼
        └──→ post_save Signal → Notification
                                   │
                                   ▼
                          [Guardian Inbox]
```

### دورة حياة الطلب (Request Lifecycle)

```
1. User Action (click)
2. React Component → useState / form
3. Axios Request (with JWT in Authorization header)
4. Django URL Router → ViewSet
5. Permission Class check (IsManager / IsTeacher / IsGuardian)
6. Serializer.validate() → data integrity
7. ORM Query → PostgreSQL
8. post_save Signal → Notification.objects.create() (if applicable)
9. Response JSON (201 / 200 / 400 / 403)
10. React Query cache invalidation → refetch
11. UI Re-render
```

### تدفق: المعلم يسجل حفظ طالب

```
[Teacher clicks "تسجيل حفظ" in StudentDetail.jsx]
  ↓
[React Form state → MemorizationForm component]
  ↓
[POST /api/memorization/ via api/quran.js → Axios with JWT]
  ↓
[Django URL → MemorizationViewSet.create()]
  ↓
[Permission check: IsTeacher + owns this student]
  ↓
[MemorizationSerializer.validate() → checks data integrity]
  ↓
[MemorizationRecord.objects.create() → PostgreSQL]
  ↓
[post_save signal → Notification.objects.create() for guardian]
  ↓
[Response 201 Created → JSON back to React]
  ↓
[React Query invalidates 'memorization' cache → refetch]
  ↓
[UI updates: new record appears in list]
  ↓
[Guardian opens app → GET /api/notifications/ → sees "حفظ جديد"]
```

### تدفق: التذكير الشهري للمدفوعات

```
[cron job: python manage.py send_payment_reminders]
    │
    ▼
[Query: Payment.filter(month=current, is_paid=False)]
    │
    ▼
[For each student where today + 3 >= end_of_month:]
    │
    ▼
[Notification.create(user=guardian, type='reminder',
   message="اشتراك أغسطس مستحق خلال 3 أيام")]
    │
    ▼
[Guardian sees reminder on next app open]
```

### تدفق: نقل طالب بين الحلقات

```
[Teacher/Manager clicks "طلب نقل" for a student]
  ↓
[POST /api/transfers/ → TransferRequest(status='pending')]
  ↓
[Manager sees request in /manager/transfers]
  ↓
[Manager clicks "موافقة" → PATCH /api/transfers/{id}/approve/]
  ↓
[TransferRequest.status = 'approved']
  ↓
[Student.teacher = to_teacher (auto-update in viewset)]
  ↓
[post_save signal → Notification for guardian: "تم نقل محمد"]
  ↓
[Student record preserved — all history stays linked to student]
```

### تدفق: إصدار شهادة

```
[System detects student near completion → alerts teacher]
  ↓
[Teacher tests student → clicks "اقتراح شهادة"]
  ↓
[POST /api/certificates/ → Certificate(status='pending')]
  ↓
[Manager sees request in /manager/certificates]
  ↓
[Manager clicks "موافقة" → PATCH /api/certificates/{id}/approve/]
  ↓
[Certificate.status = 'approved']
  ↓
[services.py: weasyprint renders HTML template → PDF]
  ↓
[Certificate.pdf_file = generated PDF]
  ↓
[post_save signal → Notification for guardian: "شهادة جديدة"]
  ↓
[Guardian downloads PDF from /api/certificates/{id}/pdf/]
```

---

## \[ARCHITECTURE\]

### التقسيم المعتمد على الميزات (Domain-Driven)

7 تطبيقات Django، كل واحد يمثل نطاق أعمال مستقل:

| App | النطاق | النماذج | المسؤولية |
| --- | --- | --- | --- |
| `accounts` | المستخدمون والمدرسة | User, School | المصادقة، الأدوار، الصلاحيات، بيانات المدرسة |
| `students` | الطلاب والمعلمون | Teacher, Guardian, Student, TransferRequest | إدارة الطلاب وربطهم بالمعلمين وأولياء الأمور، طلبات النقل |
| `attendance` | الحضور | Attendance | تسجيل دخول/خروج الطلاب اليومي |
| `quran` | الحفظ والمراجعة | MemorizationRecord, ReviewRecord, Note | سجلات الحفظ والمراجعة والملاحظات اليومية |
| `finance` | المدفوعات | Payment | تسجيل المدفوعات الشهرية، تذكير الدفع |
| `notifications` | الإشعارات | Notification | إشعارات لأولياء الأمور (تُنشأ عبر signals) |
| `certificates` | الشهادات | Certificate | إصدار الشهادات الإلكترونية PDF |

### نموذج قاعدة البيانات الكامل (Database Schema)

#### App: `accounts`

```python
class School(models.Model):
    name = models.CharField(max_length=200)
    manager = models.OneToOneField("User", on_delete=models.CASCADE, related_name="managed_school")
    monthly_fee = models.DecimalField(max_digits=8, decimal_places=2, default=200)
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class User(AbstractUser):
    class Role(models.TextChoices):
        MANAGER  = "manager",  "مدير"
        TEACHER  = "teacher",  "معلم"
        GUARDIAN = "guardian", "ولي أمر"

    role = models.CharField(max_length=10, choices=Role.choices)
    phone_number = models.CharField(max_length=20, blank=True)
    school = models.ForeignKey("School", on_delete=models.CASCADE, null=True, blank=True)
```

#### App: `students`

```python
class Teacher(models.Model):
    user = models.OneToOneField("accounts.User", on_delete=models.CASCADE)
    school = models.ForeignKey("accounts.School", on_delete=models.CASCADE)
    bio = models.TextField(blank=True)

class Guardian(models.Model):
    user = models.OneToOneField("accounts.User", on_delete=models.CASCADE)
    school = models.ForeignKey("accounts.School", on_delete=models.CASCADE)
    relationship = models.CharField(max_length=20, choices=[("father","أب"),("mother","أم"),("other","أخرى")])

class Student(models.Model):
    name = models.CharField(max_length=200)
    guardian = models.ForeignKey("Guardian", on_delete=models.CASCADE, related_name="children")
    teacher = models.ForeignKey("Teacher", on_delete=models.SET_NULL, null=True, related_name="students")
    school = models.ForeignKey("accounts.School", on_delete=models.CASCADE)
    birth_date = models.DateField(null=True, blank=True)
    enrollment_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

class TransferRequest(models.Model):
    student = models.ForeignKey("Student", on_delete=models.CASCADE, related_name="transfers")
    from_teacher = models.ForeignKey("Teacher", on_delete=models.CASCADE, related_name="outgoing_transfers")
    to_teacher = models.ForeignKey("Teacher", on_delete=models.CASCADE, related_name="incoming_transfers")
    reason = models.TextField()
    status = models.CharField(max_length=10, choices=[("pending","معلق"),("approved","موافق"),("rejected","مرفوض")], default="pending")
    requested_by = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="requested_transfers")
    approved_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="approved_transfers")
    created_at = models.DateTimeField(auto_now_add=True)
    approved_at = models.DateTimeField(null=True, blank=True)
```

#### App: `attendance`

```python
class Attendance(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="attendance_records")
    date = models.DateField()
    check_in_time = models.TimeField(null=True, blank=True)
    check_out_time = models.TimeField(null=True, blank=True)
    recorded_by = models.ForeignKey("accounts.User", on_delete=models.CASCADE)
    class Meta:
        unique_together = ("student", "date")
```

#### App: `quran`

```python
class MemorizationRecord(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="memorization_records")
    date = models.DateField()
    surah_name = models.CharField(max_length=100)
    from_ayah = models.PositiveIntegerField()
    to_ayah = models.PositiveIntegerField()
    quality = models.CharField(max_length=20, choices=[("excellent","ممتاز"),("good","جيد"),("needs_repeat","يحتاج تكرار")])
    recorded_by = models.ForeignKey("accounts.User", on_delete=models.CASCADE)

class ReviewRecord(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="review_records")
    date = models.DateField()
    review_type = models.CharField(max_length=10, choices=[("daily","يومي"),("weekly","أسبوعي"),("monthly","شهري")])
    content = models.CharField(max_length=200)  # e.g. "الجزء 30" or "سورة الملك"
    quality = models.CharField(max_length=20, choices=[("excellent","ممتاز"),("good","جيد"),("needs_repeat","يحتاج تكرار")])
    recorded_by = models.ForeignKey("accounts.User", on_delete=models.CASCADE)

class Note(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="notes")
    teacher = models.ForeignKey("accounts.User", on_delete=models.CASCADE)
    content = models.TextField()
    read_by_guardian = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
```

#### App: `finance`

```python
class Payment(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="payments")
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    month = models.CharField(max_length=7)  # "2026-07"
    paid_date = models.DateField(null=True, blank=True)
    received_by = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="received_payments")
    is_paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together = ("student", "month")
```

#### App: `notifications`

```python
class Notification(models.Model):
    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="notifications")
    title = models.CharField(max_length=200)
    message = models.TextField()
    notification_type = models.CharField(max_length=20, choices=[
        ("check_in", "دخول"), ("check_out", "خروج"),
        ("memorization", "حفظ"), ("review", "مراجعة"),
        ("note", "ملاحظة"), ("payment", "دفع"),
        ("reminder", "تذكير"), ("transfer", "نقل"),
        ("certificate", "شهادة"),
    ])
    is_read = models.BooleanField(default=False)
    related_student = models.ForeignKey("students.Student", on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
```

#### App: `certificates`

```python
class Certificate(models.Model):
    student = models.ForeignKey("students.Student", on_delete=models.CASCADE, related_name="certificates")
    certificate_type = models.CharField(max_length=30, choices=[
        ("full_quran", "إتمام ختمة القرآن"),
        ("big_surah", "إنجاز سورة كبيرة"),
        ("monthly_progress", "تقدم شهري"),
        ("perfect_attendance", "حضور مثالي"),
    ])
    title = models.CharField(max_length=200)
    description = models.TextField()
    issue_date = models.DateField(auto_now_add=True)
    suggested_by = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="suggested_certificates")
    approved_by = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True, related_name="approved_certificates")
    status = models.CharField(max_length=10, choices=[("pending","معلق"),("approved","موافق"),("rejected","مرفوض")], default="pending")
    pdf_file = models.FileField(upload_to="certificates/", null=True, blank=True)
```

### API Endpoints الكامل

#### Auth

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/auth/login/` | POST | الكل | تسجيل الدخول (JWT) |
| `/api/auth/refresh/` | POST | الكل | تجديد التوكن |
| `/api/auth/me/` | GET | الكل | بيانات المستخدم الحالي |

#### Accounts

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/teachers/` | GET/POST | مدير | قائمة/إضافة معلمين |
| `/api/teachers/{id}/` | GET/PATCH/DELETE | مدير | تفاصيل/تعديل/حذف معلم |
| `/api/guardians/` | GET/POST | مدير | قائمة/إضافة أولياء أمور |
| `/api/guardians/{id}/` | GET/PATCH | مدير | تفاصيل/تعديل ولي أمر |
| `/api/school/` | GET/PATCH | مدير | بيانات المدرسة + تحديد الاشتراك |

#### Students

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/students/` | GET/POST | مدير/معلم | قائمة/إضافة طلاب |
| `/api/students/{id}/` | GET/PATCH | مدير/معلم | تفاصيل/تعديل طالب |
| `/api/students/{id}/dashboard/` | GET | ولي أمر/معلم | لوحة طالب كاملة (حضور+حفظ+مراجعة+ملاحظات+دفع) |
| `/api/transfers/` | GET/POST | مدير/معلم | قائمة/إنشاء طلبات نقل |
| `/api/transfers/{id}/approve/` | PATCH | مدير | الموافقة على نقل |
| `/api/transfers/{id}/reject/` | PATCH | مدير | رفض نقل |

#### Attendance

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/attendance/` | GET/POST | معلم | قائمة/تسجيل حضور |
| `/api/attendance/today/` | GET | معلم | حضور اليوم لطلابه |
| `/api/attendance/{id}/` | PATCH | معلم | تحديث (إضافة وقت خروج) |

#### Quran

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/memorization/` | GET/POST | معلم | سجلات الحفظ |
| `/api/memorization/{id}/` | GET/PATCH | معلم | تفاصيل/تعديل سجل |
| `/api/reviews/` | GET/POST | معلم | سجلات المراجعة |
| `/api/reviews/{id}/` | GET/PATCH | معلم | تفاصيل/تعديل سجل |
| `/api/notes/` | GET/POST | معلم/ولي أمر | الملاحظات (معلم يكتب، ولي أمر يقرأ) |
| `/api/notes/{id}/read/` | PATCH | ولي أمر | تعليم كمقروء |

#### Finance

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/payments/` | GET/POST | معلم/مدير | المدفوعات |
| `/api/payments/{id}/` | GET/PATCH | معلم/مدير | تفاصيل/تعديل دفعة |
| `/api/payments/pending/` | GET | مدير | المدفوعات غير المسددة |
| `/api/payments/remind/` | POST | النظام | تذكير الدفع (management command) |

#### Notifications

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/notifications/` | GET | الكل | إشعارات المستخدم |
| `/api/notifications/{id}/read/` | PATCH | الكل | تعليم كمقروء |
| `/api/notifications/unread_count/` | GET | الكل | عدد غير المقروء |

#### Certificates

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/certificates/` | GET/POST | معلم/مدير | الشهادات |
| `/api/certificates/{id}/approve/` | PATCH | مدير | الموافقة |
| `/api/certificates/{id}/reject/` | PATCH | مدير | الرفض |
| `/api/certificates/{id}/pdf/` | GET | ولي أمر | تحميل PDF |

#### Dashboard

| Endpoint | Method | الدور | الوظيفة |
| --- | --- | --- | --- |
| `/api/dashboard/` | GET | الكل | بيانات لوحة التحكم حسب الدور |

### الصلاحيات (Permissions)

| Permission Class | يسمح بـ |
| --- | --- |
| `IsManager` | الوصول للمدير فقط |
| `IsTeacher` | الوصول للمعلم فقط |
| `IsGuardian` | الوصول لولي الأمر فقط |
| `IsOwnerOrManager` | المستخدم يرى بياناته أو المدير يرى الكل |
| `IsTeacherOfStudent` | المعلم يرى/يعدل طلابه فقط |
| `IsGuardianOfStudent` | ولي الأمر يرى أطفاله فقط |

### عزل البيانات (Data Isolation)

- كل استعلام يُفلتر بـ `school=request.user.school` لمنع تسريب بيانات بين المدارس
- المعلم: `Student.objects.filter(teacher=request.user.teacher)`
- ولي الأمر: `Student.objects.filter(guardian=request.user.guardian)`
- المدير: يرى كل بيانات مدرسته

### الإشعارات (Notifications via Signals)

| الحدث (Signal) | التطبيق المصدر | المستلم | نوع الإشعار |
| --- | --- | --- | --- |
| `Attendance.post_save` (check_in) | attendance | ولي أمر الطالب | `check_in` |
| `Attendance.post_save` (check_out) | attendance | ولي أمر الطالب | `check_out` |
| `MemorizationRecord.post_save` | quran | ولي أمر الطالب | `memorization` |
| `ReviewRecord.post_save` | quran | ولي أمر الطالب | `review` |
| `Note.post_save` | quran | ولي أمر الطالب | `note` |
| `Payment.post_save` (is_paid=True) | finance | ولي أمر الطالب | `payment` |
| `TransferRequest.post_save` (approved) | students | ولي أمر الطالب | `transfer` |
| `Certificate.post_save` (approved) | certificates | ولي أمر الطالب | `certificate` |
| Management Command (cron) | finance | ولي أمر الطالب | `reminder` |

### استراتيجية التتبع (Safe Logging)

```python
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {"format": "[{asctime}] {levelname} {name}: {message}", "style": "{"},
    },
    "handlers": {
        "console": {"class": "logging.StreamHandler", "formatter": "verbose"},
        "file": {
            "class": "logging.handlers.RotatingFileHandler",
            "filename": BASE_DIR / "logs" / "tilawa.log",
            "maxBytes": 5 * 1024 * 1024,
            "backupCount": 3,
            "formatter": "verbose",
        },
    },
    "loggers": {
        "django": {"handlers": ["console"], "level": "INFO"},
        "tilawa": {"handlers": ["console", "file"], "level": "DEBUG"},
    },
    "root": {"handlers": ["console"], "level": "WARNING"},
}
```

- غير حظري (Python logging مدمج)
- مستويات: DEBUG (تطوير) → INFO (إنتاج) → WARNING/ERROR (مشاكل)
- RotatingFileHandler: حد أقصى 5MB لكل ملف، 3 ملفات احتياطية

---

## \[FRONTEND_ARCHITECTURE\]

### هيكل المشروع الكامل

```
tilawa/
├── backend/
│   ├── pyproject.toml
│   ├── manage.py
│   ├── config/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   ├── apps/
│   │   ├── accounts/
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── permissions.py
│   │   │   ├── signals.py
│   │   │   └── migrations/
│   │   ├── students/
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── signals.py
│   │   │   └── migrations/
│   │   ├── attendance/
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── signals.py
│   │   │   └── migrations/
│   │   ├── quran/
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── signals.py
│   │   │   └── migrations/
│   │   ├── finance/
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   ├── management/
│   │   │   │   └── commands/
│   │   │   │       └── send_payment_reminders.py
│   │   │   ├── signals.py
│   │   │   └── migrations/
│   │   ├── notifications/
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── views.py
│   │   │   ├── urls.py
│   │   │   └── migrations/
│   │   └── certificates/
│   │       ├── models.py
│   │       ├── serializers.py
│   │       ├── views.py
│   │       ├── urls.py
│   │       ├── services.py
│   │       └── migrations/
│   └── tests/
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── api/
│   │   │   ├── client.js
│   │   │   ├── auth.js
│   │   │   ├── students.js
│   │   │   ├── attendance.js
│   │   │   ├── quran.js
│   │   │   ├── finance.js
│   │   │   ├── notifications.js
│   │   │   └── certificates.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useApi.js
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── ManagerLayout.jsx
│   │   │   │   ├── TeacherLayout.jsx
│   │   │   │   ├── GuardianLayout.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Header.jsx
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Select.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── DataTable.jsx
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   ├── EmptyState.jsx
│   │   │   │   └── StatCard.jsx
│   │   │   └── shared/
│   │   │       ├── ProtectedRoute.jsx
│   │   │       ├── NotificationBell.jsx
│   │   │       └── StudentCard.jsx
│   │   └── pages/
│   │       ├── Login.jsx
│   │       ├── manager/
│   │       │   ├── Dashboard.jsx
│   │       │   ├── Teachers.jsx
│   │       │   ├── Students.jsx
│   │       │   ├── Payments.jsx
│   │       │   ├── Transfers.jsx
│   │       │   └── Certificates.jsx
│   │       ├── teacher/
│   │       │   ├── Dashboard.jsx
│   │       │   ├── StudentList.jsx
│   │       │   ├── StudentDetail.jsx
│   │       │   └── Payments.jsx
│   │       └── guardian/
│   │           ├── Dashboard.jsx
│   │           ├── ChildDetail.jsx
│   │           └── Certificates.jsx
│   └── .env
├── PROJECT_MAP.md
├── DESIGN_MAP.md
└── README.md
```

### شجرة المكونات (Component Tree)

```
App.jsx
├── AuthProvider (Context)
├── BrowserRouter
│   ├── /login → LoginPage
│   ├── /manager/* → ManagerLayout
│   │   ├── Sidebar + Header
│   │   ├── /manager/dashboard → ManagerDashboard
│   │   ├── /manager/teachers → TeachersPage
│   │   ├── /manager/students → StudentsPage
│   │   ├── /manager/payments → PaymentsPage
│   │   ├── /manager/transfers → TransfersPage
│   │   └── /manager/certificates → CertificatesPage
│   ├── /teacher/* → TeacherLayout
│   │   ├── Sidebar + Header
│   │   ├── /teacher/dashboard → TeacherDashboard
│   │   ├── /teacher/students → StudentListPage
│   │   ├── /teacher/students/:id → StudentDetailPage
│   │   └── /teacher/payments → PaymentsPage
│   └── /guardian/* → GuardianLayout
│       ├── Sidebar + Header
│       ├── /guardian/dashboard → GuardianDashboard
│       ├── /guardian/children/:id → ChildDetailPage
│       └── /guardian/certificates → CertificatesPage
```

### إدارة الحالة (State Management)

| النوع | الأداة | الاستخدام |
| --- | --- | --- |
| Auth State | React Context API | المستخدم الحالي + JWT token |
| Server State | TanStack Query | جلب البيانات، caching، invalidation، loading/error states |
| Local UI State | useState | نماذج، modals، toggles |

### رحلة المستخدم (User Flows)

#### رحلة المدير

1. تسجيل الدخول → لوحة التحكم (إحصائيات المدرسة)
2. إضافة معلم → إضافة طالب → ربط الطالب بولي أمر ومعلم
3. متابعة المدفوعات (كل الطلاب) → الموافقة على طلبات النقل → الموافقة على الشهادات

#### رحلة المعلم

1. تسجيل الدخول → لوحة التحكم (طلابه فقط)
2. اختيار طالب → تسجيل دخول/خروج → تسجيل حفظ → تسجيل مراجعة → كتابة ملاحظة
3. استلام دفعة من ولي أمر → تسجيل الدفعة → ولي أمر يستلم إشعار

#### رحلة ولي الأمر

1. تسجيل الدخول → لوحة التحكم (أطفاله)
2. اختيار طفل → رؤية: الحضور اليوم + الحفظ + المراجعة + الملاحظات + حالة الاشتراك
3. استلام إشعارات لحظية → قراءة الشهادات (PDF)

---

## \[IMPLEMENTATION_STRATEGY\]

### مبادئ التنفيذ

| المبدأ | التطبيق |
| --- | --- |
| Simplicity First | أقل قدر من الكود يحل المشكلة — لا Celery، لا Redis، لا WebSocket للـ MVP |
| No Feature Creep | التزام صارم بالنطاق المطلوب — لا ميزات إضافية |
| Domain-Driven | 7 تطبيقات تمثل 7 نطاقات أعمال واضحة |
| No Micro-files | كل طبقة في ملف واحد (models.py, serializers.py, views.py) |
| Shared/Core فقط للمنطق المتكرر | permissions.py في accounts، client.js في frontend |
| Arabic-first | RTL، خط Cairo، واجهة عربية بالكامل |
| Mobile-first for Guardian | صفحات ولي الأمر مُحسّنة للجوال أولاً |

### ترتيب تنفيذ الملفات (File Creation Order)

#### Milestone 1: Foundation

| الترتيب | الملف | السبب |
| --- | --- | --- |
| 1 | `backend/pyproject.toml` | تهيئة Poetry + التبعيات |
| 2 | `backend/config/settings.py` | إعدادات Django (apps, middleware, DRF, JWT, CORS) |
| 3 | `backend/config/urls.py` | URL routing الرئيسي |
| 4 | `backend/apps/accounts/models.py` | User + School (الأساس لكل شيء) |
| 5 | `backend/apps/accounts/permissions.py` | Permission classes (تستخدمها كل التطبيقات) |
| 6 | `backend/apps/accounts/serializers.py` | Auth serializers (login, user info) |
| 7 | `backend/apps/accounts/views.py` | Auth viewsets |
| 8 | `backend/apps/accounts/urls.py` | Auth endpoints |
| 9 | `frontend/package.json` | تبعيات React |
| 10 | `frontend/vite.config.js` | إعدادات Vite + proxy للـ API |
| 11 | `frontend/src/index.css` | TailwindCSS + RTL |
| 12 | `frontend/src/main.jsx` | نقطة الدخول |
| 13 | `frontend/src/api/client.js` | Axios instance + interceptors |
| 14 | `frontend/src/context/AuthContext.jsx` | حالة المصادقة |
| 15 | `frontend/src/components/shared/ProtectedRoute.jsx` | حماية المسارات |
| 16 | `frontend/src/App.jsx` | Router + role-based routing |
| 17 | `frontend/src/pages/Login.jsx` | صفحة تسجيل الدخول |
| 18 | `frontend/src/components/layout/*.jsx` | القوالب الثلاثة (Manager/Teacher/Guardian) |
| 19 | `frontend/src/components/ui/*.jsx` | المكونات الأساسية (Button, Input, Card...) |

#### Milestone 2: Student Management

| الترتيب | الملف | السبب |
| --- | --- | --- |
| 20 | `backend/apps/students/models.py` | Teacher, Guardian, Student, TransferRequest |
| 21 | `backend/apps/students/serializers.py` | Serializers للنماذج |
| 22 | `backend/apps/students/views.py` | ViewSets + عزل البيانات |
| 23 | `backend/apps/students/urls.py` | Endpoints |
| 24 | `backend/apps/students/signals.py` | إشعار النقل |
| 25 | `frontend/src/api/students.js` | دوال API |
| 26 | `frontend/src/pages/manager/Teachers.jsx` | إدارة المعلمين |
| 27 | `frontend/src/pages/manager/Students.jsx` | إدارة الطلاب |
| 28 | `frontend/src/pages/manager/Transfers.jsx` | طلبات النقل |

#### Milestone 3: Daily Operations

| الترتيب | الملف | السبب |
| --- | --- | --- |
| 29 | `backend/apps/attendance/models.py` | Attendance |
| 30 | `backend/apps/attendance/serializers.py` | — |
| 31 | `backend/apps/attendance/views.py` | — |
| 32 | `backend/apps/attendance/urls.py` | — |
| 33 | `backend/apps/attendance/signals.py` | إشعارات دخول/خروج |
| 34 | `backend/apps/quran/models.py` | Memorization, Review, Note |
| 35 | `backend/apps/quran/serializers.py` | — |
| 36 | `backend/apps/quran/views.py` | — |
| 37 | `backend/apps/quran/urls.py` | — |
| 38 | `backend/apps/quran/signals.py` | إشعارات حفظ/مراجعة/ملاحظة |
| 39 | `backend/apps/notifications/models.py` | Notification |
| 40 | `backend/apps/notifications/serializers.py` | — |
| 41 | `backend/apps/notifications/views.py` | — |
| 42 | `backend/apps/notifications/urls.py` | — |
| 43 | `frontend/src/api/attendance.js` | — |
| 44 | `frontend/src/api/quran.js` | — |
| 45 | `frontend/src/api/notifications.js` | — |
| 46 | `frontend/src/pages/teacher/Dashboard.jsx` | — |
| 47 | `frontend/src/pages/teacher/StudentList.jsx` | — |
| 48 | `frontend/src/pages/teacher/StudentDetail.jsx` | — |
| 49 | `frontend/src/components/shared/NotificationBell.jsx` | — |

#### Milestone 4: Guardian Experience

| الترتيب | الملف | السبب |
| --- | --- | --- |
| 50 | `frontend/src/pages/guardian/Dashboard.jsx` | لوحة ولي الأمر |
| 51 | `frontend/src/pages/guardian/ChildDetail.jsx` | تفاصيل الطفل |
| 52 | `frontend/src/components/shared/StudentCard.jsx` | بطاقة الطالب (mobile) |

#### Milestone 5: Finance

| الترتيب | الملف | السبب |
| --- | --- | --- |
| 53 | `backend/apps/finance/models.py` | Payment |
| 54 | `backend/apps/finance/serializers.py` | — |
| 55 | `backend/apps/finance/views.py` | — |
| 56 | `backend/apps/finance/urls.py` | — |
| 57 | `backend/apps/finance/signals.py` | إشعار الدفع |
| 58 | `backend/apps/finance/management/commands/send_payment_reminders.py` | تذكير شهري |
| 59 | `frontend/src/api/finance.js` | — |
| 60 | `frontend/src/pages/teacher/Payments.jsx` | تسجيل مدفوعات |
| 61 | `frontend/src/pages/manager/Payments.jsx` | كل المدفوعات |

#### Milestone 6: Transfers & Certificates

| الترتيب | الملف | السبب |
| --- | --- | --- |
| 62 | `backend/apps/certificates/models.py` | Certificate |
| 63 | `backend/apps/certificates/serializers.py` | — |
| 64 | `backend/apps/certificates/views.py` | — |
| 65 | `backend/apps/certificates/urls.py` | — |
| 66 | `backend/apps/certificates/services.py` | توليد PDF بـ weasyprint |
| 67 | `frontend/src/api/certificates.js` | — |
| 68 | `frontend/src/pages/manager/Certificates.jsx` | موافقة الشهادات |
| 69 | `frontend/src/pages/guardian/Certificates.jsx` | شهادات أطفالي |

#### Milestone 7: Polish & Testing

| الترتيب | الملف | السبب |
| --- | --- | --- |
| 70 | `backend/tests/` | اختبارات API |
| 71 | `frontend/src/pages/manager/Dashboard.jsx` | إحصائيات المدرسة |
| 72 | `README.md` | توثيق المشروع |

---

## \[SECURITY\]

### المصادقة

| الجانب | التفاصيل |
| --- | --- |
| الطريقة | JWT (Access token + Refresh token) |
| Access token | صلاحية 15 دقيقة |
| Refresh token | صلاحية 7 أيام |
| التخزين | localStorage (Access) + localStorage (Refresh) |
| التجديد | Axios interceptor يعمل تلقائياً عند انتهاء Access token |

### التفويض

| الجانب | التفاصيل |
| --- | --- |
| الأدوار | 3 أدوار (manager, teacher, guardian) في User.role |
| Permission classes | مخصصة لكل endpoint |
| عزل البيانات | فلترة كل queryset بـ school + role |

### المخاطر والتخفيف

| الخطر | التخفيف |
| --- | --- |
| تسريب بيانات طلاب مدرسة أخرى | فلترة كل استعلام بـ `school=request.user.school` |
| معلم يرى طلاب معلم آخر | `Student.objects.filter(teacher=request.user.teacher)` |
| ولي أمر يرى أطفالاً غير أطفاله | `Student.objects.filter(guardian=request.user.guardian)` |
| CSRF | غير مطبق (JWT في header، لا cookies) |
| XSS | React يهرب تلقائياً + CSP headers |
| SQL Injection | Django ORM يستخدم parameterized queries |

---

## \[ORPHANS & PENDING\]

### نطاق MVP (غير مشمول الآن)

| العنصر | السبب | متى؟ |
| --- | --- | --- |
| Real-time notifications (WebSocket) | Polling كل 30 ثانية كافٍ للـ MVP | بعد الإطلاق |
| Mobile App (React Native) | الـ API جاهز، التطبيق نطاق مستقل | مرحلة لاحقة |
| Arabic SMS Gateway | الإشعارات داخل التطبيق كافية للبداية | عند الطلب |
| Multi-school full isolation | الـ schema يدعمه (School FK) لكن نبدأ بمدرسة واحدة | عند التوسع |
| Celery + Redis | Management command + cron يكفي للتذكير الشهري | عند الحاجة لـ async معقد |
| File upload (student photos) | غير ضروري للـ MVP | مرحلة لاحقة |
| Arabic OCR for Quran verification | خارج النطاق تماماً | لا |
| دردشة معلم ↔ ولي أمر | الملاحظات تكفي للتواصل الأساسي | مرحلة لاحقة |
| تقويم الحلقات | تسجيل الحضور اليومي يكفي | مرحلة لاحقة |

### مهام معلقة (Pending Tasks)

- [ ] إنشاء `DESIGN_MAP.md`

- [ ] تهيئة مشروع Django + Poetry

- [ ] تهيئة مشروع React + Vite + TailwindCSS

- [ ] تنفيذ Milestone 1 (Foundation)

- [ ] تنفيذ Milestone 2 (Student Management)

- [ ] تنفيذ Milestone 3 (Daily Operations)

- [ ] تنفيذ Milestone 4 (Guardian Experience)

- [ ] تنفيذ Milestone 5 (Finance)

- [ ] تنفيذ Milestone 6 (Transfers & Certificates)

- [ ] تنفيذ Milestone 7 (Polish & Testing)

---

## \[MILESTONES\]

| \# | الاسم | المحتوى | هدف قابل للتحقق |
| --- | --- | --- | --- |
| M1 | Foundation | Django + Poetry setup, Custom User, JWT auth, React + Vite + TailwindCSS, Login page, Auth context, Role-based routing | مستخدم يسجل دخول ويرى لوحة تحكم فارغة حسب دوره |
| M2 | Student Management | School, Teacher, Guardian, Student models + APIs + CRUD pages | مدير يضيف معلم وولي أمر وطالب ويربطهم |
| M3 | Daily Operations | Attendance, Memorization, Review, Notes models + APIs + signals → notifications + teacher pages | معلم يسجل حضور وحفظ ومراجعة وملاحظة لطالب |
| M4 | Guardian Experience | Guardian dashboard, child detail, notifications polling | ولي أمر يرى كل بيانات طفله ويستلم إشعارات |
| M5 | Finance | Payment model + APIs + reminder command + payment pages (3 roles) | معلم يسجل دفعة → ولي أمر يرى "مسدد" → مدير يرى الكل |
| M6 | Transfers & Certificates | Transfer requests + approval, Certificate model + PDF generation | طلب نقل يُوافق عليه + شهادة PDF تُولد وتُحمّل |
| M7 | Polish & Testing | Loading/error/empty states, responsive, backend tests, README | كل الصفحات responsive + اختبارات API تنجح |

---

## \[VERIFICATION_CHECKLIST\]

لكل Milestone، يجب التحقق من:

- [ ] النماذج (Models) تُنشأ بنجاح (`makemigrations` + `migrate`)

- [ ] الـ APIs تعيد البيانات الصحيحة (اختبار يدوي أو Postman)

- [ ] الصلاحيات تعمل (معلم لا يصل لطلاب غيره، ولي أمر لا يصل لأطفال غيره)

- [ ] الإشعارات تُنشأ تلقائياً عند الأحداث المطلوبة

- [ ] الواجهة تعرض البيانات بشكل صحيح (RTL، خط عربي)

- [ ] الواجهة responsive (جوال + كمبيوتر)

- [ ] حالات Loading و Error و Empty تعمل