import { useQuery, useMutation } from '@tanstack/react-query'
import { fetchCertificates, downloadCertificatePdf } from '../../api/certificates'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { Download } from 'lucide-react'

export default function GuardianCertificates() {
  const { data: certificates, isLoading } = useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      const res = await fetchCertificates()
      return res.data.results
    },
  })

  const downloadMut = useMutation({
    mutationFn: (id) => downloadCertificatePdf(id),
    onSuccess: (res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `certificate.pdf`)
      document.body.appendChild(link)
      link.click()
      link.remove()
    },
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">شهادات أطفالي</h1>

      {certificates?.length === 0 ? (
        <EmptyState message="لا توجد شهادات" />
      ) : (
        <div className="space-y-3">
          {certificates?.map((c) => (
            <Card key={c.id} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">{c.title}</p>
                <p className="text-sm text-slate-500 mt-1">{c.student_name}</p>
                <div className="mt-2">
                  <Badge color={c.status === 'approved' ? 'green' : c.status === 'rejected' ? 'red' : 'amber'}>
                    {c.status === 'approved' ? 'موافق' : c.status === 'rejected' ? 'مرفوض' : 'معلق'}
                  </Badge>
                </div>
              </div>
              {c.status === 'approved' && (
                <Button
                  size="sm"
                  onClick={() => downloadMut.mutate(c.id)}
                  loading={downloadMut.isPending}
                >
                  <Download size={16} className="inline ml-1" />
                  تحميل PDF
                </Button>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}