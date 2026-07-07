import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchPayments, createPayment } from '../../api/finance'
import { fetchStudents } from '../../api/students'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Modal from '../../components/ui/Modal'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'

export default function TeacherPayments() {
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ student: '', amount: '', month: new Date().toISOString().slice(0, 7) })
  const queryClient = useQueryClient()

  const { data: payments, isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await fetchPayments()
      return res.data.results
    },
  })

  const { data: students } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const res = await fetchStudents()
      return res.data.results
    },
  })

  const createMut = useMutation({
    mutationFn: (data) => createPayment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] })
      setShowModal(false)
      setForm({ student: '', amount: '', month: new Date().toISOString().slice(0, 7) })
    },
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">المدفوعات</h1>
        <Button onClick={() => setShowModal(true)}>تسجيل دفعة</Button>
      </div>

      {payments?.length === 0 ? (
        <EmptyState message="لا توجد مدفوعات مسجلة" />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-right">
            <thead className="bg-slate-50 text-slate-600 text-sm">
              <tr>
                <th className="p-4 font-medium">الطالب</th>
                <th className="p-4 font-medium">المبلغ</th>
                <th className="p-4 font-medium">الشهر</th>
                <th className="p-4 font-medium">التاريخ</th>
                <th className="p-4 font-medium">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payments?.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50">
                  <td className="p-4 text-sm text-slate-800">{p.student_name}</td>
                  <td className="p-4 text-sm text-slate-700">{p.amount}</td>
                  <td className="p-4 text-sm text-slate-700">{p.month}</td>
                  <td className="p-4 text-sm text-slate-500">{p.date}</td>
                  <td className="p-4">
                    <Badge color={p.is_paid ? 'green' : 'red'}>
                      {p.is_paid ? 'مسدد' : 'غير مسدد'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <Modal open={showModal} title="تسجيل دفعة" onClose={() => setShowModal(false)}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              createMut.mutate(form)
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">الطالب</label>
              <select
                value={form.student}
                onChange={(e) => setForm({ ...form, student: e.target.value })}
                required
                className="w-full rounded-lg border border-slate-300 p-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">اختر طالب</option>
                {students?.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">المبلغ</label>
              <input
                type="number"
                step="0.01"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                required
                className="w-full rounded-lg border border-slate-300 p-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">الشهر</label>
              <input
                type="month"
                value={form.month}
                onChange={(e) => setForm({ ...form, month: e.target.value })}
                required
                className="w-full rounded-lg border border-slate-300 p-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="submit" loading={createMut.isPending}>حفظ</Button>
              <Button variant="secondary" onClick={() => setShowModal(false)}>إلغاء</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}