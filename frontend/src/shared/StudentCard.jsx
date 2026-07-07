import { useNavigate } from 'react-router-dom'
import Badge from '../components/ui/Badge'

export default function StudentCard({ student, attendanceToday }) {
  const navigate = useNavigate()

  const isPresent = attendanceToday?.check_in_time
  const isComplete = attendanceToday?.check_in_time && attendanceToday?.check_out_time

  return (
    <div
      onClick={() => navigate(`/guardian/children/${student.id}`)}
      className="bg-white rounded-lg shadow border border-slate-200 p-4 cursor-pointer active:bg-slate-50 transition"
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-bold">
          {student.name?.charAt(0)}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-slate-800">{student.name}</p>
          <p className="text-sm text-slate-500">المعلم: {student.teacher_name || '—'}</p>
        </div>
        <Badge color={isComplete ? 'green' : isPresent ? 'blue' : 'red'}>
          {isComplete ? 'اكتمل' : isPresent ? 'حاضر' : 'غائب'}
        </Badge>
      </div>
    </div>
  )
}