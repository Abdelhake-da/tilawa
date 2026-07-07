import { useQuery } from '@tanstack/react-query'
import { fetchStudents } from '../../api/students'
import { fetchAttendance } from '../../api/attendance'
import { fetchNotifications } from '../../api/notifications'
import StudentCard from '../../shared/StudentCard'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { Bell } from 'lucide-react'

export default function GuardianDashboard() {
  const { data: students, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const res = await fetchStudents()
      return res.data.results
    },
  })

  const { data: attendanceRecords } = useQuery({
    queryKey: ['attendance'],
    queryFn: async () => {
      const res = await fetchAttendance()
      return res.data.results
    },
  })

  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const res = await fetchNotifications()
      return res.data.results?.slice(0, 5)
    },
  })

  if (isLoading) return <LoadingSpinner />

  const today = new Date().toISOString().split('T')[0]

  const getTodayAttendance = (studentId) => {
    return attendanceRecords?.find((a) => a.student === studentId && a.date === today)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">أطفالي</h1>

      {students?.length === 0 ? (
        <EmptyState message="لا يوجد أطفال مسجلين" />
      ) : (
        <div className="space-y-3 mb-8">
          {students?.map((s) => (
            <StudentCard
              key={s.id}
              student={s}
              attendanceToday={getTodayAttendance(s.id)}
            />
          ))}
        </div>
      )}

      <div className="border-t border-slate-200 pt-6">
        <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Bell size={20} />
          آخر الإشعارات
        </h2>
        {notifications?.length === 0 ? (
          <p className="text-slate-400 text-sm text-center py-4">لا توجد إشعارات</p>
        ) : (
          <div className="space-y-2">
            {notifications?.map((n) => (
              <div
                key={n.id}
                className={`p-3 rounded-lg border-r-4 ${
                  n.is_read
                    ? 'bg-white border-slate-200'
                    : 'bg-emerald-50 border-emerald-500'
                }`}
              >
                <p className="font-medium text-slate-800 text-sm">{n.title}</p>
                <p className="text-slate-600 text-sm mt-1">{n.message}</p>
                <span className="text-xs text-slate-400 mt-1 block">
                  {n.created_at?.split('T')[0]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}