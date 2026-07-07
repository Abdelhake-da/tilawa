import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchStudents } from '../../api/students'
import { fetchAttendance, createAttendance, updateAttendance } from '../../api/attendance'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import EmptyState from '../../components/ui/EmptyState'
import { Search } from 'lucide-react'

export default function StudentList() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const queryClient = useQueryClient()

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

  const checkInMut = useMutation({
    mutationFn: ({ studentId }) => {
      const now = new Date().toTimeString().split(' ')[0]
      return createAttendance({
        student: studentId,
        date: new Date().toISOString().split('T')[0],
        check_in_time: now,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['attendance'] })
    },
  })

  const checkOutMut = useMutation({
    mutationFn: ({ id }) => {
      const now = new Date().toTimeString().split(' ')[0]
      return updateAttendance(id, { check_out_time: now })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['attendance'] })
    },
  })

  if (isLoading) return <LoadingSpinner />

  const today = new Date().toISOString().split('T')[0]

  const getTodayRecord = (studentId) => {
    return attendanceRecords?.find((a) => a.student === studentId && a.date === today)
  }

  const filtered = students?.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">قائمة الطلاب</h1>

      <div className="relative mb-4">
        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="بحث عن طالب..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
        />
      </div>

      <Card>
        {filtered?.length === 0 ? (
          <EmptyState message="لا يوجد طلاب" />
        ) : (
          <table className="w-full text-right">
            <thead className="border-b border-slate-200 text-slate-500 text-sm">
              <tr>
                <th className="p-4 font-medium">الاسم</th>
                <th className="p-4 font-medium">ولي الأمر</th>
                <th className="p-4 font-medium">الحالة</th>
                <th className="p-4 font-medium">الحضور</th>
              </tr>
            </thead>
            <tbody>
              {filtered?.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-slate-800" onClick={() => navigate(`/teacher/students/${s.id}`)}>{s.name}</td>
                  <td className="p-4 text-slate-600 text-sm" onClick={() => navigate(`/teacher/students/${s.id}`)}>{s.guardian_name || '—'}</td>
                  <td className="p-4" onClick={() => navigate(`/teacher/students/${s.id}`)}>
                    <Badge color={s.is_active ? 'green' : 'red'}>
                      {s.is_active ? 'نشط' : 'متوقف'}
                    </Badge>
                  </td>
                  <td className="p-4" onClick={(e) => e.stopPropagation()}>
                    {(() => {
                      const record = getTodayRecord(s.id)
                      if (!record) {
                        return (
                          <Button
                            size="sm"
                            onClick={() => checkInMut.mutate({ studentId: s.id })}
                            loading={checkInMut.isPending}
                          >
                            دخول
                          </Button>
                        )
                      }
                      if (record.check_in_time && !record.check_out_time) {
                        return (
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => checkOutMut.mutate({ id: record.id })}
                            loading={checkOutMut.isPending}
                          >
                            خروج
                          </Button>
                        )
                      }
                      return <Badge color="green">اكتمل</Badge>
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  )
}