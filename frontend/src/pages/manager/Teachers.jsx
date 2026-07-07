import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchTeachers, createTeacher, deleteTeacher } from '../../api/students'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Modal from '../../components/ui/Modal'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { Plus, Trash2 } from 'lucide-react'

export default function Teachers() {
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ username: '', first_name: '', last_name: '', password: '', bio: '' })
  const [error, setError] = useState('')
  const queryClient = useQueryClient()

  const { data: teachers, isLoading } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const res = await fetchTeachers()
      return res.data.results
    },
  })

  const createMut = useMutation({
    mutationFn: (data) => createTeacher(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teachers'] })
      setModalOpen(false)
      setForm({ username: '', first_name: '', last_name: '', password: '', bio: '' })
      setError('')
    },
    onError: () => setError('فشل إنشاء المعلم'),
  })

  const deleteMut = useMutation({
    mutationFn: (id) => deleteTeacher(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['teachers'] }),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      ...form,
      teacher: form.teacher || null,
      birth_date: form.birth_date || null,
    }
    createMut.mutate(data)
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">المعلمون</h1>
        <Button onClick={() => setModalOpen(true)}>
          <span className="flex items-center gap-2"><Plus size={18} /> معلم جديد</span>
        </Button>
      </div>

      <Card>
        {teachers?.length === 0 ? (
          <EmptyState message="لا يوجد معلمون بعد" />
        ) : (
          <table className="w-full text-right">
            <thead className="border-b border-slate-200 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-medium">الاسم</th>
                <th className="p-4 font-medium">اسم المستخدم</th>
                <th className="p-4 font-medium">النبذة</th>
                <th className="p-4 font-medium">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {teachers?.map((t) => (
                <tr key={t.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">
                    {t.first_name} {t.last_name}
                  </td>
                  <td className="p-4 text-slate-600">{t.username}</td>
                  <td className="p-4 text-slate-600 text-sm">{t.bio || '—'}</td>
                  <td className="p-4">
                    <button
                      onClick={() => deleteMut.mutate(t.id)}
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

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="إضافة معلم جديد">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center">{error}</div>
          )}
          <Input
            label="اسم المستخدم"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="الاسم الأول"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            />
            <Input
              label="الاسم الأخير"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            />
          </div>
          <Input
            label="كلمة المرور"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <Input
            label="نبذة (اختياري)"
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
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