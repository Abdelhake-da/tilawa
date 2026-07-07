import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchCertificates, approveCertificate, rejectCertificate } from '../../api/certificates'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'

export default function ManagerCertificates() {
  const queryClient = useQueryClient()

  const { data: certificates, isLoading } = useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      const res = await fetchCertificates()
      return res.data.results
    },
  })

  const approveMut = useMutation({
    mutationFn: (id) => approveCertificate(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['certificates'] }),
  })

  const rejectMut = useMutation({
    mutationFn: (id) => rejectCertificate(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['certificates'] }),
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">الشهادات</h1>

      {certificates?.length === 0 ? (
        <EmptyState message="لا توجد طلبات شهادات" />
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-right">
            <thead className="bg-slate-50 text-slate-600 text-sm">
              <tr>
                <th className="p-4 font-medium">الطالب</th>
                <th className="p-4 font-medium">العنوان</th>
                <th className="p-4 font-medium">الحالة</th>
                <th className="p-4 font-medium">التاريخ</th>
                <th className="p-4 font-medium">إجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {certificates?.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">
                  <td className="p-4 text-sm text-slate-800">{c.student_name}</td>
                  <td className="p-4 text-sm text-slate-700">{c.title}</td>
                  <td className="p-4">
                    <Badge color={c.status === 'approved' ? 'green' : c.status === 'rejected' ? 'red' : 'amber'}>
                      {c.status === 'approved' ? 'موافق' : c.status === 'rejected' ? 'مرفوض' : 'معلق'}
                    </Badge>
                  </td>
                  <td className="p-4 text-sm text-slate-500">{c.created_at?.split('T')[0]}</td>
                  <td className="p-4">
                    {c.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => approveMut.mutate(c.id)} loading={approveMut.isPending}>
                          موافقة
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => rejectMut.mutate(c.id)} loading={rejectMut.isPending}>
                          رفض
                        </Button>
                      </div>
                    )}
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