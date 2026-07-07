import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchStudent } from '../../api/students'
import { fetchAttendanceByStudent, createAttendance, updateAttendance } from '../../api/attendance'
import { createMemorization, createReview, createNote } from '../../api/quran'
import { fetchMemorizationByStudent, fetchReviewsByStudent, fetchNotesByStudent } from '../../api/quran'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Modal from '../../components/ui/Modal'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { ArrowRight, CalendarCheck, BookOpen, RotateCcw, MessageSquare } from 'lucide-react'

const qualityOptions = [
  { value: 'excellent', label: 'ممتاز' },
  { value: 'good', label: 'جيد' },
  { value: 'needs_repeat', label: 'يحتاج تكرار' },
]

export default function StudentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({})

  const { data: student, isLoading } = useQuery({
    queryKey: ['student', id],
    queryFn: async () => {
      const res = await fetchStudent(id)
      return res.data
    },
  })

  const { data: memorization } = useQuery({
    queryKey: ['memorization', id],
    queryFn: async () => {
      const res = await fetchMemorizationByStudent(id)
      return res.data.results
    },
  })

  const { data: reviews } = useQuery({
    queryKey: ['reviews', id],
    queryFn: async () => {
      const res = await fetchReviewsByStudent(id)
      return res.data.results
    },
  })

  const { data: notes } = useQuery({
    queryKey: ['notes', id],
    queryFn: async () => {
      const res = await fetchNotesByStudent(id)
      return res.data.results
    },
  })

  const { data: todayAttendance } = useQuery({
    queryKey: ['today-attendance', id],
    queryFn: async () => {
      const res = await fetchAttendanceByStudent(id)
      const today = new Date().toISOString().split('T')[0]
      return res.data.results?.find((a) => a.date === today) || null
    },
  })

  const checkInMut = useMutation({
    mutationFn: () => {
      const now = new Date().toTimeString().split(' ')[0]
      return createAttendance({
        student: id,
        date: new Date().toISOString().split('T')[0],
        check_in_time: now,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['today-attendance', id] })
      queryClient.invalidateQueries({ queryKey: ['attendance'] })
    },
  })

  const checkOutMut = useMutation({
    mutationFn: () => {
      const now = new Date().toTimeString().split(' ')[0]
      return updateAttendance(todayAttendance.id, { check_out_time: now })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['today-attendance', id] })
      queryClient.invalidateQueries({ queryKey: ['attendance'] })
    },
  })

  const createMut = useMutation({
    mutationFn: (data) => {
      if (modal === 'memorization') return createMemorization({ ...data, student: id })
      if (modal === 'review') return createReview({ ...data, student: id })
      if (modal === 'note') return createNote({ ...data, student: id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['memorization', id] })
      queryClient.invalidateQueries({ queryKey: ['reviews', id] })
      queryClient.invalidateQueries({ queryKey: ['notes', id] })
      setModal(null)
      setForm({})
    },
  })

  if (isLoading) return <LoadingSpinner />

  const openModal = (type) => {
    setModal(type)
    setForm({ date: new Date().toISOString().split('T')[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createMut.mutate(form)
  }

  const qualityLabel = (val) => qualityOptions.find((q) => q.value === val)?.label || val

  return (
    <div>
      <button
        onClick={() => navigate('/teacher/students')}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-4"
      >
        <ArrowRight size={20} />
        <span>عودة للقائمة</span>
      </button>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{student?.name}</h1>
          <p className="text-slate-500 text-sm mt-1">
            ولي الأمر: {student?.guardian_name || '—'} | المعلم: {student?.teacher_name || '—'}
          </p>
        </div>
        <Badge color={student?.is_active ? 'green' : 'red'}>
          {student?.is_active ? 'نشط' : 'متوقف'}
        </Badge>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {!todayAttendance ? (
          <Button onClick={() => checkInMut.mutate()} loading={checkInMut.isPending} size="sm">
            <span className="flex items-center gap-2"><CalendarCheck size={16} /> تسجيل دخول</span>
          </Button>
        ) : todayAttendance.check_in_time && !todayAttendance.check_out_time ? (
          <Button onClick={() => checkOutMut.mutate()} loading={checkOutMut.isPending} variant="secondary" size="sm">
            <span className="flex items-center gap-2"><CalendarCheck size={16} /> تسجيل خروج</span>
          </Button>
        ) : (
          <div className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-sm text-center flex items-center justify-center">
            اكتمل الحضور اليوم
          </div>
        )}
        <Button onClick={() => openModal('memorization')} variant="secondary" size="sm">
          <span className="flex items-center gap-2"><BookOpen size={16} /> حفظ</span>
        </Button>
        <Button onClick={() => openModal('review')} variant="secondary" size="sm">
          <span className="flex items-center gap-2"><RotateCcw size={16} /> مراجعة</span>
        </Button>
        <Button onClick={() => openModal('note')} variant="secondary" size="sm">
          <span className="flex items-center gap-2"><MessageSquare size={16} /> ملاحظة</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <h3 className="font-bold text-slate-800 mb-3">سجلات الحفظ</h3>
          {memorization?.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">لا توجد سجلات</p>
          ) : (
            <div className="space-y-2">
              {memorization?.map((m) => (
                <div key={m.id} className="p-3 rounded-lg bg-slate-50">
                  <p className="font-medium text-slate-700 text-sm">{m.surah_name} ({m.from_ayah}-{m.to_ayah})</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-400">{m.date}</span>
                    <Badge color={m.quality === 'excellent' ? 'green' : m.quality === 'good' ? 'blue' : 'amber'}>
                      {qualityLabel(m.quality)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-5">
          <h3 className="font-bold text-slate-800 mb-3">سجلات المراجعة</h3>
          {reviews?.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">لا توجد سجلات</p>
          ) : (
            <div className="space-y-2">
              {reviews?.map((r) => (
                <div key={r.id} className="p-3 rounded-lg bg-slate-50">
                  <p className="font-medium text-slate-700 text-sm">{r.content}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-400">{r.date}</span>
                    <Badge color={r.quality === 'excellent' ? 'green' : r.quality === 'good' ? 'blue' : 'amber'}>
                      {qualityLabel(r.quality)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-5">
          <h3 className="font-bold text-slate-800 mb-3">الملاحظات</h3>
          {notes?.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4">لا توجد ملاحظات</p>
          ) : (
            <div className="space-y-2">
              {notes?.map((n) => (
                <div key={n.id} className="p-3 rounded-lg bg-slate-50">
                  <p className="text-slate-700 text-sm">{n.content}</p>
                  <span className="text-xs text-slate-400 mt-1 block">{n.created_at?.split('T')[0]}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Memorization Modal */}
      <Modal open={modal === 'memorization'} onClose={() => setModal(null)} title="تسجيل حفظ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="التاريخ"
            type="date"
            value={form.date || ''}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
          <Input
            label="السورة"
            value={form.surah_name || ''}
            onChange={(e) => setForm({ ...form, surah_name: e.target.value })}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="من آية"
              type="number"
              value={form.from_ayah || ''}
              onChange={(e) => setForm({ ...form, from_ayah: e.target.value })}
              required
            />
            <Input
              label="إلى آية"
              type="number"
              value={form.to_ayah || ''}
              onChange={(e) => setForm({ ...form, to_ayah: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">الجودة</label>
            <select
              value={form.quality || ''}
              onChange={(e) => setForm({ ...form, quality: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              required
            >
              <option value="">اختر الجودة</option>
              {qualityOptions.map((q) => (
                <option key={q.value} value={q.value}>{q.label}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" loading={createMut.isPending}>حفظ</Button>
            <Button variant="secondary" onClick={() => setModal(null)}>إلغاء</Button>
          </div>
        </form>
      </Modal>

      {/* Review Modal */}
      <Modal open={modal === 'review'} onClose={() => setModal(null)} title="تسجيل مراجعة">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="التاريخ"
            type="date"
            value={form.date || ''}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">نوع المراجعة</label>
            <select
              value={form.review_type || ''}
              onChange={(e) => setForm({ ...form, review_type: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              required
            >
              <option value="">اختر النوع</option>
              <option value="daily">يومي</option>
              <option value="weekly">أسبوعي</option>
              <option value="monthly">شهري</option>
            </select>
          </div>
          <Input
            label="المحتوى (مثلاً: الجزء 30)"
            value={form.content || ''}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">الجودة</label>
            <select
              value={form.quality || ''}
              onChange={(e) => setForm({ ...form, quality: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              required
            >
              <option value="">اختر الجودة</option>
              {qualityOptions.map((q) => (
                <option key={q.value} value={q.value}>{q.label}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" loading={createMut.isPending}>حفظ</Button>
            <Button variant="secondary" onClick={() => setModal(null)}>إلغاء</Button>
          </div>
        </form>
      </Modal>

      {/* Note Modal */}
      <Modal open={modal === 'note'} onClose={() => setModal(null)} title="كتابة ملاحظة">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">الملاحظة</label>
            <textarea
              value={form.content || ''}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              required
            />
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" loading={createMut.isPending}>حفظ</Button>
            <Button variant="secondary" onClick={() => setModal(null)}>إلغاء</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}