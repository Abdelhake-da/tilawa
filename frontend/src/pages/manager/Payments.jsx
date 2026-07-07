import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchPayments } from '../../api/finance'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'

export default function ManagerPayments() {
  const [filterMonth, setFilterMonth] = useState('')

  const { data: payments, isLoading } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await fetchPayments()
      return res.data.results
    },
  })

  if (isLoading) return <LoadingSpinner />

  const filtered = filterMonth
    ? payments?.filter((p) => p.month === filterMonth)
    : payments

  const totalCollected = filtered?.reduce((sum, p) => sum + Number(p.amount), 0)
  const paidCount = filtered?.filter((p) => p.is_paid).length
  const unpaidCount = filtered?.filter((p) => !p.is_paid).length

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">المدفوعات</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-5">
          <p className="text-sm text-slate-500">إجمالي المحصّل</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">{totalCollected || 0}</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-slate-500">مسدد</p>
          <p className="text-2xl font-bold text-blue-700 mt-1">{paidCount || 0}</p>
        </Card>
        <Card className="p-5">
          <p className="text-sm text-slate-500">غير مسدد</p>
          <p className="text-2xl font-bold text-red-700 mt-1">{unpaidCount || 0}</p>
        </Card>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">فلترة بالشهر</label>
        <input
          type="month"
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
          className="rounded-lg border border-slate-300 p-2.5 focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {filtered?.length === 0 ? (
        <EmptyState message="لا توجد مدفوعات" />
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
              {filtered?.map((p) => (
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
    </div>
  )
}