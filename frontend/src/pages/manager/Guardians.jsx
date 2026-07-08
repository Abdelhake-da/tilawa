import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchGuardians, createGuardian } from '../../api/students'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Modal from '../../components/ui/Modal'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { Plus, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const relationshipOptions = [
  { value: 'father', label: 'أب' },
  { value: 'mother', label: 'أم' },
  { value: 'grandfather', label: 'جد' },
  { value: 'grandmother', label: 'جدة' },
  { value: 'uncle', label: 'عم/خال' },
  { value: 'other', label: 'أخرى' },
]

export default function Guardians() {
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ username: '', first_name: '', last_name: '', password: '', relationship: 'father' })
  const [error, setError] = useState('')
  const queryClient = useQueryClient()

  const { data: guardians, isLoading } = useQuery({
    queryKey: ['guardians'],
    queryFn: async () => {
      const res = await fetchGuardians()
      return res.data.results
    },
  })

  const createMut = useMutation({
    mutationFn: (data) => createGuardian(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guardians'] })
      setModalOpen(false)
      setForm({ username: '', first_name: '', last_name: '', password: '', relationship: 'father' })
      setError('')
    },
    onError: () => setError('فشل إنشاء ولي الأمر'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createMut.mutate(form)
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">أولياء الأمور</h1>
        <Button onClick={() => setModalOpen(true)}>
          <span className="flex items-center gap-2"><Plus size={18} /> ولي أمر جديد</span>
        </Button>
      </div>

      <Card>
        {guardians?.length === 0 ? (
          <EmptyState message="لا يوجد أولياء أمور بعد" />
        ) : (
          <table className="w-full text-right">
            <thead className="border-b border-slate-200 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-medium">الاسم</th>
                <th className="p-4 font-medium">اسم المستخدم</th>
                <th className="p-4 font-medium">صلة القرابة</th>
                <th className="p-4 font-medium">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {guardians?.map((g) => (
                <tr key={g.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-800">
                    {g.first_name} {g.last_name}
                  </td>
                  <td className="p-4 text-slate-600">{g.username}</td>
                  <td className="p-4 text-slate-600 text-sm">
                    {relationshipOptions.find((r) => r.value === g.relationship)?.label || g.relationship}
                  </td>
                  <td className="p-4">
                    <Link
                      to={`/manager/guardians/${g.id}`}
                      className="text-emerald-600 hover:text-emerald-800"
                      title="عرض التفاصيل"
                    >
                      <Eye size={18} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="إضافة ولي أمر جديد">
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
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">صلة القرابة</label>
            <select
              value={form.relationship}
              onChange={(e) => setForm({ ...form, relationship: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
            >
              {relationshipOptions.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" loading={createMut.isPending}>حفظ</Button>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>إلغاء</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
