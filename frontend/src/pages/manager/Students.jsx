import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchStudents, createStudent, deleteStudent, fetchTeachers, fetchGuardians } from '../../api/students'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Modal from '../../components/ui/Modal'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { Plus, Trash2 } from 'lucide-react'

export default function Students() {
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: '', guardian: '', teacher: '', birth_date: '' })
  const [error, setError] = useState('')
  const queryClient = useQueryClient()

  const { data: students, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const res = await fetchStudents()
      return res.data.results
    },
  })

  const { data: teachers } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const res = await fetchTeachers()
      return res.data.results
    },
  })

  const { data: guardians } = useQuery({
    queryKey: ['guardians'],
    queryFn: async () => {
      const res = await fetchGuardians()
      return res.data.results
    },
  })

  const createMut = useMutation({
    mutationFn: (data) => createStudent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] })
      setModalOpen(false)
      setForm({ name: '', guardian: '', teacher: '', birth_date: '' })
      setError('')
    },
    onError: () => setError('فشل إنشاء الطالب'),
  })

  const deleteMut = useMutation({
    mutationFn: (id) => deleteStudent(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['students'] }),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createMut.mutate(form)
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">الطلاب</h1>
        <Button onClick={() => setModalOpen(true)}>
          <span className="flex items-center gap-2"><Plus size={18} /> طالب جديد</span>
        </Button>
      </div>

      <Card>
        {students?.length === 0 ? (
          <EmptyState message="لا يوجد طلاب بعد" />
        ) : (
          <table className="w-full text-right">
            <thead className="border-b border-slate-200 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-medium">الاسم</th>
                <th className="p-4 font-medium">ولي الأمر</th>
                <th className="p-4 font-medium">المعلم</th>
                <th className="p-4 font-medium">الحالة</th>
                <th className="p-4 font-medium">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((s) => (
                <tr key={s.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">{s.name}</td>
                  <td className="p-4 text-slate-600 text-sm">{s.guardian_name || '—'}</td>
                  <td className="p-4 text-slate-600 text-sm">{s.teacher_name || '—'}</td>
                  <td className="p-4">
                    <Badge color={s.is_active ? 'green' : 'red'}>
                      {s.is_active ? 'نشط' : 'متوقف'}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteMut.mutate(s.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="إضافة طالب جديد">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center">{error}</div>
          )}
          <Input
            label="اسم الطالب"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">ولي الأمر</label>
            <select
              value={form.guardian}
              onChange={(e) => setForm({ ...form, guardian: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              required
            >
              <option value="">اختر ولي الأمر</option>
              {guardians?.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.first_name} {g.last_name} ({g.relationship})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">المعلم</label>
            <select
              value={form.teacher}
              onChange={(e) => setForm({ ...form, teacher: e.target.value || null })}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
            >
              <option value="">بدون معلم</option>
              {teachers?.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.first_name} {t.last_name}
                </option>
              ))}
            </select>
          </div>
          <Input
            label="تاريخ الميلاد (اختياري)"
            type="date"
            value={form.birth_date}
            onChange={(e) => setForm({ ...form, birth_date: e.target.value })}
          />
          <div className="flex gap-3 pt-2">
            <Button type="submit" loading={createMut.isPending}>حفظ</Button>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>إلغاء</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}