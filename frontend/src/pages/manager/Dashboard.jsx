import { useQuery } from '@tanstack/react-query'
import { fetchStudents, fetchTeachers, fetchTransfers } from '../../api/students'
import { fetchAttendance } from '../../api/attendance'
import { fetchPayments } from '../../api/finance'
import { fetchCertificates } from '../../api/certificates'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { Users, GraduationCap, UserCog, CalendarCheck, Wallet, Award, ArrowRightLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ManagerDashboard() {
  const { data: students, isLoading: studentsLoading } = useQuery({
    queryKey: ['students'],
    queryFn: async () => { const res = await fetchStudents(); return res.data.results },
  })
  const { data: teachers, isLoading: teachersLoading } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => { const res = await fetchTeachers(); return res.data.results },
  })
  const { data: attendance } = useQuery({
    queryKey: ['attendance'],
    queryFn: async () => { const res = await fetchAttendance(); return res.data.results },
  })
  const { data: payments } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => { const res = await fetchPayments(); return res.data.results },
  })
  const { data: certificates } = useQuery({
    queryKey: ['certificates'],
    queryFn: async () => { const res = await fetchCertificates(); return res.data.results },
  })
  const { data: transfers } = useQuery({
    queryKey: ['transfers'],
    queryFn: async () => { const res = await fetchTransfers(); return res.data.results },
  })

  if (studentsLoading || teachersLoading) return <LoadingSpinner />

  const today = new Date().toISOString().split('T')[0]
  const currentMonth = new Date().toISOString().slice(0, 7)

  const todayAttendance = attendance?.filter((a) => a.date === today) || []
  const monthPayments = payments?.filter((p) => p.month === currentMonth) || []
  const paidCount = monthPayments.filter((p) => p.is_paid).length
  const unpaidCount = monthPayments.filter((p) => !p.is_paid).length
  const pendingCertificates = certificates?.filter((c) => c.status === 'pending') || []
  const pendingTransfers = transfers?.filter((t) => t.status === 'pending') || []

  const stats = [
    { label: 'الطلاب', value: students?.length || 0, icon: Users, color: 'text-emerald-600 bg-emerald-50', link: '/manager/students' },
    { label: 'المعلمون', value: teachers?.length || 0, icon: GraduationCap, color: 'text-blue-600 bg-blue-50', link: '/manager/teachers' },
    { label: 'حضور اليوم', value: todayAttendance.length, icon: CalendarCheck, color: 'text-amber-600 bg-amber-50', link: '/manager/students' },
    { label: 'مدفوعات الشهر', value: `${paidCount}/${monthPayments.length}`, icon: Wallet, color: 'text-purple-600 bg-purple-50', link: '/manager/payments' },
    { label: 'شهادات معلّقة', value: pendingCertificates.length, icon: Award, color: 'text-rose-600 bg-rose-50', link: '/manager/certificates' },
    { label: 'طلبات نقل معلّقة', value: pendingTransfers.length, icon: ArrowRightLeft, color: 'text-cyan-600 bg-cyan-50', link: '/manager/transfers' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">لوحة التحكم</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <Link key={s.label} to={s.link}>
              <Card className="p-5 hover:shadow-md transition cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{s.value}</p>
                    <p className="text-sm text-slate-500">{s.label}</p>
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-800">شهادات معلّقة</h2>
            <Link to="/manager/certificates" className="text-sm text-emerald-600 hover:underline">عرض الكل</Link>
          </div>
          {pendingCertificates.length === 0 ? (
            <p className="text-slate-400 text-center py-6">لا توجد طلبات معلّقة</p>
          ) : (
            <div className="space-y-2">
              {pendingCertificates.slice(0, 5).map((c) => (
                <div key={c.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <p className="font-medium text-slate-700">{c.student_name}</p>
                    <p className="text-sm text-slate-400">{c.title}</p>
                  </div>
                  <Badge color="amber">معلّق</Badge>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-slate-800">طلبات نقل معلّقة</h2>
            <Link to="/manager/transfers" className="text-sm text-emerald-600 hover:underline">عرض الكل</Link>
          </div>
          {pendingTransfers.length === 0 ? (
            <p className="text-slate-400 text-center py-6">لا توجد طلبات نقل</p>
          ) : (
            <div className="space-y-2">
              {pendingTransfers.slice(0, 5).map((t) => (
                <div key={t.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                  <div>
                    <p className="font-medium text-slate-700">{t.student_name}</p>
                    <p className="text-sm text-slate-400">{t.from_teacher_name} ← {t.to_teacher_name}</p>
                  </div>
                  <Badge color="amber">معلّق</Badge>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}