import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchTransfers, approveTransfer, rejectTransfer } from '../../api/students'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { Check, X } from 'lucide-react'

const statusMap = {
  pending: { label: 'معلق', color: 'amber' },
  approved: { label: 'موافق', color: 'green' },
  rejected: { label: 'مرفوض', color: 'red' },
}

export default function Transfers() {
  const queryClient = useQueryClient()

  const { data: transfers, isLoading } = useQuery({
    queryKey: ['transfers'],
    queryFn: async () => {
      const res = await fetchTransfers()
      return res.data.results
    },
  })

  const approveMut = useMutation({
    mutationFn: (id) => approveTransfer(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['transfers'] }),
  })

  const rejectMut = useMutation({
    mutationFn: (id) => rejectTransfer(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['transfers'] }),
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">طلبات النقل</h1>

      <Card>
        {transfers?.length === 0 ? (
          <EmptyState message="لا توجد طلبات نقل" />
        ) : (
          <table className="w-full text-right">
            <thead className="border-b border-slate-200 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-medium">الطالب</th>
                <th className="p-4 font-medium">من معلم</th>
                <th className="p-4 font-medium">إلى معلم</th>
                <th className="p-4 font-medium">السبب</th>
                <th className="p-4 font-medium">الحالة</th>
                <th className="p-4 font-medium">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {transfers?.map((t) => {
                const status = statusMap[t.status] || statusMap.pending
                return (
                  <tr key={t.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-800">{t.student_name}</td>
                    <td className="p-4 text-slate-600 text-sm">{t.from_teacher_name}</td>
                    <td className="p-4 text-slate-600 text-sm">{t.to_teacher_name}</td>
                    <td className="p-4 text-slate-600 text-sm max-w-xs truncate">{t.reason}</td>
                    <td className="p-4">
                      <Badge color={status.color}>{status.label}</Badge>
                    </td>
                    <td className="p-4">
                      {t.status === 'pending' && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => approveMut.mutate(t.id)}
                            className="text-emerald-600 hover:text-emerald-800"
                            title="موافقة"
                          >
                            <Check size={20} />
                          </button>
                          <button
                            onClick={() => rejectMut.mutate(t.id)}
                            className="text-red-500 hover:text-red-700"
                            title="رفض"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  )
}