import { useQuery } from '@tanstack/react-query'
import { fetchStudents } from '../../api/students'
import { fetchAttendance } from '../../api/attendance'
import Card from '../../components/ui/Card'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { Users, CalendarCheck, BookOpen } from 'lucide-react'

export default function TeacherDashboard() {
  const { data: students, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const res = await fetchStudents()
      return res.data.results
    },
  })

  const { data: attendance } = useQuery({
    queryKey: ['attendance'],
    queryFn: async () => {
      const res = await fetchAttendance()
      return res.data.results
    },
  })

  if (isLoading) return <LoadingSpinner />

  const today = new Date().toISOString().split('T')[0]
  const todayAttendance = attendance?.filter((a) => a.date === today) || []

  const stats = [
    { label: 'إجمالي الطلاب', value: students?.length || 0, icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'حضور اليوم', value: todayAttendance.length, icon: CalendarCheck, color: 'text-blue-600 bg-blue-50' },
    { label: 'سجلات الحفظ', value: students?.length || 0, icon: BookOpen, color: 'text-amber-600 bg-amber-50' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">لوحة التحكم</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <Card key={s.label} className="p-5">
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
          )
        })}
      </div>

      <Card className="p-5">
        <h2 className="font-bold text-slate-800 mb-4">طلابي</h2>
        {students?.length === 0 ? (
          <p className="text-slate-400 text-center py-8">لا يوجد طلاب</p>
        ) : (
          <div className="space-y-2">
            {students?.map((s) => (
              <div key={s.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                <span className="font-medium text-slate-700">{s.name}</span>
                <span className="text-sm text-slate-400">{s.teacher_name || 'بدون معلم'}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}